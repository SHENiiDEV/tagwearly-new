import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { RefreshCw, ShieldAlert, Building2, Mail, CheckCircle2 } from 'lucide-react';

export default function Refund() {
    return (
        <AppLayout>
            <div className="max-w-4xl mx-auto space-y-8 py-4">
                {/* Header & Sub-Navigation */}
                <div className="border-b border-slate-800 pb-6 space-y-4">
                    <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
                        <RefreshCw className="w-4 h-4" />
                        <span>B2B Legal Suite • Refund Policy</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Refund & Charge Policy</h1>
                    <p className="text-xs text-slate-400">
                        B2B Commercial Refund Terms for <strong>DRAYBOND LIMITED</strong>
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
                            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 transition"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/refund"
                            className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20"
                        >
                            Refund Policy
                        </Link>
                    </div>
                </div>

                {/* Company Details Box */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center space-x-2 text-white font-bold mb-1">
                        <Building2 className="w-4 h-4 text-indigo-400" />
                        <span>Commercial Merchant Entity</span>
                    </div>
                    <p><strong>Company Name:</strong> INCHWARD LIMITED (Company No. 16021412)</p>
                    <p><strong>Registered Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK, CF31 1JF</p>
                    <p><strong>Refund Claims Email:</strong> info@tagwearly.co.uk</p>
                </div>

                {/* Policy Clauses */}
                <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
                    {/* B2B Refund Rule Box */}
                    <section className="p-6 rounded-2xl bg-slate-900 border border-amber-500/40 space-y-4 shadow-xl">
                        <h2 className="text-base font-extrabold text-white">1. Strict B2B 14-Day Unused Wallet Balance Rule</h2>
                        <p>
                            Tagwearly AI operates strictly as a digital B2B SaaS platform under <strong>DRAYBOND LIMITED</strong>.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
                                <div className="font-extrabold text-white flex items-center space-x-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    <span>Unspent Wallet Deposits</span>
                                </div>
                                <p className="text-[11px] leading-relaxed">
                                    100% refundable within 14 days of deposit if the funds remain sitting unspent in your account wallet balance.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 space-y-1">
                                <div className="font-extrabold text-white flex items-center space-x-1.5">
                                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                                    <span>Generated Tech Pack Charges</span>
                                </div>
                                <p className="text-[11px] leading-relaxed">
                                    Deducted funds for generated documents (€149, €499, €1,499) are strictly non-refundable due to immediate digital delivery.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <h2 className="text-base font-extrabold text-white">2. Refund Request Procedure & SLA</h2>
                        <p>
                            To submit a refund request for unspent wallet funds:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-300">
                            <li>Send an email to <a href="mailto:info@tagwearly.co.uk" className="text-indigo-400 font-bold underline">info@tagwearly.co.uk</a> from your registered work email.</li>
                            <li>Include your B2B Transaction Reference Code (e.g. <code>TW-INV-8A391F01</code>).</li>
                            <li>Approved refunds are returned to the original payment source within <strong>3-5 business days</strong>.</li>
                        </ol>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
