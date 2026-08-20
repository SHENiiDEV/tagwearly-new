<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Tech Pack Unlocked & Invoice Confirmation</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #020617; color: #f8fafc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; }
        .header { padding: 25px 30px; border-bottom: 1px solid #1e293b; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); }
        .brand { font-size: 22px; font-weight: 900; color: #ffffff; }
        .subtitle { font-size: 11px; font-weight: 700; color: #e0e7ff; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }
        .content { padding: 35px; line-height: 1.6; font-size: 14px; color: #cbd5e1; }
        .card { background-color: #020617; border: 1px solid #6366f1; border-radius: 14px; padding: 25px; margin: 20px 0; }
        .card-title { font-size: 11px; font-weight: 800; color: #818cf8; text-transform: uppercase; letter-spacing: 1px; }
        .card-value { font-size: 24px; font-weight: 900; color: #ffffff; margin: 6px 0; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
        .details-table td { padding: 10px 0; border-bottom: 1px solid #1e293b; }
        .details-table td:last-child { text-align: right; font-weight: 700; color: #f8fafc; }
        .btn-container { text-align: center; margin: 30px 0; }
        .btn { display: inline-block; padding: 14px 28px; background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%); color: #ffffff; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 12px; }
        .footer { padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; background-color: #020617; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="brand">TAGWEARLY AI</div>
            <div class="subtitle">Tech Pack Unlocked & Receipt</div>
        </div>
        <div class="content">
            <p>Dear {{ $user->name }},</p>
            <p>Your fashion Tech Pack specification has been successfully compiled and unlocked.</p>

            <div class="card">
                <div class="card-title">Service Purchased</div>
                <div class="card-value">{{ $transaction->service_name }}</div>
                <div style="font-size: 12px; color: #818cf8;">Deduction: -€{{ number_format($transaction->amount, 2) }} EUR</div>
            </div>

            <table class="details-table">
                <tr>
                    <td style="color: #94a3b8;">Transaction Reference:</td>
                    <td><code>{{ $transaction->reference_code }}</code></td>
                </tr>
                @if($techPack)
                <tr>
                    <td style="color: #94a3b8;">Garment Title:</td>
                    <td><strong>{{ $techPack->title }}</strong></td>
                </tr>
                @endif
                <tr>
                    <td style="color: #94a3b8;">Remaining Wallet Balance:</td>
                    <td>€{{ number_format($user->wallet_balance, 2) }} EUR</td>
                </tr>
                <tr>
                    <td style="color: #94a3b8;">Date & Time:</td>
                    <td>{{ $transaction->created_at ? $transaction->created_at->format('d M Y, H:i T') : date('d M Y') }}</td>
                </tr>
            </table>

            <p style="font-size: 12px; color: #94a3b8;">
                Your official B2B PDF invoice issued by <strong>INCHWARD LIMITED</strong> (0% VAT Reverse Charge) is attached to this email and downloadable in your account dashboard.
            </p>

            <div class="btn-container">
                <a href="{{ $techPack ? url('/tech-packs/' . $techPack->id) : url('/dashboard') }}" class="btn">View & Download Factory PDF →</a>
            </div>
        </div>
        <div class="footer">
            INCHWARD LIMITED • Co. No. 16021412 • Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, UK
        </div>
    </div>
</body>
</html>
