import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import FloatingCurrencyDropdown from '@/Components/FloatingCurrencyDropdown';
import CookieConsent from '@/Components/CookieConsent';
import OfflineBanner from '@/Components/OfflineBanner';
import { useCurrency } from '@/Components/CurrencyContext';
import {
    Sparkles, ArrowRight, CheckCircle2, ShieldCheck, FileText, Layers,
    Palette, Download, Shirt, Zap, Globe, Cpu, ChevronRight, XCircle,
    TrendingUp, Clock, DollarSign, RefreshCw, Award, Star, Menu, X
} from 'lucide-react';

export default function Landing({ auth }) {
    const user = auth?.user;
    const { formatPrice } = useCurrency();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Interactive Simulator State
    const [simGarment, setSimGarment] = useState('Heavyweight Zip Hoodie');
    const [simFabric, setSimFabric] = useState('450 GSM French Terry');
    const [simColor, setSimColor] = useState('Washed Slate Grey');
    const [isSimulating, setIsSimulating] = useState(false);
    const [simResult, setSimResult] = useState(null);

    // Preset simulators
    const presets = [
        {
            title: 'Heavyweight Zip Hoodie',
            fabric: '450 GSM French Terry (100% Cotton)',
            color: 'Washed Slate Grey (#475569)',
            styleCode: 'TW-HD-8402',
            bom: [
                { category: 'Main Fabric', item: 'Loopback French Terry', comp: '100% Combed Cotton, 450 GSM', ref: 'FT-450-COT' },
                { category: 'Ribbing', item: '2x2 Heavy Cotton Rib', comp: '95% Cotton / 5% Elastane', ref: 'RIB-2X2-955' },
                { category: 'Hardware', item: 'YKK #8 Metal Zipper', comp: 'Antique Nickel Teeth', ref: 'YKK-8-AN' },
            ],
            measurements: [
                { pom: 'Body Length (HPS to Hem)', S: 68, M: 71, L: 74, XL: 77 },
                { pom: 'Chest Width (1cm below Armhole)', S: 62, M: 65, L: 68, XL: 71 },
                { pom: 'Drop Shoulder Drop Width', S: 60, M: 63, L: 66, XL: 69 },
                { pom: 'Sleeve Length', S: 57, M: 59, L: 61, XL: 63 },
            ],
            pantone: 'Pantone 19-3908 TCX (Volcano)',
            hex: '#475569',
        },
        {
            title: 'Technical Utility Cargo Pants',
            fabric: '220 GSM Water-Resistant Nylon Ripstop',
            color: 'Tactical Stealth Black (#0f172a)',
            styleCode: 'TW-CG-9910',
            bom: [
                { category: 'Main Shell', item: 'Nylon Ripstop DWR', comp: '100% Recycled Nylon, 220 GSM', ref: 'NYL-220-DWR' },
                { category: 'Hardware', item: 'Fidlock Magnetic Buckle', comp: '25mm Composite Quick-Release', ref: 'FID-MAG-25' },
                { category: 'Trim', item: '3M Reflective Cord', comp: '4mm Polyester Reflective', ref: '3M-CORD-4' },
            ],
            measurements: [
                { pom: 'Waist Width (Relaxed)', S: 38, M: 40.5, L: 43, XL: 45.5 },
                { pom: 'Inseam Length', S: 74, M: 76, L: 78, XL: 80 },
                { pom: 'Hip Width', S: 52, M: 55, L: 58, XL: 61 },
                { pom: 'Thigh Width', S: 32, M: 34, L: 36, XL: 38 },
            ],
            pantone: 'Pantone 19-4005 TCX (Stretch Limo)',
            hex: '#0f172a',
        },
        {
            title: 'Acid Wash Vintage Oversized Tee',
            fabric: '280 GSM Ring-Spun Cotton Jersey',
            color: 'Vintage Acid Washed Black (#1e293b)',
            styleCode: 'TW-TEE-4011',
            bom: [
                { category: 'Main Fabric', item: 'Single Jersey', comp: '100% Combed Ring-Spun, 280 GSM', ref: 'SJ-280-COT' },
                { category: 'Neck Ribbing', item: '1x1 Heavy Rib', comp: '100% Cotton, 320 GSM', ref: 'RIB-1X1' },
                { category: 'Wash Finish', item: 'Mineral Acid Wash', comp: 'Garment dyed & stone washed', ref: 'WASH-ACID' },
            ],
            measurements: [
                { pom: 'Total Length (HPS)', S: 72, M: 75, L: 78, XL: 81 },
                { pom: 'Chest Width', S: 58, M: 61, L: 64, XL: 67 },
                { pom: 'Shoulder Drop Width', S: 56, M: 59, L: 62, XL: 65 },
                { pom: 'Sleeve Length', S: 22, M: 23, L: 24, XL: 25 },
            ],
            pantone: 'Pantone 19-4007 TCX (Anthracite)',
            hex: '#1e293b',
        },
    ];

    const runSimulator = (preset) => {
        setIsSimulating(true);
        setSimGarment(preset.title);
        setSimFabric(preset.fabric);
        setSimColor(preset.color);

        setTimeout(() => {
            setSimResult(preset);
            setIsSimulating(false);
        }, 1200);
    };

    // ROI Calculator State
    const [garmentCount, setGarmentCount] = useState(5);
    const hoursSaved = garmentCount * 28; // 28 hours per manual CAD tech pack
    const moneySaved = garmentCount * 1250; // average wasted sample rounds saved in EUR

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
            <OfflineBanner />

            {/* Ambient Background Light Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute top-[1200px] left-[-200px] w-[600px] h-[600px] bg-indigo-600/15 blur-[160px] pointer-events-none rounded-full" />

            {/* Navigation Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* ALWAYS navigates to Home / */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-indigo-500/30 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                            <img src="/images/logo.jpg" alt="Tagwearly AI Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className="text-lg font-black tracking-tight text-white flex items-center">
                                TAGWEARLY <span className="ml-1 text-indigo-400 font-extrabold">AI</span>
                            </span>
                            <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                                Tech Pack Architect
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                        <a href="#simulator" className="hover:text-indigo-400 transition">Live Simulator</a>
                        <a href="#comparison" className="hover:text-white transition">Comparison</a>
                        <a href="#calculator" className="hover:text-white transition">ROI Calculator</a>
                        <a href="#pricing" className="hover:text-white transition">Pricing Tiers</a>
                        <a href="#faq" className="hover:text-white transition">FAQ</a>
                    </nav>

                    <div className="flex items-center space-x-3 sm:space-x-4">
                        {/* Currency Selector */}
                        <FloatingCurrencyDropdown />

                        {user ? (
                            <Link
                                href="/dashboard"
                                className="hidden sm:flex px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition items-center space-x-2 transform hover:-translate-y-0.5"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>Go to Dashboard</span>
                            </Link>
                        ) : (
                            <div className="hidden sm:flex items-center space-x-3">
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold text-xs shadow-xl shadow-indigo-500/25 transition flex items-center space-x-2 transform hover:-translate-y-0.5"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        )}

                        {/* Mobile Hamburger Toggle Button */}
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2.5 md:hidden rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
                            aria-label="Toggle Menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Slide-Over Drawer from Right */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop Overlay */}
                    <div
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Sliding Panel from Right */}
                    <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-50 animate-in slide-in-from-right duration-300">
                        <div className="space-y-6">
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                <div className="flex items-center space-x-2">
                                    <img src="/images/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
                                    <span className="font-black text-white text-sm tracking-tight">TAGWEARLY AI</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Drawer Nav Anchors */}
                            <div className="space-y-2 text-xs font-bold text-slate-300">
                                <a
                                    href="#simulator"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 text-indigo-400 hover:text-white transition"
                                >
                                    Live Simulator
                                </a>
                                <a
                                    href="#comparison"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:text-white transition"
                                >
                                    Comparison
                                </a>
                                <a
                                    href="#calculator"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:text-white transition"
                                >
                                    ROI Calculator
                                </a>
                                <a
                                    href="#pricing"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:text-white transition"
                                >
                                    Pricing Tiers
                                </a>
                                <a
                                    href="#faq"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:text-white transition"
                                >
                                    FAQ
                                </a>
                            </div>
                        </div>

                        {/* Drawer Auth CTA Footer */}
                        <div className="pt-4 border-t border-slate-800 space-y-3">
                            {user ? (
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-center py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-xs shadow-lg"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-center py-3 px-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-center py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-xs shadow-lg"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-16 pb-20 md:pt-28 md:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 border border-indigo-500/40 text-indigo-400 text-xs font-black uppercase tracking-wider shadow-xl backdrop-blur-md animate-pulse">
                        <Sparkles className="w-4 h-4" />
                        <span>Ultra-Premium B2B Digital Tech Pack Engine</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight max-w-5xl mx-auto leading-none">
                        Stop Wasting 14 Days on CAD Tech Packs. <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                            Generate Factory PDFs in 10 Seconds.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Tagwearly AI converts raw text briefs into multi-page, factory-ready apparel Tech Packs. Complete with BOM, S-XL size grading matrix, seam specs, and Pantone colors for luxury apparel manufacturers in China & Turkey.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
                        <a
                            href="#simulator"
                            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-black text-sm shadow-2xl shadow-indigo-500/35 transition-all duration-300 flex items-center space-x-3 transform hover:-translate-y-1"
                        >
                            <Zap className="w-5 h-5 fill-white" />
                            <span>Try Instant Spec Simulator</span>
                        </a>
                        <Link
                            href={user ? '/dashboard' : '/register'}
                            className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition transform hover:-translate-y-0.5 shadow-lg"
                        >
                            Create B2B Account
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium">
                        <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-xl">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>Merchant: <strong>INCHWARD LIMITED</strong> (UK No. 16021412)</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-xl">
                            <Globe className="w-4 h-4 text-indigo-400" />
                            <span>0% VAT B2B Reverse Charge Invoices</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-xl">
                            <CheckCircle2 className="w-4 h-4 text-purple-400" />
                            <span>Factory Verified for China & Turkey Manufacturers</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOOK #1: INTERACTIVE INSTANT TECH PACK SIMULATOR */}
            <section id="simulator" className="py-20 bg-slate-900/40 border-y border-slate-800/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="text-center space-y-3 max-w-3xl mx-auto">
                        <span className="px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-wider">
                            Interactive Studio Sandbox
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Try the Live AI Spec Generator
                        </h2>
                        <p className="text-sm text-slate-400">
                            Select a sample garment style below and watch Tagwearly AI calculate factory engineering specifications in real-time.
                        </p>
                    </div>

                    {/* Interactive Brief Builder */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Simulator Controls */}
                        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
                            <div className="space-y-1">
                                <h3 className="text-base font-extrabold text-white">Choose Garment Preset</h3>
                                <p className="text-xs text-slate-400">Click any garment to simulate instant AI compilation</p>
                            </div>

                            <div className="space-y-3">
                                {presets.map((preset, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => runSimulator(preset)}
                                        className={`w-full p-4 text-left rounded-2xl border transition-all duration-200 ${
                                            simGarment === preset.title
                                                ? 'bg-indigo-500/10 border-indigo-500 text-white shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500'
                                                : 'bg-slate-950 border-slate-800/80 text-slate-300 hover:border-slate-700'
                                        }`}
                                    >
                                        <div className="text-sm font-bold text-white flex items-center justify-between">
                                            <span>{preset.title}</span>
                                            <ChevronRight className="w-4 h-4 text-indigo-400" />
                                        </div>
                                        <div className="text-[11px] text-slate-400 mt-1">{preset.fabric}</div>
                                    </button>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
                                <div className="font-bold text-white flex items-center space-x-1.5">
                                    <Cpu className="w-4 h-4 text-indigo-400" />
                                    <span>AI Engineering Output</span>
                                </div>
                                <p className="text-[11px] leading-relaxed">
                                    Generates complete ISO seam standards, SPI density, Pantone TCX swatch codes, and S-XL size grading matrix in centimeters.
                                </p>
                            </div>
                        </div>

                        {/* Live Output Preview Card */}
                        <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl relative overflow-hidden min-h-[420px]">
                            {isSimulating ? (
                                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center p-8 space-y-4 text-center z-20">
                                    <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                                        <Sparkles className="w-8 h-8 animate-spin" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Calculating Size Grading & BOM...</h4>
                                        <p className="text-xs text-slate-400 mt-1">Matching Pantone TCX colors and seam specs</p>
                                    </div>
                                </div>
                            ) : null}

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                                <div>
                                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-black uppercase">
                                        LIVE SIMULATED SPEC
                                    </span>
                                    <h3 className="text-xl font-black text-white mt-1">{simGarment}</h3>
                                    <p className="text-xs text-slate-400 font-mono">
                                        Style: {simResult?.styleCode || 'TW-HD-8402'} • Fabric: {simFabric}
                                    </p>
                                </div>
                                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl self-start">
                                    ✓ Factory Verified
                                </span>
                            </div>

                            {/* BOM Breakdown */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Bill of Materials (BOM)</h4>
                                <div className="space-y-2">
                                    {(simResult?.bom || presets[0].bom).map((b, i) => (
                                        <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                                            <div>
                                                <span className="text-[10px] font-bold text-indigo-400 uppercase block">{b.category}</span>
                                                <strong className="text-white">{b.item}</strong>
                                            </div>
                                            <span className="text-slate-400 font-mono text-[11px]">{b.comp}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Measurements */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Size Grading Matrix (cm)</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs border-collapse">
                                        <thead>
                                            <tr className="bg-slate-950 text-slate-400 uppercase text-[10px] border-b border-slate-800 font-bold">
                                                <th className="p-2">Point of Measure</th>
                                                <th className="p-2 text-center">S</th>
                                                <th className="p-2 text-center">M</th>
                                                <th className="p-2 text-center">L</th>
                                                <th className="p-2 text-center">XL</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800/50">
                                            {(simResult?.measurements || presets[0].measurements).map((m, i) => (
                                                <tr key={i}>
                                                    <td className="p-2 font-semibold text-slate-200">{m.pom}</td>
                                                    <td className="p-2 text-center text-slate-300">{m.S} cm</td>
                                                    <td className="p-2 text-center font-bold text-indigo-400 bg-indigo-500/5">{m.M} cm</td>
                                                    <td className="p-2 text-center text-slate-300">{m.L} cm</td>
                                                    <td className="p-2 text-center text-slate-300">{m.XL} cm</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* CTA inside Simulator */}
                            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                                <span className="text-xs text-slate-400">Ready to generate your custom brand collection?</span>
                                <Link
                                    href={user ? '/dashboard' : '/register'}
                                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition flex items-center space-x-1.5"
                                >
                                    <span>Create Custom Spec</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOOK #2: BEFORE VS AFTER COMPARISON */}
            <section id="comparison" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="text-center space-y-3 max-w-3xl mx-auto">
                        <span className="px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-black uppercase tracking-wider">
                            The Paradigm Shift
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Manual Tech Packs vs. Tagwearly AI
                        </h2>
                        <p className="text-sm text-slate-400">
                            Why modern streetwear & luxury apparel founders are replacing manual CAD freelancers with Tagwearly AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Old Way */}
                        <div className="p-8 rounded-3xl bg-slate-900/60 border border-rose-500/30 space-y-6">
                            <div className="flex items-center space-x-3 text-rose-400 border-b border-slate-800 pb-4">
                                <XCircle className="w-6 h-6 shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-white">The Old Manual Way</h3>
                                    <p className="text-xs text-slate-400">Freelancers & Manual Excel Specs</p>
                                </div>
                            </div>

                            <ul className="space-y-4 text-xs text-slate-300">
                                <li className="flex items-start space-x-3">
                                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                                    <span><strong>14-21 Days Delay</strong> waiting for freelance technical designers.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                                    <span><strong>€400 - €1,200 per item</strong> in freelancer CAD drafting fees.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                                    <span><strong>Wasted $5,000+ Sample Runs</strong> due to missing ISO seam specs and bad grading.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                                    <span><strong>Endless Email Iterations</strong> with Chinese / Turkish factories trying to fix errors.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Tagwearly AI Way */}
                        <div className="p-8 rounded-3xl bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 space-y-6">
                            <div className="flex items-center space-x-3 text-emerald-400 border-b border-slate-800 pb-4">
                                <CheckCircle2 className="w-6 h-6 shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-white">The Tagwearly AI Way</h3>
                                    <p className="text-xs text-indigo-400">Instant Factory-Grade PDF Engine</p>
                                </div>
                            </div>

                            <ul className="space-y-4 text-xs text-slate-200">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>10 Seconds Generation</strong> directly from your text brief.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Flat Fee per Spec</strong> with official B2B PDF invoice (0% VAT).</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>100% Factory Accuracy</strong> with complete BOM, Pantone TCX, and ISO seam specs.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Instant Download</strong> of multi-page production PDF ready for manufacturer handoff.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOOK #3: INTERACTIVE ROI CALCULATOR */}
            <section id="calculator" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="text-center space-y-3">
                        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
                            Brand Savings Calculator
                        </span>
                        <h2 className="text-3xl font-black text-white tracking-tight">
                            Calculate Your Time & Capital Saved
                        </h2>
                        <p className="text-sm text-slate-400">
                            Adjust the slider to see your brand's estimated time savings and sample risk reduction.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-8 shadow-2xl">
                        <div>
                            <div className="flex items-center justify-between text-sm font-bold text-white mb-3">
                                <span>Garments in Your Collection:</span>
                                <span className="text-indigo-400 text-xl font-black">{garmentCount} Garments</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={garmentCount}
                                onChange={(e) => setGarmentCount(parseInt(e.target.value, 10))}
                                className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                                <span>1 Item (Capsule Drop)</span>
                                <span>10 Items (Full Season)</span>
                                <span>20 Items (Large Brand)</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center space-x-4">
                                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase block">CAD Time Saved</span>
                                    <strong className="text-2xl font-black text-white">{hoursSaved} Hours</strong>
                                    <span className="text-[11px] text-slate-500 block">Instant 10-second compilation</span>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center space-x-4">
                                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase block">Sample Error Savings</span>
                                    <strong className="text-2xl font-black text-emerald-400">{formatPrice(moneySaved)}</strong>
                                    <span className="text-[11px] text-slate-500 block">Prevents ruined prototype rounds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High-Ticket Pricing Section */}
            <section id="pricing" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="text-center space-y-3 max-w-2xl mx-auto">
                        <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-wider">
                            High-Ticket Studio Pricing
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            B2B Tech Pack Tier Pricing
                        </h2>
                        <p className="text-sm text-slate-400">
                            Transparent pricing per Tech Pack generation. Direct debit from your account EUR wallet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Starter Tier (€249) */}
                        <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-6">
                            <div>
                                <span className="text-xs font-black uppercase tracking-wider text-slate-400">Starter Spec</span>
                                <div className="text-4xl font-black text-white mt-2">{formatPrice(249)}</div>
                                <p className="text-xs text-slate-400 mt-1">Single Basic Garment Spec</p>

                                <ul className="mt-6 space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                        <span>1 Basic Garment (Hoodie/Sweatpants/Tee)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                        <span>Standard Size Grading (S-XL cm)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                        <span>Basic BOM & Thread Specs</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                        <span>Factory PDF Export</span>
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href={user ? '/dashboard' : '/register'}
                                className="w-full py-3.5 px-4 text-center font-bold text-xs text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                            >
                                Get Starter ({formatPrice(249)})
                            </Link>
                        </div>

                        {/* Pro Tier (€699 - Recommended) */}
                        <div className="relative p-7 rounded-3xl bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 flex flex-col justify-between space-y-6">
                            <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                                Most Popular
                            </span>

                            <div>
                                <span className="text-xs font-black uppercase tracking-wider text-indigo-400">Pro Outerwear</span>
                                <div className="text-4xl font-black text-white mt-2">{formatPrice(699)}</div>
                                <p className="text-xs text-slate-400 mt-1">Complex Outerwear / Heavy Spec</p>

                                <ul className="mt-6 space-y-3 text-xs text-slate-200 border-t border-slate-800 pt-6">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>1 Complex Item (Jacket, Cargo, Denim)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Advanced Hardware & YKK Zippers</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Pantone TCX / TPG Color Swatches</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>ISO Seam & Stitch Engineering</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Multi-Page Production PDF Package</span>
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href={user ? '/dashboard' : '/register'}
                                className="w-full py-3.5 px-4 text-center font-black text-xs text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg transition transform hover:-translate-y-0.5"
                            >
                                Generate Pro Spec ({formatPrice(699)})
                            </Link>
                        </div>

                        {/* Collection Tier (€1,999) */}
                        <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-6">
                            <div>
                                <span className="text-xs font-black uppercase tracking-wider text-purple-400">Capsule Suite</span>
                                <div className="text-4xl font-black text-white mt-2">{formatPrice(1999)}</div>
                                <p className="text-xs text-slate-400 mt-1">Full Capsule Collection (5 Items)</p>

                                <ul className="mt-6 space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                                        <span>Complete Capsule Collection (5 Garments)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                                        <span>Unified Style & Color Palette Suite</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                                        <span>Custom Branding & Care Label Specs</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                                        <span>Full Production Documentation Suite</span>
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href={user ? '/dashboard' : '/register'}
                                className="w-full py-3.5 px-4 text-center font-bold text-xs text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                            >
                                Order Capsule ({formatPrice(1999)})
                            </Link>
                        </div>

                        {/* Enterprise Tier (€3,499) */}
                        <div className="p-7 rounded-3xl bg-slate-900 border border-purple-500/40 hover:border-purple-500/60 transition flex flex-col justify-between space-y-6">
                            <div>
                                <span className="text-xs font-black uppercase tracking-wider text-pink-400">Enterprise Studio</span>
                                <div className="text-4xl font-black text-white mt-2">{formatPrice(3499)}</div>
                                <p className="text-xs text-slate-400 mt-1">Full Season Launch (10 Items)</p>

                                <ul className="mt-6 space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                                        <span>Full Season Launch (10 Garment Specs)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                                        <span>Custom Factory CAD Hand-off Support</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                                        <span>Priority Processing & Dedicated Audit</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                                        <span>Full Production Package</span>
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href={user ? '/dashboard' : '/register'}
                                className="w-full py-3.5 px-4 text-center font-bold text-xs text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition"
                            >
                                Order Enterprise ({formatPrice(3499)})
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-slate-900/40 border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xs text-slate-400">Everything you need to know about factory PDF generation</p>
                    </div>

                    <div className="space-y-4 text-xs">
                        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                            <h3 className="text-sm font-bold text-white">Can I send the generated PDF directly to factories in China or Turkey?</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Yes. Tagwearly AI formats all measurements (cm), seam types (ISO 607 / 401), SPI density, and Pantone TCX/TPG color swatches according to international apparel manufacturing standards used by OEMs in Asia and Europe.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                            <h3 className="text-sm font-bold text-white">How does B2B invoicing work?</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Every top-up transaction generates an official B2B PDF invoice issued by <strong>INCHWARD LIMITED</strong> (Company No. 16021412, UK) under 0% VAT Reverse Charge rules. The invoice is automatically sent to your email and downloadable in your wallet dashboard.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                            <h3 className="text-sm font-bold text-white">Are pre-production physical samples still required?</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Yes. While Tagwearly AI provides precise engineering specs, our Terms of Service mandate that brand owners produce and fit-test a physical prototype sample before initiating bulk manufacturing runs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-900 bg-slate-950 py-12 text-xs text-slate-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="font-extrabold text-white text-sm">TAGWEARLY AI</div>
                        <p className="text-slate-400 mt-1">INCHWARD LIMITED • Registered in England & Wales No. 16021412</p>
                        <p className="text-[11px] text-slate-500">Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, UK</p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
                        <Link href="/refund" className="hover:text-slate-300 transition">Refund Policy</Link>
                    </div>
                </div>
            </footer>

            <CookieConsent />
        </div>
    );
}
