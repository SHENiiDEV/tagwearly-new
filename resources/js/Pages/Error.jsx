import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { ShieldAlert, AlertTriangle, Lock, Wrench, ArrowLeft, Sparkles, Home } from 'lucide-react';

export default function Error({ status }) {
    const errorConfigs = {
        404: {
            code: '404',
            title: 'Spec Page Not Found',
            badge: 'Studio Spec Lost',
            description: 'The requested fashion tech pack page was moved, archived, or never created in our archives.',
            gradient: 'from-indigo-400 via-purple-400 to-pink-400',
            badgeColor: 'text-amber-400 border-amber-500/40',
        },
        500: {
            code: '500',
            title: 'Internal Server Error',
            badge: 'Server Glitch',
            description: 'Our AI fashion compilation engine encountered a temporary server error. Our engineering team has been notified.',
            gradient: 'from-rose-400 via-purple-400 to-indigo-400',
            badgeColor: 'text-rose-400 border-rose-500/40',
        },
        403: {
            code: '403',
            title: 'Access Forbidden',
            badge: 'Restricted Access',
            description: 'You do not have administrative brand clearance to access this restricted specification area.',
            gradient: 'from-purple-400 via-pink-400 to-rose-400',
            badgeColor: 'text-purple-400 border-purple-500/40',
        },
        503: {
            code: '503',
            title: 'Platform Maintenance',
            badge: 'System Care',
            description: 'Tagwearly AI is currently undergoing scheduled infrastructure updates. We will be back online shortly.',
            gradient: 'from-indigo-400 via-purple-400 to-pink-400',
            badgeColor: 'text-indigo-400 border-indigo-500/40',
        },
    };

    const config = errorConfigs[status] || errorConfigs[500];

    return (
        <AppLayout>
            <div className="min-h-[75vh] flex flex-col items-center justify-center text-center p-6 space-y-6 relative overflow-hidden">
                {/* Ambient Glow Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] pointer-events-none rounded-full" />

                {/* Giant Glow Number */}
                <div className="relative">
                    <div className={`text-8xl sm:text-9xl font-black bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent tracking-tighter drop-shadow-2xl`}>
                        {config.code}
                    </div>
                    <span className={`absolute -top-3 -right-6 px-3 py-1 rounded-full bg-slate-900 border ${config.badgeColor} text-[10px] font-black uppercase tracking-wider shadow-xl backdrop-blur-md`}>
                        {config.badge}
                    </span>
                </div>

                <div className="space-y-3 max-w-lg mx-auto">
                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{config.title}</h1>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{config.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-black text-xs shadow-xl shadow-indigo-500/25 transition transform hover:-translate-y-0.5 flex items-center space-x-2"
                    >
                        <Home className="w-4 h-4" />
                        <span>Return to Home Page</span>
                    </Link>
                    <Link
                        href="/dashboard"
                        className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs transition"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
