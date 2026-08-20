<?php

namespace App\Mail;

use App\Models\TechPack;
use App\Models\Transaction;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DocumentPaymentMail extends Mailable
{
    use Queueable, SerializesModels;

    public User $user;
    public Transaction $transaction;
    public ?TechPack $techPack;

    public function __construct(User $user, Transaction $transaction, ?TechPack $techPack = null)
    {
        $this->user = $user;
        $this->transaction = $transaction;
        $this->techPack = $techPack;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Tagwearly AI — Official Invoice & Tech Pack Unlocked (€" . number_format($this->transaction->amount, 2) . ")",
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.document_payment',
        );
    }

    public function attachments(): array
    {
        $pdf = Pdf::loadView('pdf.wallet_invoice', [
            'transaction' => $this->transaction,
            'user' => $this->user,
            'company' => [
                'name' => 'INCHWARD LIMITED',
                'company_number' => '16021412',
                'address' => 'Academy House, 11 Dunraven Place',
                'city_postcode' => 'Bridgend, Mid Glamorgan, CF31 1JF',
                'country' => 'United Kingdom',
                'vat_rate' => '0% UK B2B / Reverse Charge',
                'email' => 'info@tagwearly.co.uk',
            ],
        ])->setPaper('a4', 'portrait');

        $invoiceRef = $this->transaction->reference_code ?: ('INV-' . $this->transaction->id);

        return [
            Attachment::fromData(fn () => $pdf->output(), "Invoice_{$invoiceRef}.pdf")
                ->withMime('application/pdf'),
        ];
    }
}
