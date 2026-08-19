import React from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { ShieldAlert, AlertTriangle, Lock, Wrench, ArrowLeft, Sparkles, Home } from 'lucide-react';

export default function Error({ status }) {
    const errorConfigs = {
        404: {
            title: '404 — Lost in the Studio',
            tagline: 'Page Not Found',
            description: 'The requested fashion tech pack page was moved, archived, or never created.',
            icon: AlertTriangle,
            color: 'text-amber-400',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/20',
        },
        500: {
            title: '500 — Temporary Technical Rest',
            tagline: 'Internal Server Error',
            description: 'Our AI fashion compilation engine encountered a temporary server error. Our engineering team has been notified.',
            icon: ShieldAlert,
            color: 'text-rose-400',
            bgColor: 'bg-rose-500/10',
            borderColor: 'border-rose-500/20',
        },
        403: {
            title: '403 — Restricted Brand Access',
            tagline: 'Access Forbidden',
            description: 'You do not have administrative brand clearance to access this restricted specification area.',
            icon: Lock,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20',
        },
        503: {
            title: '503 — Scheduled System Care',
            tagline: 'Platform Maintenance',
            description: 'Tagwearly AI is currently undergoing scheduled infrastructure updates. We will be back online shortly.',
            icon: Wrench,
            color: 'text-indigo-400',
            bgColor: 'bg-indigo-500/10',
            borderColor: 'border-indigo-500/20',
        },
    };

    const config = errorConfigs[status] || errorConfigs[500];
    const IconComponent = config.icon;

    return (
        <AppLayout>
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
                <div className={`p-5 rounded-3xl ${config.bgColor} ${config.color} border ${config.borderColor} shadow-2xl animate-bounce`}>
                    <IconComponent className="w-12 h-12" />
                </div>

                <div className="space-y-2 max-w-lg">
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                        {config.tagline}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{config.title}</h1>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{config.description}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link
                        href="/dashboard"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 transition flex items-center space-x-2"
                    >
                        <Home className="w-4 h-4" />
                        <span>Return to Dashboard</span>
                    </Link>
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 transition"
                    >
                        Go to Home Page
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
