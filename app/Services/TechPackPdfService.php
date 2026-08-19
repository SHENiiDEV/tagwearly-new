<?php

namespace App\Services;

use App\Models\TechPack;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class TechPackPdfService
{
    public function generateTechPackPdf(TechPack $techPack): string
    {
        $data = $techPack->json_data ?? [];

        $html = view('tech_packs.pdf', [
            'techPack' => $techPack,
            'data' => $data,
        ])->render();

        $pdf = Pdf::loadHTML($html)->setPaper('a4', 'portrait');

        $fileName = 'tech_packs/TECHPACK_' . $techPack->id . '_' . time() . '.pdf';
        Storage::disk('public')->put($fileName, $pdf->output());

        return $fileName;
    }
}
