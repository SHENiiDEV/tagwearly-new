import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Download, Layers, Palette, FileText, CheckCircle2, ChevronLeft, ShieldCheck } from 'lucide-react';

export default function Show({ techPack }) {
    const data = techPack.json_data || {};
    const [activeTab, setActiveTab] = useState('bom');

    const tabs = [
        { id: 'bom', label: 'Bill of Materials (BOM)', icon: FileText },
        { id: 'sizing', label: 'Size Grading Matrix (cm)', icon: Layers },
        { id: 'construction', label: 'Construction & Seams', icon: CheckCircle2 },
        { id: 'pantone', label: 'Pantone & Color Palette', icon: Palette },
    ];

    return (
        <AppLayout>
            <div className="space-y-8">
                {/* Header Navigation */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div className="space-y-1">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center space-x-1 text-xs font-bold text-slate-400 hover:text-white transition mb-2"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Back to Dashboard</span>
                        </Link>
                        <div className="flex items-center space-x-3">
                            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                {data.garment_name || techPack.title}
                            </h1>
                            <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-black uppercase tracking-wider">
                                {techPack.tier} SPEC
                            </span>
                        </div>
                        <p className="text-xs text-slate-400">
                            Style Code: <strong className="text-slate-200 font-mono">{data.style_code || 'TW-001'}</strong> • Season: <strong className="text-slate-200">{data.season || 'FW 2026'}</strong>
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <a
                            href={`/tech-packs/${techPack.id}/pdf`}
                            target="_blank"
                            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-sm shadow-xl shadow-indigo-500/25 transition flex items-center space-x-2"
                        >
                            <Download className="w-4 h-4" />
                            <span>Export Production PDF</span>
                        </a>
                    </div>
                </div>

                {/* Garment Brief Box */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Client Brief Description:</span>
                    <p className="italic text-slate-200">"{techPack.brief_text}"</p>
                </div>

                {/* Tabs */}
                <div className="flex items-center space-x-2 border-b border-slate-800 overflow-x-auto pb-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-5 py-3 rounded-t-xl font-bold text-xs transition border-b-2 whitespace-nowrap ${
                                    isActive
                                        ? 'bg-slate-900 border-indigo-500 text-indigo-400'
                                        : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-950/40'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
                    {activeTab === 'bom' && (
                        <div className="space-y-6">
                            <h3 className="text-base font-extrabold text-white">Bill of Materials (BOM)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase tracking-wider font-bold">
                                            <th className="p-4">Category</th>
                                            <th className="p-4">Item Name & Ref</th>
                                            <th className="p-4">Composition & GSM</th>
                                            <th className="p-4">Placement & Engineering Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60">
                                        {(data.bill_of_materials || []).map((item, idx) => (
                                            <tr key={idx} className="hover:bg-slate-950/30">
                                                <td className="p-4 font-bold text-indigo-400">{item.category}</td>
                                                <td className="p-4">
                                                    <div className="font-extrabold text-white">{item.item_name}</div>
                                                    <div className="text-[10px] text-slate-500 font-mono">Ref: {item.supplier_ref}</div>
                                                </td>
                                                <td className="p-4 text-slate-300">
                                                    <div>{item.composition}</div>
                                                    <div className="font-bold text-slate-100">{item.weight}</div>
                                                </td>
                                                <td className="p-4 text-slate-400 leading-relaxed">{item.details}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'sizing' && (
                        <div className="space-y-6">
                            <h3 className="text-base font-extrabold text-white">Size Grading Matrix (cm)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase tracking-wider font-bold">
                                            <th className="p-4">Point of Measurement (POM)</th>
                                            <th className="p-4 text-center">Tolerance</th>
                                            <th className="p-4 text-center">S</th>
                                            <th className="p-4 text-center">M (Base)</th>
                                            <th className="p-4 text-center">L</th>
                                            <th className="p-4 text-center">XL</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60">
                                        {(data.measurements_chart || []).map((pom, idx) => (
                                            <tr key={idx} className="hover:bg-slate-950/30">
                                                <td className="p-4 font-bold text-white">{pom.point_of_measure}</td>
                                                <td className="p-4 text-center font-mono text-slate-500">{pom.tolerance}</td>
                                                <td className="p-4 text-center font-bold text-slate-200">{pom.S} cm</td>
                                                <td className="p-4 text-center font-black text-indigo-400 bg-indigo-500/5">{pom.M} cm</td>
                                                <td className="p-4 text-center font-bold text-slate-200">{pom.L} cm</td>
                                                <td className="p-4 text-center font-bold text-slate-200">{pom.XL} cm</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'construction' && (
                        <div className="space-y-6">
                            <h3 className="text-base font-extrabold text-white">Construction & Seam Specs</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 uppercase tracking-wider font-bold">
                                            <th className="p-4">Component</th>
                                            <th className="p-4">Seam Type</th>
                                            <th className="p-4">Stitch & ISO Standard</th>
                                            <th className="p-4 text-center">SPI</th>
                                            <th className="p-4">Manufacturing Instructions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60">
                                        {(data.construction_details || []).map((seam, idx) => (
                                            <tr key={idx} className="hover:bg-slate-950/30">
                                                <td className="p-4 font-bold text-white">{seam.component}</td>
                                                <td className="p-4 text-slate-300">{seam.seam_type}</td>
                                                <td className="p-4 font-mono text-indigo-400">{seam.stitch_type}</td>
                                                <td className="p-4 text-center font-bold text-slate-200">{seam.spi}</td>
                                                <td className="p-4 text-slate-400 leading-relaxed">{seam.instructions}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'pantone' && (
                        <div className="space-y-6">
                            <h3 className="text-base font-extrabold text-white">Pantone & Color Palette Match</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(data.pantone_colors || []).map((c, idx) => (
                                    <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                                        <div
                                            className="w-full h-24 rounded-lg shadow-inner border border-slate-700"
                                            style={{ backgroundColor: c.hex_code }}
                                        />
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-slate-500">{c.section}</span>
                                            <div className="text-base font-black text-white">{c.color_name}</div>
                                            <div className="text-xs font-mono text-indigo-400 mt-1">{c.pantone_code}</div>
                                            <div className="text-[11px] font-mono text-slate-400">HEX: {c.hex_code}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
