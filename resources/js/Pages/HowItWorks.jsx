import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { useCurrency } from '@/Components/CurrencyContext';
import {
    Wallet, Cpu, Calculator, FileCheck, ArrowRight, ShieldCheck,
    CheckCircle2, Sparkles, Zap, Layers, Globe, Building2, Download
} from 'lucide-react';

export default function HowItWorks() {
    const { formatPrice } = useCurrency();

    const steps = [
        {
            number: '01',
            title: 'Instant Provisioning & Digital Wallet',
            subtitle: 'Institutional B2B Account Setup',
            icon: Wallet,
            color: 'indigo',
            badge: 'No Mandatory Subscriptions',
            description: 'Instant account registration with zero monthly lock-in contracts. Load your corporate balance in EUR, USD, or GBP with 100% flexibility.',
            features: [
                'Multi-Currency Balance Engine (EUR € / USD $ / GBP £)',
                '14-Day 100% Unused Funds Money-Back Guarantee',
                'Automated UK B2B PDF Tax Invoices (0% VAT Reverse Charge)',
            ],
        },
        {
            number: '02',
            title: 'Neural Factory Discovery & Intelligence',
            subtitle: 'Tier-1 OEM/ODM Network Scanning',
            icon: Cpu,
            color: 'purple',
            badge: 'Scan < 60 Seconds',
            description: 'Our proprietary neural engine autonomously scans over 1,200+ verified garment manufacturers across Asia and Europe.',
            features: [
                'Vetted Apparel Factories in Shenzhen, Ningbo, Dongguan & Vietnam',
                'BOM Component & GSM Fabric Weight Analysis',
                'Pantone TCX / TPG Swatch Matching & ISO Seam Density Specs',
            ],
        },
        {
            number: '03',
            title: 'Reverse Landed Cost & Customs Tariffs',
            subtitle: 'Turnkey Financial Architecture',
            icon: Calculator,
            color: 'emerald',
            badge: 'HS Code Classification',
            description: 'Eliminate surprise import costs. Automatically classify garment HS Codes and calculate ocean container freight, duties, and landed unit costs.',
            features: [
                'Automatic HS Code Classification (Chapter 61 & 62 Apparel)',
                'UK & EU Customs Tariff & Freight Rate Simulation',
                'Turnkey Cost Per Unit Calculation before sample approval',
            ],
        },
        {
            number: '04',
            title: 'Turnkey Dossiers & B2B Invoices',
            subtitle: 'Factory Production Package Export',
            icon: FileCheck,
            color: 'pink',
            badge: 'PAID & VERIFIED Stamp',
            description: 'Receive multi-page production-ready PDF Tech Packs accompanied by bilingual English & Chinese RFQ scripts for overseas factory directors.',
            features: [
                'Bilingual English & Chinese (中文) Negotiation Scripts',
                'High-Resolution Vector PDF Tech Pack Hand-Off',
                'Official Tax Receipts Stamped PAID & VERIFIED by INCHWARD LIMITED',
            ],
        },
    ];

    return (
        <AppLayout>
            <div className="space-y-16 py-6">
                {/* Hero Banner */}
                <div className="text-center space-y-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>Interactive Step-by-Step Workflow</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        How Tagwearly AI Powers Apparel Brands
                    </h1>
                    <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        From raw text brief to factory-ready Tech Pack and turnkey landed cost calculation in 4 automated steps.
                    </p>
                </div>

                {/* 4 Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-xl space-y-6 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-black text-indigo-500/40 font-mono tracking-tighter">
                                            {step.number}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300">
                                            {step.badge}
                                        </span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-extrabold text-white tracking-tight">{step.title}</h3>
                                            <span className="text-xs text-indigo-400 font-semibold">{step.subtitle}</span>
                                        </div>
                                    </div>

                                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>

                                    <ul className="space-y-2.5 pt-2 border-t border-slate-800/80">
                                        {step.features.map((feat, i) => (
                                            <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Supply Tier Cards */}
                <div className="space-y-8 pt-8 border-t border-slate-900">
                    <div className="text-center space-y-2 max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            Transparent Supply Tiers
                        </h2>
                        <p className="text-xs text-slate-400">
                            Instant debit from your EUR/USD wallet with automated B2B PDF Invoices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                            <span className="text-xs font-bold text-slate-400 uppercase">Starter Spec</span>
                            <div className="text-3xl font-black text-white">{formatPrice(249)}</div>
                            <p className="text-xs text-slate-400">1 Basic Garment Spec</p>
                            <Link
                                href="/register"
                                className="block text-center py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition"
                            >
                                Select Starter
                            </Link>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 border-2 border-indigo-500 space-y-4 shadow-xl shadow-indigo-500/10">
                            <span className="text-xs font-bold text-indigo-400 uppercase">Pro Outerwear</span>
                            <div className="text-3xl font-black text-white">{formatPrice(699)}</div>
                            <p className="text-xs text-slate-400">1 Complex Heavy Garment</p>
                            <Link
                                href="/register"
                                className="block text-center py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-black text-white transition"
                            >
                                Select Pro Tier
                            </Link>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                            <span className="text-xs font-bold text-purple-400 uppercase">Capsule Suite</span>
                            <div className="text-3xl font-black text-white">{formatPrice(1999)}</div>
                            <p className="text-xs text-slate-400">5 Garments Drop</p>
                            <Link
                                href="/register"
                                className="block text-center py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition"
                            >
                                Select Capsule
                            </Link>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 border border-purple-500/40 space-y-4">
                            <span className="text-xs font-bold text-pink-400 uppercase">Enterprise Studio</span>
                            <div className="text-3xl font-black text-white">{formatPrice(3499)}</div>
                            <p className="text-xs text-slate-400">10 Garments Full Season</p>
                            <Link
                                href="/register"
                                className="block text-center py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition"
                            >
                                Select Enterprise
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
