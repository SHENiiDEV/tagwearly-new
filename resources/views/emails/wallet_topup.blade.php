<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Wallet Top-Up Confirmation</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #020617; color: #f8fafc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; }
        .header { padding: 25px 30px; border-bottom: 1px solid #1e293b; background: linear-gradient(135deg, #059669 0%, #10b981 100%); }
        .brand { font-size: 22px; font-weight: 900; color: #ffffff; }
        .subtitle { font-size: 11px; font-weight: 700; color: #d1fae5; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }
        .content { padding: 35px; line-height: 1.6; font-size: 14px; color: #cbd5e1; }
        .amount-card { background-color: #020617; border: 1px solid #059669; border-radius: 14px; padding: 25px; text-align: center; margin: 20px 0; }
        .amount-title { font-size: 11px; font-weight: 800; color: #34d399; text-transform: uppercase; letter-spacing: 1px; }
        .amount-value { font-size: 32px; font-weight: 900; color: #10b981; margin: 6px 0; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
        .details-table td { padding: 10px 0; border-bottom: 1px solid #1e293b; }
        .details-table td:last-child { text-align: right; font-weight: 700; color: #f8fafc; }
        .btn-container { text-align: center; margin: 30px 0; }
        .btn { display: inline-block; padding: 14px 28px; background-color: #10b981; color: #ffffff; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 12px; }
        .footer { padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; background-color: #020617; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="brand">TAGWEARLY AI</div>
            <div class="subtitle">Wallet Top-Up Confirmation</div>
        </div>
        <div class="content">
            <p>Dear {{ $user->name }},</p>
            <p>Your B2B corporate wallet balance has been successfully credited.</p>

            <div class="amount-card">
                <div class="amount-title">Deposit Amount Added</div>
                <div class="amount-value">+€{{ number_format($transaction->amount, 2) }} EUR</div>
                <div style="font-size: 11px; color: #94a3b8;">B2B Tax Invoice Attached (PDF)</div>
            </div>

            <table class="details-table">
                <tr>
                    <td style="color: #94a3b8;">Invoice Reference:</td>
                    <td><code>{{ $transaction->reference_code }}</code></td>
                </tr>
                <tr>
                    <td style="color: #94a3b8;">Package / Service:</td>
                    <td>{{ $transaction->service_name }}</td>
                </tr>
                <tr>
                    <td style="color: #94a3b8;">Updated Wallet Balance:</td>
                    <td style="color: #34d399;">€{{ number_format($user->wallet_balance, 2) }} EUR</td>
                </tr>
                <tr>
                    <td style="color: #94a3b8;">Date & Time:</td>
                    <td>{{ $transaction->created_at ? $transaction->created_at->format('d M Y, H:i T') : date('d M Y') }}</td>
                </tr>
            </table>

            <p style="font-size: 12px; color: #94a3b8;">
                An official B2B PDF Tax Invoice issued by <strong>INCHWARD LIMITED</strong> under 0% VAT Reverse Charge has been generated and attached to this email.
            </p>

            <div class="btn-container">
                <a href="{{ url('/dashboard') }}" class="btn">Go to Brand Dashboard →</a>
            </div>
        </div>
        <div class="footer">
            INCHWARD LIMITED • Co. No. 16021412 • Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, UK
        </div>
    </div>
</body>
</html>
