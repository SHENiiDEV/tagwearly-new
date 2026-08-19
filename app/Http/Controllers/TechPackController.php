<?php

namespace App\Http\Controllers;

use App\Models\TechPack;
use App\Services\DeepSeekTechPackService;
use App\Services\TechPackPdfService;
use App\Services\WalletService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TechPackController extends Controller
{
    protected WalletService $walletService;
    protected DeepSeekTechPackService $deepSeekService;
    protected TechPackPdfService $pdfService;

    public function __construct(
        WalletService $walletService,
        DeepSeekTechPackService $deepSeekService,
        TechPackPdfService $pdfService
    ) {
        $this->walletService = $walletService;
        $this->deepSeekService = $deepSeekService;
        $this->pdfService = $pdfService;
    }

    public function index()
    {
        $user = Auth::user();
        $techPacks = TechPack::where('user_id', $user->id)
            ->latest()
            ->get();

        return Inertia::render('Dashboard', [
            'techPacks' => $techPacks,
            'walletBalance' => $user->wallet_balance,
        ]);
    }

    public function create()
    {
        $user = Auth::user();
        return Inertia::render('TechPacks/Create', [
            'walletBalance' => $user->wallet_balance,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'garment_type' => 'required|string|max:255',
            'tier' => 'required|in:starter,pro,collection,enterprise',
            'brief_text' => 'required|string|min:10',
        ]);

        $user = Auth::user();
        $prices = [
            'starter' => 249.00,
            'pro' => 699.00,
            'collection' => 1999.00,
            'enterprise' => 3499.00,
        ];

        $tier = $request->tier;
        $price = $prices[$tier];
        $tierName = ucfirst($tier);
        $serviceName = "{$tierName} {$request->garment_type} Tech Pack (€" . number_format($price, 0) . ")";

        if ($user->wallet_balance < $price) {
            return back()->withErrors([
                'wallet' => "Insufficient balance (€" . number_format($user->wallet_balance, 2) . "). Required: €" . number_format($price, 2) . ". Please top up your wallet."
            ]);
        }

        // Deduct balance cleanly with strict audit logging
        $this->walletService->deduct($user, $price, $serviceName);

        // Generate JSON data via DeepSeek AI engine
        $jsonData = $this->deepSeekService->generateTechPackData(
            $request->brief_text,
            $request->garment_type,
            $tier
        );

        $techPack = TechPack::create([
            'user_id' => $user->id,
            'title' => $request->title,
            'garment_type' => $request->garment_type,
            'tier' => $tier,
            'price' => $price,
            'brief_text' => $request->brief_text,
            'json_data' => $jsonData,
            'status' => 'completed',
        ]);

        // Render factory multi-page production PDF
        $pdfPath = $this->pdfService->generateTechPackPdf($techPack);
        $techPack->update(['pdf_path' => $pdfPath]);

        return redirect()->route('tech-packs.show', $techPack->id)
            ->with('success', 'Tech Pack successfully generated!');
    }

    public function show(TechPack $techPack)
    {
        if ($techPack->user_id !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('TechPacks/Show', [
            'techPack' => $techPack,
            'walletBalance' => Auth::user()->wallet_balance,
        ]);
    }

    public function exportPdf(TechPack $techPack)
    {
        if ($techPack->user_id !== Auth::id()) {
            abort(403);
        }

        if (!$techPack->pdf_path || !Storage::disk('public')->exists($techPack->pdf_path)) {
            $pdfPath = $this->pdfService->generateTechPackPdf($techPack);
            $techPack->update(['pdf_path' => $pdfPath]);
        }

        return Storage::disk('public')->download(
            $techPack->pdf_path,
            'TAGWEARLY_TECHPACK_' . $techPack->id . '.pdf'
        );
    }
}
