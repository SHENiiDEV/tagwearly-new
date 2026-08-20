<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to Tagwearly AI</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #020617; color: #f8fafc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; }
        .header { padding: 30px; text-align: center; border-b: 1px solid #1e293b; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); }
        .brand { font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; }
        .subtitle { font-size: 11px; font-weight: 700; color: #e0e7ff; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
        .content { padding: 35px; line-height: 1.6; font-size: 14px; color: #cbd5e1; }
        .greeting { font-size: 18px; font-weight: 800; color: #ffffff; margin-bottom: 15px; }
        .feature-box { background-color: #020617; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; margin: 20px 0; }
        .feature-item { margin-bottom: 12px; font-size: 13px; color: #94a3b8; }
        .feature-item strong { color: #f8fafc; }
        .btn-container { text-align: center; margin: 30px 0; }
        .btn { display: inline-block; padding: 14px 28px; background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%); color: #ffffff; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 12px; box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3); }
        .footer { padding: 25px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; background-color: #020617; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="brand">TAGWEARLY AI</div>
            <div class="subtitle">AI Fashion Tech Pack Architect</div>
        </div>
        <div class="content">
            <div class="greeting">Dear {{ $user->name }},</div>
            <p>Welcome to <strong>Tagwearly AI</strong> — your institutional-grade digital B2B fashion engineering studio.</p>

            <div class="feature-box">
                <div style="font-weight: 800; color: #818cf8; margin-bottom: 10px; font-size: 12px; text-transform: uppercase;">Key Platform Capabilities:</div>
                <div class="feature-item">
                    • <strong>Bill of Materials (BOM):</strong> Complete component specs, fabric GSM, and hardware refs.
                </div>
                <div class="feature-item">
                    • <strong>Size Grading Matrix (S-XL cm):</strong> Precision garment measurement chart for China & Turkey factories.
                </div>
                <div class="feature-item">
                    • <strong>Pantone TCX / TPG Colors:</strong> Hex & Pantone color swatch matching.
                </div>
                <div class="feature-item">
                    • <strong>ISO Seam & Stitch Engineering:</strong> Flatlock, overlock, and SPI density specs.
                </div>
            </div>

            <p>Your B2B account is active and ready for your first collection creation.</p>

            <div class="btn-container">
                <a href="{{ url('/tech-packs/create') }}" class="btn">Create Your First Tech Pack Brief →</a>
            </div>
        </div>
        <div class="footer">
            <strong>INCHWARD LIMITED</strong> • Registered in England & Wales Co. No. 16021412<br>
            Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, United Kingdom<br>
            Official B2B Merchant of Record
        </div>
    </div>
</body>
</html>
