<?php

namespace App\Mail;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class TopUpInvoiceMail extends Mailable
{
    use Queueable, SerializesModels;

    public User $user;
    public Transaction $transaction;

    public function __construct(User $user, Transaction $transaction)
    {
        $this->user = $user;
        $this->transaction = $transaction;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Wallet Top-Up Confirmed & B2B Invoice [' . $this->transaction->reference_code . ']',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.topup_invoice',
        );
    }

    public function attachments(): array
    {
        $attachments = [];

        if ($this->transaction->invoice_path && Storage::disk('public')->exists($this->transaction->invoice_path)) {
            $attachments[] = Attachment::fromPath(Storage::disk('public')->path($this->transaction->invoice_path))
                ->as('INVOICE_' . $this->transaction->reference_code . '.pdf')
                ->withMime('application/pdf');
        }

        return $attachments;
    }
}
