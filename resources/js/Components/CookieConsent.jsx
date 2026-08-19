import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('tagwearly_cookie_consent');
        if (!consent) {
            // Show after short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('tagwearly_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('tagwearly_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-full p-6 rounded-3xl bg-slate-900/90 border border-indigo-500/30 backdrop-blur-xl shadow-2xl shadow-indigo-500/20 text-slate-100 space-y-4 animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                    <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-white">We Value Your Privacy & IP</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        Tagwearly AI uses essential cookies to authenticate your B2B sessions and store user wallet preferences. We never track or sell your garment design concepts.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                    type="button"
                    onClick={declineCookies}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition"
                >
                    Essential Only
                </button>
                <button
                    type="button"
                    onClick={acceptCookies}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition flex items-center space-x-1.5"
                >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Accept All Cookies</span>
                </button>
            </div>
        </div>
    );
}
