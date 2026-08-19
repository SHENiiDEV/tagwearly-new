import React, { useState } from 'react';
import { useForm, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import TopUpModal from '@/Components/TopUpModal';
import MagicUiGenerator from '@/Components/MagicUiGenerator';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, FileText, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function Create({ auth }) {
    const user = auth.user;
    const walletBalance = user?.wallet_balance || 0;

    const [isTopUpOpen, setIsTopUpOpen] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    const tiers = [
        {
            id: 'starter',
            name: 'Starter Spec',
            price: 249,
            desc: 'Single Basic Garment (Hoodie, Sweatpants, Tee)',
            features: ['1 Basic Garment Spec', 'S-XL Size Grading Matrix (cm)', 'Basic BOM & Thread Specs', 'Factory Production PDF'],
        },
        {
            id: 'pro',
            name: 'Pro Outerwear',
            price: 699,
            recommended: true,
            desc: 'Complex Garment (Jacket, Cargo Pants, Heavy Outerwear)',
            features: [
                '1 Complex / Heavy Outerwear Item',
                'Advanced Hardware Specs & YKK Zippers',
                'Pantone TCX / TPG Color Matching',
                'ISO Seam & Stitch Engineering (SPI)',
                'Multi-Page Production PDF Package',
            ],
        },
        {
            id: 'collection',
            name: 'Capsule Suite',
            price: 1999,
            desc: 'Full Capsule Collection (Up to 5 Garments)',
            features: [
                'Complete Capsule Collection (5 Items)',
                'Unified Style & Color Palette Suite',
                'Custom Care Label & Hardware Artwork Specs',
                'Full Multi-Page Documentation Package',
            ],
        },
        {
            id: 'enterprise',
            name: 'Enterprise Studio',
            price: 3499,
            desc: 'Full Season Launch (Up to 10 Items)',
            features: [
                'Full Season Launch (10 Garment Specs)',
                'Custom Factory CAD Hand-off Support',
                'Priority Processing & Dedicated Audit',
                'Full Production Documentation Package',
            ],
        },
    ];

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        garment_type: 'Hoodie',
        tier: 'pro',
        brief_text: '',
    });

    const selectedTierObj = tiers.find((t) => t.id === data.tier) || tiers[1];
    const hasEnoughBalance = walletBalance >= selectedTierObj.price;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!hasEnoughBalance) {
            setIsTopUpOpen(true);
            return;
        }

        setIsGenerating(true);
        post('/tech-packs', {
            onError: () => setIsGenerating(false),
            onFinish: () => setIsGenerating(false),
        });
    };

    return (
        <AppLayout>
            <MagicUiGenerator
                isGenerating={isGenerating}
                garmentTitle={data.title || 'Apparel Production Spec'}
                tier={selectedTierObj.name}
            />

            <div className="max-w-4xl mx-auto space-y-8 py-4">
                {/* Back & Header */}
                <div>
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center space-x-1 text-xs font-bold text-slate-400 hover:text-white transition mb-3"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back to Dashboard</span>
                    </Link>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-wider mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI Tech Pack Generator</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight">New Fashion Tech Pack</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Describe your garment specifications. Tagwearly AI will formulate a complete factory-grade tech pack.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Tier Selection */}
                    <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                            Select Tech Pack Tier
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {tiers.map((t) => {
                                const isSelected = data.tier === t.id;
                                return (
                                    <button
                                        key={t.id}
                                        type="button"
                                        onClick={() => setData('tier', t.id)}
                                        className={`relative p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                                            isSelected
                                                ? 'bg-slate-900 border-indigo-500 ring-2 ring-indigo-500 shadow-xl shadow-indigo-500/10'
                                                : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                                        }`}
                                    >
                                        {t.recommended && (
                                            <span className="absolute -top-3 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                                                Popular
                                            </span>
                                        )}
                                        <div>
                                            <div className="text-xs font-black text-slate-400 uppercase">{t.name}</div>
                                            <div className="text-2xl font-black text-white mt-1">€{t.price}</div>
                                            <p className="text-[11px] text-slate-400 mt-1">{t.desc}</p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Basic Garment Info */}
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Garment Title *
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="Heavyweight Oversized Zip Hoodie"
                                    required
                                />
                                {errors.title && <p className="text-xs text-rose-400 mt-1">{errors.title}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Garment Category *
                                </label>
                                <select
                                    value={data.garment_type}
                                    onChange={(e) => setData('garment_type', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                >
                                    <option value="Hoodie">Hoodie & Sweatshirt</option>
                                    <option value="Jacket">Jacket & Outerwear</option>
                                    <option value="Cargo Pants">Technical Cargo & Pants</option>
                                    <option value="T-Shirt">T-Shirt & Top</option>
                                    <option value="Capsule Collection">Capsule Collection (Multi-Item)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                                Garment Specifications & Text Brief *
                            </label>
                            <textarea
                                rows={5}
                                value={data.brief_text}
                                onChange={(e) => setData('brief_text', e.target.value)}
                                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none leading-relaxed font-mono"
                                placeholder="Describe fabric weight (e.g. 450 GSM French Terry 100% cotton), fit style (oversized drop shoulder), zipper specifications (YKK #8 antique nickel), pantone colors (washed slate grey), pockets, and care label text..."
                                required
                            />
                            {errors.brief_text && <p className="text-xs text-rose-400 mt-1">{errors.brief_text}</p>}
                        </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                        <div className="text-xs space-y-1 text-center sm:text-left">
                            <div className="text-slate-400">
                                Total Cost: <strong className="text-white text-base">€{selectedTierObj.price} EUR</strong>
                            </div>
                            <div className="text-slate-500">
                                Current Wallet Balance: <span className="font-bold text-slate-300">€{walletBalance.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full sm:w-auto py-3.5 px-8 font-black text-white text-sm rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 shadow-xl shadow-indigo-500/25 transition disabled:opacity-50 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
                        >
                            <Zap className="w-4 h-4 fill-white" />
                            <span>{hasEnoughBalance ? `Generate Tech Pack (€${selectedTierObj.price})` : `Top-Up Wallet (€${selectedTierObj.price})`}</span>
                        </button>
                    </div>
                </form>
            </div>

            <TopUpModal isOpen={isTopUpOpen} onClose={() => setIsTopUpOpen(false)} />
        </AppLayout>
    );
}
