import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { PlusCircle, FileText, Download, Sparkles, Shirt, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Dashboard({ techPacks = [], walletBalance = 0 }) {
    return (
        <AppLayout>
            <div className="space-y-8">
                {/* Hero Header */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-8 md:p-10 shadow-2xl">
                    <div className="relative z-10 max-w-2xl space-y-4">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>100% Digital B2B Platform</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                            AI Fashion Tech Pack Architect
                        </h1>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                            Transform text briefs into factory-ready apparel production Tech Packs in seconds. Optimized for garment manufacturers in China & Turkey.
                        </p>

                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <Link
                                href="/tech-packs/create"
                                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition flex items-center space-x-2"
                            >
                                <PlusCircle className="w-4 h-4" />
                                <span>Create New Tech Pack</span>
                            </Link>
                            <Link
                                href="/wallet"
                                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition"
                            >
                                Wallet Dashboard (€{walletBalance.toFixed(2)})
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tech Packs Grid / List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-extrabold text-white tracking-tight">Your Generated Tech Packs</h2>
                            <p className="text-xs text-slate-400">Multi-page production specification documents</p>
                        </div>

                        <Link
                            href="/tech-packs/create"
                            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                        >
                            <span>Generate Tech Pack</span>
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {techPacks.length === 0 ? (
                        <div className="text-center py-16 px-4 bg-slate-900/50 border border-dashed border-slate-800 rounded-3xl space-y-4">
                            <div className="inline-flex p-4 rounded-2xl bg-slate-800/80 text-slate-400">
                                <Shirt className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white">No Tech Packs Generated Yet</h3>
                                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                                    Start by submitting a clothing text brief (garment type, fabric, weight, YKK zips, colors).
                                </p>
                            </div>
                            <Link
                                href="/tech-packs/create"
                                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg transition"
                            >
                                <PlusCircle className="w-4 h-4" />
                                <span>Generate First Tech Pack (€149 - €499)</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {techPacks.map((tp) => (
                                <div
                                    key={tp.id}
                                    className="group relative flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/10"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-wider">
                                                {tp.tier} SPEC
                                            </span>
                                            <span className="text-[11px] text-slate-500 font-mono">
                                                {new Date(tp.created_at).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-extrabold text-white group-hover:text-indigo-300 transition line-clamp-1">
                                            {tp.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 font-medium">
                                            Garment: <strong className="text-slate-200">{tp.garment_type}</strong>
                                        </p>
                                        <p className="text-xs text-slate-500 line-clamp-2 italic">
                                            "{tp.brief_text}"
                                        </p>
                                    </div>

                                    <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                                        <Link
                                            href={`/tech-packs/${tp.id}`}
                                            className="flex-1 text-center py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
                                        >
                                            View Interactive Specs
                                        </Link>
                                        <a
                                            href={`/tech-packs/${tp.id}/pdf`}
                                            target="_blank"
                                            className="p-2 rounded-xl bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/30 transition"
                                            title="Export Production PDF"
                                        >
                                            <Download className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
