<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Invoice {{ $transaction->reference_code }}</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #1e293b;
            font-size: 13px;
            line-height: 1.5;
            margin: 0;
            padding: 30px;
        }
        .header-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .header-table td {
            vertical-align: top;
        }
        .logo-title {
            font-size: 24px;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #0f172a;
        }
        .logo-subtitle {
            font-size: 11px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .watermark {
            display: inline-block;
            background-color: #059669;
            color: #ffffff;
            font-weight: 800;
            font-size: 11px;
            padding: 4px 10px;
            border-radius: 4px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-top: 8px;
        }
        .company-box, .client-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 16px;
            margin-bottom: 25px;
        }
        .section-title {
            font-weight: 700;
            font-size: 11px;
            text-transform: uppercase;
            color: #475569;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        .invoice-details {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .invoice-details th {
            background-color: #0f172a;
            color: #ffffff;
            text-align: left;
            padding: 10px 14px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .invoice-details td {
            padding: 12px 14px;
            border-bottom: 1px solid #e2e8f0;
        }
        .totals-table {
            width: 50%;
            float: right;
            border-collapse: collapse;
            margin-top: 10px;
        }
        .totals-table td {
            padding: 8px 12px;
        }
        .total-row {
            font-weight: 800;
            font-size: 16px;
            color: #0f172a;
            border-top: 2px solid #0f172a;
        }
        .footer {
            margin-top: 80px;
            border-top: 1px solid #e2e8f0;
            padding-top: 15px;
            font-size: 10px;
            color: #94a3b8;
            text-align: center;
        }
    </style>
</head>
<body>
    <table class="header-table">
        <tr>
            <td>
                <div class="logo-title">TAGWEARLY AI</div>
                <div class="logo-subtitle">AI Fashion Tech Pack Architect</div>
                <div class="watermark">PAID & VERIFIED</div>
            </td>
            <td style="text-align: right;">
                <div style="font-size: 20px; font-weight: 700; color: #0f172a;">B2B INVOICE</div>
                <div style="color: #64748b; font-weight: 600;">Ref: {{ $transaction->reference_code }}</div>
                <div style="color: #64748b;">Date: {{ $transaction->created_at->format('Y-m-d H:i') }} UTC</div>
            </td>
        </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tr>
            <td style="width: 48%; vertical-align: top;">
                <div class="company-box">
                    <div class="section-title">ISSUED BY (SERVICE PROVIDER)</div>
                    <strong style="color: #0f172a; font-size: 14px;">{{ $company['name'] }}</strong><br>
                    Company Number: <strong>{{ $company['company_number'] }}</strong><br>
                    {{ $company['address'] }}<br>
                    {{ $company['city_postcode'] }}<br>
                    {{ $company['country'] }}<br>
                    Email: {{ $company['email'] }}
                </div>
            </td>
            <td style="width: 4%;"></td>
            <td style="width: 48%; vertical-align: top;">
                <div class="client-box">
                    <div class="section-title">BILLED TO (CUSTOMER)</div>
                    <strong style="color: #0f172a; font-size: 14px;">{{ $user->name }}</strong><br>
                    Email: {{ $user->email }}<br>
                    Account ID: #{{ str_pad($user->id, 6, '0', STR_PAD_LEFT) }}<br>
                    Status: Verified B2B Member
                </div>
            </td>
        </tr>
    </table>

    <table class="invoice-details">
        <thead>
            <tr>
                <th>Description / Service</th>
                <th style="text-align: center;">Qty</th>
                <th style="text-align: right;">Unit Price</th>
                <th style="text-align: right;">Total (EUR)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong style="color: #0f172a;">{{ $transaction->service_name }}</strong><br>
                    <span style="font-size: 11px; color: #64748b;">Digital SaaS Balance Credit & AI Tech Pack Generation Services</span>
                </td>
                <td style="text-align: center;">1</td>
                <td style="text-align: right;">€{{ number_format($transaction->amount, 2) }}</td>
                <td style="text-align: right; font-weight: 700;">€{{ number_format($transaction->amount, 2) }}</td>
            </tr>
        </tbody>
    </table>

    <table class="totals-table">
        <tr>
            <td>Subtotal:</td>
            <td style="text-align: right; font-weight: 600;">€{{ number_format($transaction->amount, 2) }}</td>
        </tr>
        <tr>
            <td>VAT Rate:</td>
            <td style="text-align: right; font-weight: 600;">0% (Reverse Charge)</td>
        </tr>
        <tr class="total-row">
            <td>Total Paid:</td>
            <td style="text-align: right;">€{{ number_format($transaction->amount, 2) }}</td>
        </tr>
    </table>

    <div style="clear: both;"></div>

    <div style="margin-top: 30px; padding: 12px; background: #f1f5f9; border-radius: 6px; font-size: 11px; color: #475569;">
        <strong>B2B Reverse Charge Notice:</strong> Supply of digital services subject to 0% VAT under B2B Reverse Charge rules (UK / International Export). Payment collected and confirmed into account wallet balance.
    </div>

    <div class="footer">
        DRAYBOND LIMITED • Registered in England & Wales No. 16021806 • Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, UK
    </div>
</body>
</html>
