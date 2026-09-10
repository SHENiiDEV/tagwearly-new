import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import TopUpModal from '@/Components/TopUpModal';
import { Wallet, PlusCircle, Download, ShieldCheck, CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function WalletIndex({ walletBalance = 0, transactions = [] }) {
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);

    return (
        <AppLayout>
            <TopUpModal isOpen={isTopUpOpen} onClose={() => setIsTopUpOpen(false)} />

            <div className="space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight">Wallet & B2B Billing</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Manage your EUR wallet balance and download official DRAYBOND LIMITED B2B PDF Invoices.
                    </p>
                </div>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Balance Card */}
                    <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4 shadow-xl">
                        <div>
                            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                                Available Corporate Credit
                            </span>
                            <div className="text-4xl font-black text-white mt-1">
                                €{Number(auth.user.wallet_balance || 0).toFixed(2)} <span className="text-sm text-indigo-400 font-bold">EUR</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsTopUpOpen(true)}
                            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-black text-xs shadow-lg shadow-indigo-500/25 transition flex items-center justify-center space-x-2"
                        >
                            <Zap className="w-4 h-4 fill-white" />
                            <span>Top-Up Account Wallet</span>
                        </button>
                    </div>

                    {/* CORPORATE ENTITY LIMITED Legal Details */}
                    <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">B2B Billing Entity & VAT Notice</h3>
                                <p className="text-xs text-slate-400">Official Merchant of Record</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                            <div>
                                <span className="text-slate-500 block uppercase text-[10px] font-bold">Company Name</span>
                                <strong className="text-white">CORPORATE ENTITY LIMITED</strong> (Company No. 16133244)
                            </div>
                            <div>
                                <span className="text-slate-500 block uppercase text-[10px] font-bold">Registered Office</span>
                                37 Cremer Street, London, England, E2 8HD
                            </div>
                            <div>
                                <span className="text-slate-500 block uppercase text-[10px] font-bold">Tax & VAT Treatment</span>
                                0% Reverse Charge (B2B Export Digital Services)
                            </div>
                            <div>
                                <span className="text-slate-500 block uppercase text-[10px] font-bold">Invoicing Guarantee</span>
                                Automated B2B PDF Invoice on every Transaction
                            </div>
                        </div>
                    </div>
                </div>

                {/* Audit Transactions Table */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-extrabold text-white tracking-tight">Strict Financial Audit Log</h2>
                        <p className="text-xs text-slate-400">Top-Ups, deductions, and downloadable B2B invoices</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-x-auto">
                        {transactions.length === 0 ? (
                            <div className="text-center py-12 text-xs text-slate-500">
                                No financial transactions recorded yet.
                            </div>
                        ) : (
                            <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase tracking-wider font-bold">
                                        <th className="p-4">Date & Time</th>
                                        <th className="p-4">Reference</th>
                                        <th className="p-4">Type</th>
                                        <th className="p-4">Service Description</th>
                                        <th className="p-4 text-right">Amount (EUR)</th>
                                        <th className="p-4 text-center">B2B Invoice</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60">
                                    {transactions.map((tx) => {
                                        const isTopUp = tx.type === 'top_up';
                                        return (
                                            <tr key={tx.id} className="hover:bg-slate-950/30">
                                                <td className="p-4 text-slate-400 font-mono">
                                                    {new Date(tx.created_at).toLocaleString()}
                                                </td>
                                                <td className="p-4 font-mono font-bold text-slate-200">
                                                    {tx.reference_code}
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                                                            isTopUp
                                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                                        }`}
                                                    >
                                                        {isTopUp ? <ArrowDownLeft className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                                                        <span>{tx.type}</span>
                                                    </span>
                                                </td>
                                                <td className="p-4 font-bold text-white">{tx.service_name}</td>
                                                <td
                                                    className={`p-4 text-right font-black text-sm ${
                                                        isTopUp ? 'text-emerald-400' : 'text-slate-300'
                                                    }`}
                                                >
                                                    {isTopUp ? '+' : '-'}€{tx.amount.toFixed(2)}
                                                </td>
                                                <td className="p-4 text-center">
                                                    <a
                                                        href={`/wallet/invoice/${tx.id}`}
                                                        target="_blank"
                                                        className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                                                    >
                                                        <Download className="w-3.5 h-3.5" />
                                                        <span>Invoice (PDF)</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
