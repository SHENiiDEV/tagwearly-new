import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import TopUpModal from '@/Components/TopUpModal';
import FloatingCurrencyDropdown from '@/Components/FloatingCurrencyDropdown';
import CookieConsent from '@/Components/CookieConsent';
import OfflineBanner from '@/Components/OfflineBanner';
import { useCurrency } from '@/Components/CurrencyContext';
import { Sparkles, Wallet, PlusCircle, LogOut, Layers, FileText, Menu, X, HelpCircle, Building2, Phone } from 'lucide-react';

export default function AppLayout({ children }) {
    const { auth, flash } = usePage().props;
    const user = auth?.user;
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { formatPrice } = useCurrency();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
            <OfflineBanner />

            <div>
                {/* Header */}
                <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                        {/* Brand Logo ALWAYS points to Home / */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 rounded-xl overflow-hidden border border-indigo-500/30 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
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

                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
                            {user && (
                                <Link
                                    href="/dashboard"
                                    className="text-slate-300 hover:text-white transition flex items-center space-x-1.5"
                                >
                                    <Layers className="w-4 h-4 text-indigo-400" />
                                    <span>Dashboard</span>
                                </Link>
                            )}
                            <Link href="/how-it-works" className="text-slate-300 hover:text-white transition">
                                How It Works
                            </Link>
                            <Link href="/about" className="text-slate-300 hover:text-white transition">
                                About Us
                            </Link>
                            <Link href="/support" className="text-slate-300 hover:text-white transition">
                                Support
                            </Link>
                            <Link href="/contact" className="text-slate-300 hover:text-white transition">
                                Contact
                            </Link>
                            {user && (
                                <>
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
                                        <span>Wallet</span>
                                    </Link>
                                </>
                            )}
                        </nav>

                        {/* Right Action Bar */}
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            {/* Floating Currency Selector */}
                            <FloatingCurrencyDropdown />

                            {user ? (
                                <>
                                    {/* Desktop Wallet Balance Pill */}
                                    <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1.5 pl-3 space-x-3 shadow-inner">
                                        <div className="flex items-center space-x-1.5">
                                            <Wallet className="w-4 h-4 text-emerald-400" />
                                            <span className="text-xs text-slate-400 font-medium">Balance:</span>
                                            <span className="text-sm font-black text-emerald-400">
                                                {formatPrice(user.wallet_balance)}
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

                                    {/* Desktop Logout */}
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="hidden sm:flex p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-900 rounded-xl transition"
                                        title="Logout"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </Link>
                                </>
                            ) : (
                                <div className="hidden sm:flex items-center space-x-3">
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

                            {/* Mobile Hamburger Toggle Button */}
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2.5 md:hidden rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
                                aria-label="Toggle Menu"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Mobile Right-side Slide-Over Drawer */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        {/* Backdrop Overlay */}
                        <div
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Sliding Panel from Right */}
                        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-50 animate-in slide-in-from-right duration-300">
                            <div className="space-y-6">
                                {/* Drawer Header */}
                                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                    <div className="flex items-center space-x-2">
                                        <img src="/images/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
                                        <span className="font-black text-white text-sm tracking-tight">TAGWEARLY AI</span>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Drawer Nav Links */}
                                <div className="space-y-2 text-xs font-bold">
                                    {user && (
                                        <Link
                                            href="/dashboard"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-950 border border-slate-800 text-white"
                                        >
                                            <Layers className="w-4 h-4 text-indigo-400" />
                                            <span>Dashboard</span>
                                        </Link>
                                    )}
                                    <Link
                                        href="/how-it-works"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200"
                                    >
                                        How It Works
                                    </Link>
                                    <Link
                                        href="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/support"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200"
                                    >
                                        Support & Help
                                    </Link>
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* Drawer Footer Actions */}
                            <div className="pt-4 border-t border-slate-800 space-y-3">
                                {user ? (
                                    <>
                                        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                                            <span className="text-slate-400 font-medium">Balance:</span>
                                            <strong className="text-emerald-400 text-sm font-black">{formatPrice(user.wallet_balance)}</strong>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsTopUpOpen(true);
                                            }}
                                            className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg flex items-center justify-center space-x-2"
                                        >
                                            <PlusCircle className="w-4 h-4" />
                                            <span>Top Up Wallet</span>
                                        </button>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 text-rose-400 text-xs font-bold border border-slate-800 flex items-center justify-center space-x-2"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            <span>Logout</span>
                                        </Link>
                                    </>
                                ) : (
                                    <div className="space-y-2">
                                        <Link
                                            href="/login"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-center py-3 px-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold"
                                        >
                                            Sign In
                                        </Link>
                                        <Link
                                            href="/register"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-center py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-black shadow-lg"
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

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
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
            </div>

            {/* Footer */}
            <footer className="border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <div className="font-extrabold text-white">TAGWEARLY AI</div>
                        <p className="text-slate-400 mt-0.5">INCHWARD LIMITED • Registered in England & Wales No. 16021412</p>
                        <p className="text-[11px] text-slate-500">Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, UK</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
                        <Link href="/how-it-works" className="hover:text-slate-300 transition font-medium">How It Works</Link>
                        <Link href="/about" className="hover:text-slate-300 transition font-medium">About Us</Link>
                        <Link href="/support" className="hover:text-slate-300 transition font-medium">Support</Link>
                        <Link href="/contact" className="hover:text-slate-300 transition font-medium">Contact Us</Link>
                        <Link href="/terms" className="hover:text-slate-300 transition">Terms</Link>
                        <Link href="/privacy" className="hover:text-slate-300 transition">Privacy</Link>
                        <Link href="/refund" className="hover:text-slate-300 transition">Refund</Link>
                    </div>
                </div>
            </footer>

            <TopUpModal isOpen={isTopUpOpen} onClose={() => setIsTopUpOpen(false)} />
            <CookieConsent />
        </div>
    );
}
