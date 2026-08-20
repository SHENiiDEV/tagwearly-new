import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { X, CreditCard, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function TopUpModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [selectedPreset, setSelectedPreset] = useState('pro');
    const presets = [
        { id: 'starter', amount: 249, label: 'Starter (€249)', desc: '1 Basic Garment Spec' },
        { id: 'pro', amount: 699, label: 'Pro (€699)', desc: '1 Outerwear / Complex Spec' },
        { id: 'collection', amount: 1999, label: 'Collection (€1,999)', desc: 'Capsule Suite (5 Garments)' },
        { id: 'enterprise', amount: 3499, label: 'Enterprise (€3,499)', desc: 'Full Season Launch (10 Items)' },
    ];

    const { data, setData, post, processing, errors } = useForm({
        amount: 699,
        preset: 'pro',
    });

    const handleSelectPreset = (preset) => {
        setSelectedPreset(preset.id);
        setData({
            amount: preset.amount,
            preset: preset.id,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/wallet/top-up', {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg overflow-hidden border border-indigo-500/30 rounded-3xl bg-slate-900 shadow-2xl shadow-indigo-500/20">
                {/* Glowing top line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-inner">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-white">Top-Up Wallet Balance</h3>
                            <p className="text-xs text-slate-400">B2B EUR Corporate Credit Deposit</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                            <span>Select Package Tier Preset</span>
                            <span className="text-[10px] text-indigo-400 font-mono">B2B High-Ticket</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {presets.map((p) => (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => handleSelectPreset(p)}
                                    className={`p-3.5 text-left rounded-2xl border transition-all ${
                                        selectedPreset === p.id
                                            ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-lg shadow-indigo-500/15 ring-1 ring-indigo-500'
                                            : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                                    }`}
                                >
                                    <div className="text-base font-black">€{p.amount.toLocaleString()}</div>
                                    <div className="text-xs font-extrabold text-slate-200 mt-0.5">{p.label}</div>
                                    <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{p.desc}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                            Or Enter Custom Amount (€ EUR)
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-3 text-slate-400 font-bold">€</span>
                            <input
                                type="number"
                                min="10"
                                max="100000"
                                value={data.amount}
                                onChange={(e) => setData({ ...data, amount: e.target.value, preset: 'custom' })}
                                className="w-full py-3.5 pl-9 pr-4 text-white rounded-2xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:outline-none font-black text-xl"
                                placeholder="699"
                            />
                        </div>
                        {errors.amount && <p className="text-xs text-rose-400 mt-1">{errors.amount}</p>}
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-2">
                        <div className="flex items-center text-emerald-400 font-extrabold space-x-2">
                            <ShieldCheck className="w-4 h-4" />
                            <span>B2B Official Invoice Included</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-300">
                            Issued by <strong>INCHWARD LIMITED</strong> (Company No. 16021412, UK). 0% VAT Reverse Charge. Instant automated PDF invoice sent to your email.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-4 px-6 font-black text-white text-sm rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 shadow-xl shadow-indigo-500/25 transition disabled:opacity-50 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
                    >
                        <Zap className="w-4 h-4 fill-white" />
                        <span>Confirm Deposit (€{data.amount})</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
