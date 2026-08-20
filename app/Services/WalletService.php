<?php

namespace App\Services;

use App\Models\TechPack;
use App\Models\Transaction;
use App\Models\User;
use App\Mail\WalletTopUpMail;
use App\Mail\DocumentPaymentMail;
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
            $refCode = 'TOPUP-' . strtoupper(Str::random(8));

            $transaction = Transaction::create([
                'user_id' => $user->id,
                'reference_code' => $refCode,
                'type' => 'top_up',
                'amount' => $amount,
                'service_name' => $serviceName,
                'status' => 'completed',
            ]);

            $user->increment('wallet_balance', $amount);

            // Generate B2B PDF invoice file
            $invoicePath = $this->invoiceService->generateB2bInvoice($user, $transaction);
            $transaction->update(['invoice_path' => $invoicePath]);

            // Try sending email alert with PDF invoice attached
            try {
                Mail::to($user->email)->send(new WalletTopUpMail($user, $transaction));
            } catch (\Throwable $e) {
                logger()->error('Failed sending WalletTopUpMail: ' . $e->getMessage());
            }

            return $transaction;
        });
    }

    public function deduct(User $user, float $amount, string $serviceName, ?TechPack $techPack = null): Transaction
    {
        if ($user->wallet_balance < $amount) {
            throw new \Exception("Insufficient wallet balance. Please top up your wallet.");
        }

        return DB::transaction(function () use ($user, $amount, $serviceName, $techPack) {
            $refCode = 'INV-' . strtoupper(Str::random(8));

            $user->decrement('wallet_balance', $amount);

            $transaction = Transaction::create([
                'user_id' => $user->id,
                'reference_code' => $refCode,
                'type' => 'deduction',
                'amount' => $amount,
                'service_name' => $serviceName,
                'status' => 'completed',
            ]);

            // Generate B2B PDF invoice file
            $invoicePath = $this->invoiceService->generateB2bInvoice($user, $transaction);
            $transaction->update(['invoice_path' => $invoicePath]);

            try {
                Mail::to($user->email)->send(new DocumentPaymentMail($user, $transaction, $techPack));
            } catch (\Throwable $e) {
                logger()->error('Failed sending DocumentPaymentMail: ' . $e->getMessage());
            }

            return $transaction;
        });
    }
}
