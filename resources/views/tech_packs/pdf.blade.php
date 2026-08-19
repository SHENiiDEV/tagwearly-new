<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tech Pack - {{ $techPack->title }} ({{ $data['style_code'] ?? 'TW-001' }})</title>
    <style>
        @page {
            margin: 25px;
            size: A4 portrait;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #0f172a;
            font-size: 11px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
        }
        .page-break {
            page-break-after: always;
        }
        .header-table {
            width: 100%;
            border-collapse: collapse;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .header-table td {
            vertical-align: middle;
        }
        .brand-title {
            font-size: 20px;
            font-weight: 900;
            letter-spacing: -0.5px;
            color: #0f172a;
        }
        .doc-type {
            font-size: 10px;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 700;
        }
        .meta-card {
            background-color: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            padding: 10px 14px;
            margin-bottom: 20px;
        }
        .meta-grid {
            width: 100%;
            border-collapse: collapse;
        }
        .meta-grid td {
            padding: 4px 8px;
        }
        .meta-label {
            font-size: 9px;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 700;
        }
        .meta-value {
            font-size: 12px;
            font-weight: 700;
            color: #0f172a;
        }
        .section-header {
            background-color: #0f172a;
            color: #ffffff;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 6px 10px;
            margin-top: 15px;
            margin-bottom: 10px;
            border-radius: 3px;
        }
        .tech-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        .tech-table th {
            background-color: #e2e8f0;
            color: #334155;
            text-align: left;
            padding: 7px 9px;
            font-size: 10px;
            text-transform: uppercase;
            font-weight: 700;
            border: 1px solid #cbd5e1;
        }
        .tech-table td {
            padding: 7px 9px;
            border: 1px solid #e2e8f0;
            font-size: 10px;
        }
        .swatch-box {
            display: inline-block;
            width: 24px;
            height: 16px;
            border-radius: 3px;
            border: 1px solid #94a3b8;
            vertical-align: middle;
            margin-right: 6px;
        }
        .badge {
            display: inline-block;
            background: #e0e7ff;
            color: #3730a3;
            font-size: 9px;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 3px;
            text-transform: uppercase;
        }
        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            font-size: 9px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 5px;
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- PAGE 1: SPECIFICATION & BOM -->
    <table class="header-table">
        <tr>
            <td>
                <div class="brand-title">TAGWEARLY AI</div>
                <div class="doc-type">FACTORY PRODUCTION TECH PACK</div>
            </td>
            <td style="text-align: right;">
                <span class="badge">PRODUCTION READY • VERSION 1.0</span>
                <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-top: 4px;">STYLE: {{ $data['style_code'] ?? 'TW-001' }}</div>
            </td>
        </tr>
    </table>

    <div class="meta-card">
        <table class="meta-grid">
            <tr>
                <td style="width: 30%;">
                    <div class="meta-label">Style / Garment Name</div>
                    <div class="meta-value">{{ $data['garment_name'] ?? $techPack->title }}</div>
                </td>
                <td style="width: 25%;">
                    <div class="meta-label">Category</div>
                    <div class="meta-value">{{ $techPack->garment_type }}</div>
                </td>
                <td style="width: 20%;">
                    <div class="meta-label">Season</div>
                    <div class="meta-value">{{ $data['season'] ?? 'FW 2026' }}</div>
                </td>
                <td style="width: 25%;">
                    <div class="meta-label">Tier & Spec Level</div>
                    <div class="meta-value" style="text-transform: uppercase;">{{ $techPack->tier }} SPEC</div>
                </td>
            </tr>
        </table>
    </div>

    <div style="background-color: #f1f5f9; border-left: 4px solid #0f172a; padding: 10px; margin-bottom: 20px; font-size: 10px; color: #334155;">
        <strong>Design Brief & Instructions:</strong><br>
        {{ $techPack->brief_text }}
    </div>

    <div class="section-header">SECTION 1: BILL OF MATERIALS (BOM)</div>
    <table class="tech-table">
        <thead>
            <tr>
                <th style="width: 15%;">Category</th>
                <th style="width: 25%;">Item Name & Ref</th>
                <th style="width: 25%;">Composition & Weight</th>
                <th style="width: 35%;">Placement & Engineering Details</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data['bill_of_materials'] ?? [] as $item)
            <tr>
                <td><strong>{{ $item['category'] ?? 'N/A' }}</strong></td>
                <td>
                    <strong style="color: #0f172a;">{{ $item['item_name'] ?? '' }}</strong><br>
                    <span style="font-size: 9px; color: #64748b;">Ref: {{ $item['supplier_ref'] ?? 'N/A' }}</span>
                </td>
                <td>
                    {{ $item['composition'] ?? '' }}<br>
                    <strong>{{ $item['weight'] ?? '' }}</strong>
                </td>
                <td>{{ $item['details'] ?? '' }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="section-header">SECTION 2: PANTONE & COLOR PALETTE SPECIFICATION</div>
    <table class="tech-table">
        <thead>
            <tr>
                <th style="width: 25%;">Garment Section</th>
                <th style="width: 25%;">Color Name</th>
                <th style="width: 20%;">HEX Code</th>
                <th style="width: 30%;">Pantone Standard (TCX / TPG)</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data['pantone_colors'] ?? [] as $color)
            <tr>
                <td><strong>{{ $color['section'] ?? '' }}</strong></td>
                <td>
                    <span class="swatch-box" style="background-color: {{ $color['hex_code'] ?? '#000' }};"></span>
                    <strong>{{ $color['color_name'] ?? '' }}</strong>
                </td>
                <td><code>{{ $color['hex_code'] ?? '' }}</code></td>
                <td><strong style="color: #0369a1;">{{ $color['pantone_code'] ?? '' }}</strong></td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="page-break"></div>

    <!-- PAGE 2: SIZE GRADATION MATRIX & CONSTRUCTION -->
    <table class="header-table">
        <tr>
            <td>
                <div class="brand-title">TAGWEARLY AI</div>
                <div class="doc-type">MEASUREMENTS MATRIX & SEAM CONSTRUCTION</div>
            </td>
            <td style="text-align: right;">
                <div style="font-size: 12px; font-weight: 700; color: #0f172a;">STYLE: {{ $data['style_code'] ?? 'TW-001' }}</div>
            </td>
        </tr>
    </table>

    <div class="section-header">SECTION 3: SIZE GRADING MATRIX (CM)</div>
    <table class="tech-table">
        <thead>
            <tr>
                <th style="width: 40%;">Point of Measurement (POM)</th>
                <th style="width: 12%; text-align: center;">Tol (±)</th>
                <th style="width: 12%; text-align: center;">S</th>
                <th style="width: 12%; text-align: center;">M</th>
                <th style="width: 12%; text-align: center;">L</th>
                <th style="width: 12%; text-align: center;">XL</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data['measurements_chart'] ?? [] as $pom)
            <tr>
                <td><strong>{{ $pom['point_of_measure'] ?? '' }}</strong></td>
                <td style="text-align: center; color: #64748b;">{{ $pom['tolerance'] ?? '±1.0' }}</td>
                <td style="text-align: center; font-weight: 700;">{{ $pom['S'] ?? '-' }} cm</td>
                <td style="text-align: center; font-weight: 700; background-color: #f1f5f9;">{{ $pom['M'] ?? '-' }} cm</td>
                <td style="text-align: center; font-weight: 700;">{{ $pom['L'] ?? '-' }} cm</td>
                <td style="text-align: center; font-weight: 700;">{{ $pom['XL'] ?? '-' }} cm</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="section-header">SECTION 4: SEAM CONSTRUCTION & STITCHING</div>
    <table class="tech-table">
        <thead>
            <tr>
                <th style="width: 20%;">Component</th>
                <th style="width: 20%;">Seam Type</th>
                <th style="width: 20%;">Stitch & ISO Standard</th>
                <th style="width: 10%; text-align: center;">SPI</th>
                <th style="width: 30%;">Manufacturing Instructions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data['construction_details'] ?? [] as $seam)
            <tr>
                <td><strong>{{ $seam['component'] ?? '' }}</strong></td>
                <td>{{ $seam['seam_type'] ?? '' }}</td>
                <td><code>{{ $seam['stitch_type'] ?? '' }}</code></td>
                <td style="text-align: center;"><strong>{{ $seam['spi'] ?? '' }}</strong></td>
                <td>{{ $seam['instructions'] ?? '' }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="section-header">SECTION 5: CARE, BRAND LABELS & PACKAGING</div>
    <div class="meta-card">
        <p><strong>Neck & Main Label:</strong> {{ $data['care_and_labels']['neck_label'] ?? 'Standard high-density woven label.' }}</p>
        <p><strong>Care & Wash Label:</strong> {{ $data['care_and_labels']['care_label'] ?? 'Standard satin care label.' }}</p>
        <p><strong>Factory Packaging:</strong> {{ $data['care_and_labels']['packaging'] ?? 'Polybag packaging.' }}</p>
    </div>

    <div class="footer">
        Generated by Tagwearly AI • DRAYBOND LIMITED (Company No. 16021806) • Tech Pack ID: #TP-{{ $techPack->id }}
    </div>

</body>
</html>
