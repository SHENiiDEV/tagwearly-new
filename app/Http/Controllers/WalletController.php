<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Services\WalletService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WalletController extends Controller
{
    protected WalletService $walletService;

    public function __construct(WalletService $walletService)
    {
        $this->walletService = $walletService;
    }

    public function index()
    {
        $user = Auth::user();
        $transactions = Transaction::where('user_id', $user->id)
            ->latest()
            ->get();

        return Inertia::render('Wallet/Index', [
            'walletBalance' => $user->wallet_balance,
            'transactions' => $transactions,
        ]);
    }

    public function topUp(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:10|max:50000',
            'preset' => 'nullable|string',
        ]);

        $user = Auth::user();
        $amount = (float) $request->amount;
        $serviceName = "Wallet Top-Up (€" . number_format($amount, 0) . ")";

        if ($request->preset) {
            $serviceName = ucfirst($request->preset) . " Wallet Credit (€" . number_format($amount, 0) . ")";
        }

        $transaction = $this->walletService->topUp($user, $amount, $serviceName);

        return back()->with('success', "Wallet successfully topped up by €" . number_format($amount, 2) . "!");
    }

    public function downloadInvoice(Transaction $transaction)
    {
        if ($transaction->user_id !== Auth::id()) {
            abort(403);
        }

        if (!$transaction->invoice_path || !Storage::disk('public')->exists($transaction->invoice_path)) {
            return back()->withErrors(['invoice' => 'Invoice file not found.']);
        }

        return Storage::disk('public')->download(
            $transaction->invoice_path,
            'INVOICE_' . $transaction->reference_code . '.pdf'
        );
    }
}
