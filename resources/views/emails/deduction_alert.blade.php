<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Tech Pack Generation Charged</title>
</head>
<body style="background-color: #0f172a; color: #f8fafc; font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 8px; border: 1px solid #334155;">
        <tr>
            <td style="padding: 30px; text-align: center; border-bottom: 1px solid #334155;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0;">TAGWEARLY AI</h1>
                <p style="color: #6366f1; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin: 5px 0 0 0;">TECH PACK GENERATION CHARGED</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 30px; color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                <h2 style="color: #ffffff; font-size: 18px; margin-top: 0;">Hello {{ $user->name }},</h2>
                <p>Your wallet has been charged for generating a new AI Fashion Tech Pack document.</p>

                <table width="100%" border="0" cellspacing="0" cellpadding="10" style="background-color: #0f172a; border-radius: 6px; margin: 20px 0;">
                    <tr>
                        <td style="color: #94a3b8; font-size: 12px;">Service:</td>
                        <td style="color: #ffffff; font-weight: 700; text-align: right;">{{ $transaction->service_name }}</td>
                    </tr>
                    <tr>
                        <td style="color: #94a3b8; font-size: 12px;">Amount Deducted:</td>
                        <td style="color: #ef4444; font-weight: 800; font-size: 16px; text-align: right;">-€{{ number_format($transaction->amount, 2) }}</td>
                    </tr>
                    <tr>
                        <td style="color: #94a3b8; font-size: 12px;">Remaining Balance:</td>
                        <td style="color: #ffffff; font-weight: 800; font-size: 16px; text-align: right;">€{{ number_format($user->wallet_balance, 2) }}</td>
                    </tr>
                </table>

                <p>Your complete Tech Pack (Bill of Materials, Measurements Chart, Construction Specs, Pantone Colors) is ready for download in your dashboard.</p>

                <div style="text-align: center; margin-top: 30px;">
                    <a href="{{ url('/') }}" style="background-color: #6366f1; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: 700; display: inline-block;">View Tech Packs Dashboard</a>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #334155;">
                DRAYBOND LIMITED • Academy House, 11 Dunraven Place, Bridgend, UK
            </td>
        </tr>
    </table>
</body>
</html>
