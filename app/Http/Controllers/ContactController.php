<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function show()
    {
        $company = [
            'name' => config('app.company_name', 'INCHWARD LIMITED'),
            'company_number' => config('app.company_number', '16021412'),
            'address' => config('app.company_address', 'Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, United Kingdom'),
            'email' => config('mail.from.address', 'info@tagwearly.co.uk'),
            'sla' => '24-48 Working Hours SLA Response',
        ];

        return Inertia::render('Contact', [
            'company' => $company,
        ]);
    }

    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        $recipientEmail = config('mail.from.address', 'info@tagwearly.co.uk');

        try {
            Mail::to($recipientEmail)->send(new ContactMessageMail($validated));
        } catch (\Throwable $e) {
            logger()->error('Failed sending ContactMessageMail: ' . $e->getMessage());
        }

        return back()->with('success', 'Your support ticket has been logged successfully! Our Trade Department will respond within 24–48 working hours.');
    }
}
