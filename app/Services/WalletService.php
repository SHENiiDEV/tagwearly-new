<?php

namespace App\Services;

use App\Models\Transaction;
use App\Models\User;
use App\Mail\TopUpInvoiceMail;
use App\Mail\DeductionAlertMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class WalletService
{
    protected InvoiceService $invoiceService;

    public function __construct(InvoiceService $invoiceService)
    {
        $this->invoiceService = $invoiceService;
    }

    public function topUp(User $user, float $amount, string $serviceName = 'Wallet Top-Up'): Transaction
    {
        return DB::transaction(function () use ($user, $amount, $serviceName) {
            $refCode = 'TW-INV-' . strtoupper(Str::random(8));

            $transaction = Transaction::create([
                'user_id' => $user->id,
                'reference_code' => $refCode,
                'type' => 'top_up',
                'amount' => $amount,
                'service_name' => $serviceName,
                'status' => 'completed',
            ]);

            $user->increment('wallet_balance', $amount);

            // Generate B2B PDF invoice
            $invoicePath = $this->invoiceService->generateB2bInvoice($user, $transaction);
            $transaction->update(['invoice_path' => $invoicePath]);

            // Try sending email alert with PDF invoice attached
            try {
                Mail::to($user->email)->send(new TopUpInvoiceMail($user, $transaction));
            } catch (\Throwable $e) {
                // Log mail exception if SMTP is offline in local dev
                logger()->error('Failed sending TopUpInvoiceMail: ' . $e->getMessage());
            }

            return $transaction;
        });
    }

    public function deduct(User $user, float $amount, string $serviceName): Transaction
    {
        if ($user->wallet_balance < $amount) {
            throw new \Exception("Insufficient wallet balance. Please top up your wallet.");
        }

        return DB::transaction(function () use ($user, $amount, $serviceName) {
            $refCode = 'TW-DED-' . strtoupper(Str::random(8));

            $user->decrement('wallet_balance', $amount);

            $transaction = Transaction::create([
                'user_id' => $user->id,
                'reference_code' => $refCode,
                'type' => 'deduction',
                'amount' => $amount,
                'service_name' => $serviceName,
                'status' => 'completed',
            ]);

            try {
                Mail::to($user->email)->send(new DeductionAlertMail($user, $transaction));
            } catch (\Throwable $e) {
                logger()->error('Failed sending DeductionAlertMail: ' . $e->getMessage());
            }

            return $transaction;
        });
    }
}
