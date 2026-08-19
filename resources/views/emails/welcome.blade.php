<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to Tagwearly AI</title>
</head>
<body style="background-color: #0f172a; color: #f8fafc; font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 8px; border: 1px solid #334155;">
        <tr>
            <td style="padding: 30px; text-align: center; border-bottom: 1px solid #334155;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">TAGWEARLY AI</h1>
                <p style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin: 5px 0 0 0;">AI Fashion Tech Pack Architect</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 30px; color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                <h2 style="color: #ffffff; font-size: 18px; margin-top: 0;">Welcome, {{ $user->name }}!</h2>
                <p>Thank you for registering with <strong>Tagwearly AI</strong> — the premier digital tech pack engineering tool for modern apparel brands and fashion founders.</p>
                <p>With Tagwearly AI, you can generate production-grade Tech Packs (BOM, S-XL size grading matrix, seam construction specs, and Pantone colors) in seconds and export multi-page PDFs ready for factories in China or Turkey.</p>
                
                <div style="background-color: #0f172a; border-left: 4px solid #6366f1; padding: 15px; border-radius: 4px; margin: 20px 0;">
                    <strong style="color: #ffffff;">Current Wallet Balance: €{{ number_format($user->wallet_balance, 2) }}</strong><br>
                    <span style="font-size: 12px; color: #94a3b8;">Top up your wallet to start generating Tech Packs instantly.</span>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                    <a href="{{ url('/wallet') }}" style="background-color: #6366f1; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: 700; display: inline-block;">Go to Wallet & Billing</a>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #334155;">
                DRAYBOND LIMITED (Company No. 16021806) • Academy House, 11 Dunraven Place, Bridgend, UK
            </td>
        </tr>
    </table>
</body>
</html>
