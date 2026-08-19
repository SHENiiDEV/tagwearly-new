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
            'name' => 'DRAYBOND LIMITED',
            'company_number' => '16021806',
            'address' => 'Academy House, 11 Dunraven Place',
            'city_postcode' => 'Bridgend, Mid Glamorgan, CF31 1JF',
            'country' => 'United Kingdom',
            'vat_rate' => '0% (Reverse Charge - B2B Digital Service)',
            'email' => 'info@tagwearly.co.uk',
        ];

        $html = view('invoices.b2b', [
            'company' => $companyDetails,
            'user' => $user,
            'transaction' => $transaction,
        ])->render();

        $pdf = Pdf::loadHTML($html)->setPaper('a4', 'portrait');

        $fileName = 'invoices/INVOICE_' . $transaction->reference_code . '.pdf';
        Storage::disk('public')->put($fileName, $pdf->output());

        return $fileName;
    }
}
