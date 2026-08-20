<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Support Ticket Logged</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #020617; color: #f8fafc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; }
        .header { padding: 25px 30px; border-bottom: 1px solid #1e293b; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); }
        .brand { font-size: 22px; font-weight: 900; color: #ffffff; }
        .subtitle { font-size: 11px; font-weight: 700; color: #e0e7ff; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }
        .content { padding: 35px; line-height: 1.6; font-size: 14px; color: #cbd5e1; }
        .ticket-box { background-color: #020617; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; margin: 20px 0; font-size: 13px; }
        .field { margin-bottom: 10px; }
        .field strong { color: #818cf8; }
        .footer { padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; background-color: #020617; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="brand">TAGWEARLY AI</div>
            <div class="subtitle">Support Desk & Trade Desk SLA Ticket</div>
        </div>
        <div class="content">
            <p>A new support request has been submitted through the Tagwearly AI portal.</p>

            <div class="ticket-box">
                <div class="field"><strong>Client Name:</strong> {{ $contactData['name'] }}</div>
                <div class="field"><strong>Client Email:</strong> {{ $contactData['email'] }}</div>
                <div class="field"><strong>Subject:</strong> {{ $contactData['subject'] }}</div>
                <div class="field" style="margin-top: 15px; border-top: 1px solid #1e293b; padding-top: 10px;">
                    <strong>Message:</strong><br>
                    <p style="color: #ffffff; white-space: pre-wrap;">{{ $contactData['message'] }}</p>
                </div>
            </div>

            <p style="font-size: 12px; color: #94a3b8;">
                SLA Guarantee: Trade department response target is within 24–48 business hours.
            </p>
        </div>
        <div class="footer">
            INCHWARD LIMITED • Registered in England & Wales Co. No. 16021412<br>
            Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, United Kingdom
        </div>
    </div>
</body>
</html>
