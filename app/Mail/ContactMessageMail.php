<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    public array $contactData;

    public function __construct(array $contactData)
    {
        $this->contactData = $contactData;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Tagwearly AI Ticket [#SLA-24/48H]: " . ($this->contactData['subject'] ?? 'New Support Request'),
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact_message',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
