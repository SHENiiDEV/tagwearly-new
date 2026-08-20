import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { ShieldAlert, FileText, Lock, RefreshCw, CheckCircle2, Building2 } from 'lucide-react';

export default function Terms() {
    return (
        <AppLayout>
            <div className="max-w-4xl mx-auto space-y-8 py-4">
                {/* Header & Sub-Navigation */}
                <div className="border-b border-slate-800 pb-6 space-y-4">
                    <div className="inline-flex items-center space-x-2 text-rose-400 text-xs font-extrabold uppercase tracking-wider">
                        <ShieldAlert className="w-4 h-4" />
                        <span>B2B Legal Suite • Terms of Service</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Terms of Service</h1>
                    <p className="text-xs text-slate-400">
                        Official Legal Terms & Manufacturing Liability Disclaimer for <strong>DRAYBOND LIMITED</strong>
                    </p>

                    {/* Policy Tabs */}
                    <div className="flex items-center space-x-2 pt-2">
                        <Link
                            href="/terms"
                            className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20"
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
                        <span>Operating Merchant Entity</span>
                    </div>
                    <p><strong>Company Name:</strong> INCHWARD LIMITED</p>
                    <p><strong>Registered Company Number:</strong> 16021412 (England & Wales)</p>
                    <p><strong>Registered Address:</strong> Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF</p>
                    <p><strong>Official Contact Email:</strong> info@tagwearly.co.uk</p>
                </div>

                {/* Policy Clauses */}
                <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
                    <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <h2 className="text-base font-extrabold text-white">1. Acceptance of Terms & B2B Capacity</h2>
                        <p>
                            By registering an account, depositing funds into the wallet balance, or generating AI Fashion Tech Pack specifications on Tagwearly AI (operated by <strong>DRAYBOND LIMITED</strong>), you confirm that you are acting in a commercial, B2B, or professional brand capacity.
                        </p>
                        <p>
                            If you do not agree to all terms set forth herein, you must refrain from using the platform and its automated document generation services.
                        </p>
                    </section>

                    <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 border-l-4 border-l-rose-500">
                        <h2 className="text-base font-extrabold text-white">2. Complete Manufacturing & Production Liability Disclaimer</h2>
                        <p className="font-bold text-rose-300">
                            Tagwearly AI provides automated AI calculations, size grading matrices, Bill of Materials (BOM), seam recommendations, and Pantone color swatches strictly "AS IS" for preliminary architectural reference.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-400">
                            <li>
                                <strong>Mandatory Sample Prototype Verification:</strong> The client brand owner and the receiving apparel factory (in China, Turkey, or elsewhere) are strictly required to produce, measure, fit-test, and approve physical pre-production prototype samples (proto samples) prior to initiating mass production bulk runs.
                            </li>
                            <li>
                                <strong>Factory Machinery Audit:</strong> The receiving factory must independently review and verify all size grading tolerances (±cm), seam allowances, stitch density (SPI), and fabric shrinkage properties against their specific manufacturing machinery.
                            </li>
                            <li>
                                <strong>No Liability for Material Loss:</strong> Neither Tagwearly AI nor DRAYBOND LIMITED accepts any financial claims, damages, or liability for ruined fabric runs, color dyeing mismatches, sizing discrepancies, or factory production delays.
                            </li>
                        </ul>
                    </section>

                    <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <h2 className="text-base font-extrabold text-white">3. B2B Wallet & Invoicing Terms</h2>
                        <p>
                            All pricing (€149 Starter, €499 Pro, €1,499 Collection) is denominated in Euros (€ EUR).
                        </p>
                        <p>
                            Official B2B PDF invoices are generated on the fly for every top-up transaction under <strong>DRAYBOND LIMITED</strong> details, applying a 0% VAT rate (Reverse Charge for international digital services export).
                        </p>
                    </section>

                    <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                        <h2 className="text-base font-extrabold text-white">4. Governing Law & Jurisdiction</h2>
                        <p>
                            These Terms of Service shall be governed by, construed, and enforced in accordance with the laws of <strong>England & Wales, United Kingdom</strong>. Any legal dispute arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the English courts.
                        </p>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
