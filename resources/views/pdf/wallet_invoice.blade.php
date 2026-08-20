<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Invoice {{ $transaction->reference_code ?? 'INV-' . $transaction->id }}</title>
    <style>
        @page {
            margin: 40px 45px;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #1e293b;
            font-size: 12px;
            line-height: 1.5;
            background-color: #ffffff;
        }
        .header-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .brand-title {
            font-size: 22px;
            font-weight: 900;
            color: #0f172a;
            letter-spacing: -0.5px;
        }
        .brand-subtitle {
            font-size: 9px;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .invoice-badge {
            display: inline-block;
            background-color: #f1f5f9;
            border: 1px solid #cbd5e1;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 800;
            color: #334155;
            text-transform: uppercase;
        }
        .paid-stamp {
            display: inline-block;
            background-color: #dcfce7;
            border: 1px solid #86efac;
            color: #15803d;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            margin-left: 6px;
        }
        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .details-table td {
            vertical-align: top;
            width: 50%;
        }
        .section-title {
            font-size: 10px;
            font-weight: 800;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 6px;
        }
        .company-name {
            font-size: 14px;
            font-weight: 800;
            color: #0f172a;
        }
        .text-muted {
            color: #64748b;
            font-size: 11px;
        }
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
        }
        .items-table th {
            background-color: #0f172a;
            color: #ffffff;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            padding: 10px 12px;
            text-align: left;
        }
        .items-table td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 11px;
        }
        .summary-table {
            width: 40%;
            float: right;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .summary-table td {
            padding: 6px 12px;
            font-size: 11px;
        }
        .summary-table .total-row td {
            font-size: 14px;
            font-weight: 900;
            color: #0f172a;
            border-top: 2px solid #0f172a;
            padding-top: 10px;
        }
        .clear {
            clear: both;
        }
        .legal-notice {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 14px 16px;
            font-size: 10px;
            color: #64748b;
            line-height: 1.5;
            margin-top: 40px;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 10px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 15px;
        }
    </style>
</head>
<body>

    <!-- Header Table -->
    <table class="header-table">
        <tr>
            <td style="width: 50%;">
                <div class="brand-title">TAGWEARLY <span style="color: #6366f1;">AI</span></div>
                <div class="brand-subtitle">AI Fashion Tech Pack Architect</div>
            </td>
            <td style="width: 50%; text-align: right;">
                <span class="invoice-badge">OFFICIAL RECEIPT / INVOICE</span>
                <span class="paid-stamp">PAID & VERIFIED</span>
            </td>
        </tr>
    </table>

    <!-- Merchant & Customer Details -->
    <table class="details-table">
        <tr>
            <td>
                <div class="section-title">Merchant of Record (Issuer)</div>
                <div class="company-name">INCHWARD LIMITED</div>
                <div class="text-muted">Registered in England & Wales • Co. No. 16021412</div>
                <div class="text-muted">Academy House, 11 Dunraven Place</div>
                <div class="text-muted">Bridgend, Mid Glamorgan, CF31 1JF, United Kingdom</div>
                <div class="text-muted">Email: {{ $company['email'] ?? 'info@tagwearly.co.uk' }}</div>
            </td>
            <td style="text-align: right;">
                <div class="section-title">Billed To (Customer)</div>
                <div class="company-name">{{ $user->name }} {{ $user->surname }}</div>
                <div class="text-muted">{{ $user->email }}</div>
                <div class="text-muted">{{ $user->address_street ?? 'Commercial Account' }}</div>
                <div class="text-muted">{{ $user->address_city ?? '' }} {{ $user->address_postcode ?? '' }} {{ $user->address_country ?? '' }}</div>
                <br>
                <div class="text-muted"><strong>Invoice Ref:</strong> {{ $transaction->reference_code ?? 'INV-' . $transaction->id }}</div>
                <div class="text-muted"><strong>Date Issued:</strong> {{ $transaction->created_at ? $transaction->created_at->format('d M Y, H:i T') : date('d M Y') }}</div>
                <div class="text-muted"><strong>Payment Method:</strong> EUR Corporate Wallet Debit</div>
            </td>
        </tr>
    </table>

    <!-- Line Items Table -->
    <table class="items-table">
        <thead>
            <tr>
                <th style="width: 50%;">Description / Service Name</th>
                <th style="width: 15%; text-align: center;">Qty</th>
                <th style="width: 17.5%; text-align: right;">Unit Price</th>
                <th style="width: 17.5%; text-align: right;">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong style="color: #0f172a;">{{ $transaction->service_name ?? 'B2B Wallet Credit' }}</strong>
                    <div style="font-size: 10px; color: #64748b; margin-top: 2px;">
                        Digital B2B Service Access for Tagwearly AI Tech Pack Generation Platform
                    </div>
                </td>
                <td style="text-align: center;">1</td>
                <td style="text-align: right;">€{{ number_format($transaction->amount, 2) }}</td>
                <td style="text-align: right;"><strong>€{{ number_format($transaction->amount, 2) }} EUR</strong></td>
            </tr>
        </tbody>
    </table>

    <!-- Financial Summary Table -->
    <table class="summary-table">
        <tr>
            <td style="text-align: right; color: #64748b;">Subtotal:</td>
            <td style="text-align: right; font-weight: 700;">€{{ number_format($transaction->amount, 2) }}</td>
        </tr>
        <tr>
            <td style="text-align: right; color: #64748b;">VAT / Tax (0% UK B2B Reverse Charge):</td>
            <td style="text-align: right; font-weight: 700;">€0.00</td>
        </tr>
        <tr class="total-row">
            <td style="text-align: right;">Total Paid:</td>
            <td style="text-align: right; color: #16a34a;">€{{ number_format($transaction->amount, 2) }} EUR</td>
        </tr>
    </table>
    <div class="clear"></div>

    <!-- Legal Notice & Disclaimer -->
    <div class="legal-notice">
        <strong>Legal & Tax Notice:</strong> Supply of digital B2B services subject to 0% VAT Reverse Charge under UK VAT legislation. All wallet top-up deposits are eligible for a 100% refund within 14 days of transaction provided the funds remain unspent in your account balance. Deductions for completed document generations are non-refundable. Governed under the laws of England & Wales.
    </div>

    <!-- Footer -->
    <div class="footer">
        INCHWARD LIMITED • Academy House, 11 Dunraven Place, Bridgend, CF31 1JF, UK • Registered Company No. 16021412
    </div>

</body>
</html>
