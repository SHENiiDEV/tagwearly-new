import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Lock, ShieldCheck, Building2, EyeOff, Server } from 'lucide-react';

export default function Privacy() {
    return (
        <AppLayout>
            <div className="max-w-4xl mx-auto space-y-8 py-4">
                {/* Header & Sub-Navigation */}
                <div className="border-b border-slate-800 pb-6 space-y-4">
                    <div className="inline-flex items-center space-x-2 text-indigo-400 text-xs font-extrabold uppercase tracking-wider">
                        <Lock className="w-4 h-4" />
                        <span>B2B Legal Suite • Privacy Policy</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Privacy Policy & IP Guarantee</h1>
                    <p className="text-xs text-slate-400">
                        Design Brief Confidentiality & UK GDPR Data Protection for <strong>DRAYBOND LIMITED</strong>
                    </p>

                    {/* Policy Tabs */}
                    <div className="flex items-center space-x-2 pt-2">
                        <Link
                            href="/terms"
                            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 transition"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/privacy"
                            className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/refund"
                            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 transition"
                        >
                            Refund Policy
                        </Link>
                    </div>
                </div>

                {/* Company Details Box */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center space-x-2 text-white font-bold mb-1">
                        <Building2 className="w-4 h-4 text-indigo-400" />
                        <span>Data Controller Entity</span>
                    </div>
                    <p><strong>Company Name:</strong> DRAYBOND LIMITED (Company No. 16021806)</p>
                    <p><strong>Registered Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK, CF31 1JF</p>
                    <p><strong>Data Protection Contact:</strong> info@tagwearly.co.uk</p>
                </div>

                {/* Policy Clauses */}
                <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
                    {/* Key Guarantee Box */}
                    <section className="p-6 rounded-2xl bg-slate-900 border border-indigo-500/40 space-y-3 shadow-xl">
                        <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                            <EyeOff className="w-5 h-5" />
                            <h2 className="text-base font-extrabold text-white">1. Strict Fashion Collection IP & Concept Confidentiality</h2>
                        </div>
                        <p>
                            We understand that fashion collection designs, tech pack briefs, fabric GSM choices, and garment specs represent proprietary intellectual property (IP).
                        </p>
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold space-y-2">
                            <p>
                                <strong>No Public AI Training:</strong> Your clothing text briefs and collection ideas are NEVER used to train public AI models, nor are they ever shared, published, or sold to competing apparel brands.
                            </p>
                            <p>
                                <strong>Private Data Isolation:</strong> Generated Tech Packs are stored securely in isolated user database records accessible only by your authenticated brand account.
                            </p>
                        </div>
                    </section>

                    <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <h2 className="text-base font-extrabold text-white">2. UK GDPR & Data Protection Act 2018</h2>
                        <p>
                            <strong>DRAYBOND LIMITED</strong> acts as the Data Controller under United Kingdom General Data Protection Regulation (UK GDPR).
                        </p>
                        <p className="text-xs text-slate-400">
                            We collect personal registration data (name, surname, work email, phone number, date of birth, and B2B billing address) strictly for account management, fraud prevention, and B2B invoice generation.
                        </p>
                    </section>

                    <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <h2 className="text-base font-extrabold text-white">3. Your Data Rights</h2>
                        <p className="text-xs text-slate-300">
                            Under UK GDPR, you hold full rights to access, rectify, or request deletion of your personal account data at any time by contacting <a href="mailto:info@tagwearly.co.uk" className="text-indigo-400 font-bold underline">info@tagwearly.co.uk</a>.
                        </p>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
