import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
    Building2, ShieldCheck, Cpu, TrendingUp, Clock, Lock,
    CheckCircle2, Sparkles, Globe, Award, ArrowRight
} from 'lucide-react';

export default function About() {
    return (
        <AppLayout>
            <div className="space-y-16 py-6 max-w-5xl mx-auto">
                {/* Hero Mission */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Mission & Vision</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        Eliminating Trader Markups. Empowering Direct Factory Sourcing.
                    </h1>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Tagwearly AI was created to bypass traditional trading intermediaries who siphon 30% to 40% of apparel margins. We provide fashion brands direct, unmediated access to tier-1 manufacturing specifications.
                    </p>
                </div>

                {/* Bento-Grid Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Bento Item 1 */}
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
                        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-black text-white tracking-tight">1,200+</div>
                        <span className="text-xs font-bold text-slate-400 block uppercase">Verified OEM/ODM Factories</span>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            Continuous data indexing across Shenzhen, Ningbo, Dongguan, and Vietnam.
                        </p>
                    </div>

                    {/* Bento Item 2 */}
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
                        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-black text-emerald-400 tracking-tight">58.4%</div>
                        <span className="text-xs font-bold text-slate-400 block uppercase">Avg. Brand Margin Boost</span>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            Direct factory pricing minus middleman markup fees.
                        </p>
                    </div>

                    {/* Bento Item 3 */}
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
                        <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-black text-white tracking-tight">&lt; 60s</div>
                        <span className="text-xs font-bold text-slate-400 block uppercase">AI Dossier Compilation</span>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            Instant production-ready PDF Tech Pack generation.
                        </p>
                    </div>

                    {/* Bento Item 4 */}
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
                        <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 w-fit">
                            <Lock className="w-5 h-5" />
                        </div>
                        <div className="text-3xl font-black text-pink-400 tracking-tight">100%</div>
                        <span className="text-xs font-bold text-slate-400 block uppercase">IP Ownership Guarantee</span>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            Complete intellectual property ownership retained by your brand.
                        </p>
                    </div>
                </div>

                {/* Core Pillars */}
                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
                    <h2 className="text-2xl font-black text-white tracking-tight">
                        Our Engineering Pillars
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                        <div className="space-y-2">
                            <strong className="text-white text-sm block">1. Vector Precision Specs</strong>
                            <p className="text-slate-400 leading-relaxed">
                                Every generated tech pack includes exact metric measurements (cm), seam types (ISO 607/401), and thread SPI density to eliminate sample defects.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <strong className="text-white text-sm block">2. Turnkey Cost Transparency</strong>
                            <p className="text-slate-400 leading-relaxed">
                                Integrated customs tariff and ocean freight calculation provides clear landed cost per unit before factory sample commitment.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <strong className="text-white text-sm block">3. Institutional Merchant Compliance</strong>
                            <p className="text-slate-400 leading-relaxed">
                                Operating as an official UK digital merchant under 0% VAT Reverse Charge, ensuring automated tax invoices for corporate compliance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Official Merchant of Record Entity Block */}
                <div className="p-8 rounded-3xl bg-slate-900 border border-emerald-500/30 space-y-4 shadow-xl">
                    <div className="flex items-center space-x-3 text-emerald-400 font-extrabold text-sm border-b border-slate-800 pb-3">
                        <ShieldCheck className="w-5 h-5" />
                        <span>Official Merchant of Record Entity</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                        <div>
                            <span className="text-slate-500 block text-[10px] font-bold uppercase">Legal Entity Name</span>
                            <strong className="text-white text-sm">INCHWARD LIMITED</strong>
                        </div>
                        <div>
                            <span className="text-slate-500 block text-[10px] font-bold uppercase">UK Company Registration</span>
                            <strong className="text-white text-sm">Co. No. 16021412 (England & Wales)</strong>
                        </div>
                        <div>
                            <span className="text-slate-500 block text-[10px] font-bold uppercase">Registered Address</span>
                            <span className="text-slate-300">Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, UK</span>
                        </div>
                        <div>
                            <span className="text-slate-500 block text-[10px] font-bold uppercase">Tax & Billing Compliance</span>
                            <span className="text-slate-300">0% VAT UK B2B Reverse Charge Invoicing</span>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
