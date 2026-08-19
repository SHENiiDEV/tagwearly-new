import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Wallet, PlusCircle, Sparkles, FileText, ShieldCheck, LogOut, Layers, ChevronDown } from 'lucide-react';
import TopUpModal from '@/Components/TopUpModal';

export default function AppLayout({ children }) {
    const { auth, flash } = usePage().props;
    const user = auth?.user;
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/dashboard" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-indigo-500/30 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            <img src="/images/logo.jpg" alt="Tagwearly AI Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className="text-lg font-black tracking-tight text-white flex items-center">
                                TAGWEARLY <span className="ml-1 text-indigo-400 font-extrabold">AI</span>
                            </span>
                            <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                                Tech Pack Architect
                            </span>
                        </div>
                    </Link>

                    {/* Nav Links */}
                    {user && (
                        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
                            <Link
                                href="/dashboard"
                                className="text-slate-300 hover:text-white transition flex items-center space-x-1.5"
                            >
                                <Layers className="w-4 h-4 text-indigo-400" />
                                <span>Dashboard</span>
                            </Link>
                            <Link
                                href="/tech-packs/create"
                                className="text-slate-300 hover:text-white transition flex items-center space-x-1.5"
                            >
                                <PlusCircle className="w-4 h-4 text-purple-400" />
                                <span>New Tech Pack</span>
                            </Link>
                            <Link
                                href="/wallet"
                                className="text-slate-300 hover:text-white transition flex items-center space-x-1.5"
                            >
                                <Wallet className="w-4 h-4 text-emerald-400" />
                                <span>Wallet & Billing</span>
                            </Link>
                        </nav>
                    )}

                    {/* Right Action Bar */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                {/* Wallet Balance Pill */}
                                <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1.5 pl-3 space-x-3 shadow-inner">
                                    <div className="flex items-center space-x-1.5">
                                        <Wallet className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs text-slate-400 font-medium">Balance:</span>
                                        <span className="text-sm font-black text-emerald-400">
                                            €{user.wallet_balance.toFixed(2)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsTopUpOpen(true)}
                                        className="py-1.5 px-3 text-xs font-bold text-white rounded-lg bg-indigo-600 hover:bg-indigo-500 transition shadow-md shadow-indigo-600/20 flex items-center space-x-1"
                                    >
                                        <PlusCircle className="w-3.5 h-3.5" />
                                        <span>Top Up</span>
                                    </button>
                                </div>

                                {/* Logout */}
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-900 rounded-xl transition"
                                    title="Logout"
                                >
                                    <LogOut className="w-5 h-5" />
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition"
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Flash Alerts */}
            {flash?.success && (
                <div className="bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 py-3 px-4 text-center text-xs font-bold">
                    {flash.success}
                </div>
            )}
            {flash?.error && (
                <div className="bg-rose-500/10 border-b border-rose-500/20 text-rose-400 py-3 px-4 text-center text-xs font-bold">
                    {flash.error}
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="font-bold text-slate-400">TAGWEARLY AI • DRAYBOND LIMITED</p>
                        <p className="text-[11px] mt-0.5">Company No. 16021806 • Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, UK</p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link href="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
                        <Link href="/refund" className="hover:text-slate-300 transition">Refund Policy</Link>
                    </div>
                </div>
            </footer>

            {/* Top-Up Modal */}
            <TopUpModal isOpen={isTopUpOpen} onClose={() => setIsTopUpOpen(false)} />
        </div>
    );
}
