<?php

namespace App\Services;

use App\Models\Transaction;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class InvoiceService
{
    public function generateB2bInvoice(User $user, Transaction $transaction): string
    {
        $companyDetails = [
            'name' => config('app.company_name', 'CORPORATE ENTITY LIMITED'),
            'company_number' => config('app.company_number', '16133244'),
            'address' => config('app.company_address', '37 Cremer Street, London, England, E2 8HD'),
            'city_postcode' => 'London, E2 8HD',
            'country' => 'United Kingdom',
            'vat_rate' => '0% UK B2B / Reverse Charge',
            'email' => config('mail.from.address', 'info@tagwearly.co.uk'),
        ];

        $html = view('pdf.wallet_invoice', [
            'company' => $companyDetails,
            'user' => $user,
            'transaction' => $transaction,
        ])->render();

        $pdf = Pdf::loadHTML($html)->setPaper('a4', 'portrait');

        $fileName = 'invoices/INVOICE_' . ($transaction->reference_code ?: $transaction->id) . '.pdf';
        Storage::disk('public')->put($fileName, $pdf->output());

        return $fileName;
    }
}
