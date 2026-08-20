import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
    HelpCircle, Mail, Wallet, Building2, ChevronDown, ShieldCheck,
    FileText, Lock, RefreshCw, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function Support() {
    const [openIdx, setOpenIdx] = useState(0);

    const faqs = [
        {
            q: 'How do the Supply Packages (€249, €699, €1,999, €3,499) work?',
            a: 'Each package corresponds to a dedicated AI compilation scope. Starter (€249) covers single basic garments (tees, basic hoodies). Pro (€699) includes complex outerwear, YKK zip hardware, and Pantone swatches. Capsule (€1,999) covers a 5-item collection drop, while Enterprise (€3,499) covers a 10-item season launch.',
        },
        {
            q: 'What is the 14-Day Unused Wallet Funds Refund Policy?',
            a: 'All wallet top-up deposits made by corporate clients are eligible for a 100% money-back refund within 14 days of deposit, provided the balance remains unspent. Deductions for generated and downloaded Tech Packs are non-refundable once unlocked.',
        },
        {
            q: 'How is 0% VAT UK B2B Reverse Charge applied to my invoices?',
            a: 'As digital export services provided by INCHWARD LIMITED (UK Co. No. 16021412), B2B transactions are subject to 0% VAT under Reverse Charge rules. Every transaction generates an automated B2B PDF tax invoice stamped PAID & VERIFIED.',
        },
        {
            q: 'Who owns the Intellectual Property (IP) of generated Tech Packs?',
            a: 'You retain 100% exclusive intellectual property rights to all garments, measurements, BOM specs, and technical designs created through Tagwearly AI. We never share, sell, or reuse your proprietary fashion designs.',
        },
        {
            q: 'Are generated PDF Tech Packs compatible with factories in China & Turkey?',
            a: 'Yes. All output documents are rendered in high-resolution vector PDF format, utilizing international metric sizing (cm), ISO seam standards (e.g., ISO 607 Flatlock, ISO 401 Chainstitch), SPI density, and Pantone TCX/TPG color codes.',
        },
    ];

    return (
        <AppLayout>
            <div className="space-y-12 py-6 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-wider">
                        <HelpCircle className="w-4 h-4" />
                        <span>Support & Help Desk</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        How Can We Assist Your Brand?
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                        Explore our quick communication channels or read through our interactive FAQ guide below.
                    </p>
                </div>

                {/* 3 Support Channels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Channel 1: Email */}
                    <a
                        href="mailto:info@tagwearly.co.uk"
                        className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-xl space-y-4 group"
                    >
                        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-base font-extrabold text-white group-hover:text-indigo-300 transition">
                                Executive Email Support
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">Direct contact with trade desk</p>
                        </div>
                        <div className="text-xs font-bold text-indigo-400 flex items-center space-x-1">
                            <span>info@tagwearly.co.uk</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </a>

                    {/* Channel 2: B2B Invoices & Wallet */}
                    <Link
                        href="/wallet"
                        className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-xl space-y-4 group"
                    >
                        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit group-hover:scale-110 transition-transform">
                            <Wallet className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-base font-extrabold text-white group-hover:text-emerald-300 transition">
                                B2B Invoices & Wallet
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">Top-up balance & download invoices</p>
                        </div>
                        <div className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
                            <span>Go to Wallet Dashboard</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </Link>

                    {/* Channel 3: Corporate Inquiries */}
                    <Link
                        href="/contact"
                        className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl space-y-4 group"
                    >
                        <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit group-hover:scale-110 transition-transform">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-base font-extrabold text-white group-hover:text-purple-300 transition">
                                Corporate Inquiries
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">Submit direct trade ticket</p>
                        </div>
                        <div className="text-xs font-bold text-purple-400 flex items-center space-x-1">
                            <span>Open Support Form</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </Link>
                </div>

                {/* FAQ Accordion Section */}
                <div className="space-y-6 pt-6">
                    <div className="text-center space-y-1">
                        <h2 className="text-2xl font-black text-white tracking-tight">
                            Interactive FAQ Accordion
                        </h2>
                        <p className="text-xs text-slate-400">Click any question below to expand detailed answers</p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                                        isOpen
                                            ? 'bg-slate-900 border-indigo-500/60 shadow-lg'
                                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                                        className="w-full p-5 text-left flex items-center justify-between space-x-4"
                                    >
                                        <span className="text-sm font-bold text-white">{faq.q}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 text-indigo-400 transition-transform duration-200 shrink-0 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 mt-2">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
