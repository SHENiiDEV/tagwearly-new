<?php

namespace App\Mail;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DeductionAlertMail extends Mailable
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
            subject: 'Tech Pack Generation Confirmed [' . $this->transaction->service_name . ']',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.deduction_alert',
        );
    }
}
