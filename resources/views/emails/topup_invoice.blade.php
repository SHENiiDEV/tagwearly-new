<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Wallet Top-Up Confirmed</title>
</head>
<body style="background-color: #0f172a; color: #f8fafc; font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 8px; border: 1px solid #334155;">
        <tr>
            <td style="padding: 30px; text-align: center; border-bottom: 1px solid #334155;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0;">TAGWEARLY AI</h1>
                <p style="color: #10b981; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin: 5px 0 0 0;">PAYMENT CONFIRMED • B2B INVOICE ATTACHED</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 30px; color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                <h2 style="color: #ffffff; font-size: 18px; margin-top: 0;">Hello {{ $user->name }},</h2>
                <p>We have successfully received your payment and credited your Tagwearly AI account wallet balance.</p>

                <table width="100%" border="0" cellspacing="0" cellpadding="10" style="background-color: #0f172a; border-radius: 6px; margin: 20px 0;">
                    <tr>
                        <td style="color: #94a3b8; font-size: 12px;">Transaction Ref:</td>
                        <td style="color: #ffffff; font-weight: 700; text-align: right;">{{ $transaction->reference_code }}</td>
                    </tr>
                    <tr>
                        <td style="color: #94a3b8; font-size: 12px;">Amount Credited:</td>
                        <td style="color: #10b981; font-weight: 800; font-size: 16px; text-align: right;">+€{{ number_format($transaction->amount, 2) }}</td>
                    </tr>
                    <tr>
                        <td style="color: #94a3b8; font-size: 12px;">New Wallet Balance:</td>
                        <td style="color: #ffffff; font-weight: 800; font-size: 16px; text-align: right;">€{{ number_format($user->wallet_balance, 2) }}</td>
                    </tr>
                </table>

                <p>Your official B2B PDF invoice issued by <strong>DRAYBOND LIMITED</strong> (Company No. 16021806) is attached to this email and can also be downloaded anytime in your billing dashboard.</p>

                <div style="text-align: center; margin-top: 30px;">
                    <a href="{{ url('/tech-packs/create') }}" style="background-color: #10b981; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: 700; display: inline-block;">Generate Tech Pack Now</a>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #334155;">
                DRAYBOND LIMITED • Academy House, 11 Dunraven Place, Bridgend, UK • VAT 0% Reverse Charge
            </td>
        </tr>
    </table>
</body>
</html>
