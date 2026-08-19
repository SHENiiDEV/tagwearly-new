# Tagwearly AI — AI Fashion Tech Pack Architect

> Instant B2B Apparel Production Tech Packs for Fashion Brands & Designers.

Tagwearly AI converts raw text briefs into multi-page, factory-ready apparel Tech Packs in seconds. Complete with Bill of Materials (BOM), S-XL size grading matrix in centimeters, ISO seam engineering specs, and Pantone TCX/TPG color swatches. Optimized for apparel manufacturers in China & Turkey.

---

## 🚀 Key Features

- **AI Fashion Tech Pack Engine**: Generates factory-grade production specifications directly from text descriptions.
- **B2B Billing Infrastructure**: EUR wallet balance, top-ups, and automated B2B PDF invoice generation issued by **DRAYBOND LIMITED** (UK, Company No. 16021806) under 0% VAT Reverse Charge rules.
- **Multi-Page Production PDF Export**: Includes BOM, size matrix, construction & seam details, Pantone swatches, and care label specs.
- **Interactive Sandbox & ROI Calculator**: Instant spec simulator on landing page and time/cost savings calculation.
- **B2B Legal Suite**: Includes Terms of Service (`/terms`), Privacy Policy (`/privacy`), and Refund Policy (`/refund`).

---

## 🛠 Tech Stack

- **Backend**: Laravel 13 (PHP 8.4)
- **Frontend**: React.js + Inertia.js + Tailwind CSS
- **Database**: SQLite
- **PDF Engine**: DomPDF (Multi-Page Vector Layout)
- **AI Engine**: Tagwearly AI Fashion Prompt Engineering Engine
- **Mail**: Laravel Mail (Namecheap Private Email SMTP)

---

## 💻 Local Setup & Development

1. **Clone repository**:
   ```bash
   git clone https://github.com/SHENiiDEV/tagwearly-new.git
   cd tagwearly-new
   ```

2. **Install PHP & JS dependencies**:
   ```bash
   composer install
   npm install
   ```

3. **Configure Environment**:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Run Migrations & Seeders**:
   ```bash
   touch database/database.sqlite
   php artisan migrate
   ```

5. **Build Frontend Assets**:
   ```bash
   npm run build
   ```

6. **Start Local Server**:
   ```bash
   php -d opcache.enable_cli=0 artisan serve --port=5555
   ```

---

## 📜 Legal & Merchant Entity

- **Operating Company**: DRAYBOND LIMITED
- **Company Number**: 16021806 (England & Wales)
- **Registered Address**: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK, CF31 1JF
- **Contact Email**: info@tagwearly.co.uk
