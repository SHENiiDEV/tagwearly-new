import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export default function OfflineBanner() {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    const [showRestored, setShowRestored] = useState(false);

    useEffect(() => {
        const handleOffline = () => {
            setIsOffline(true);
            setShowRestored(false);
        };

        const handleOnline = () => {
            setIsOffline(false);
            setShowRestored(true);
            const timer = setTimeout(() => setShowRestored(false), 4000);
            return () => clearTimeout(timer);
        };

        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);

        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, []);

    if (isOffline) {
        return (
            <div className="fixed top-0 inset-x-0 z-[100] bg-rose-600 text-white px-4 py-2.5 text-xs font-bold shadow-xl flex items-center justify-center space-x-2 text-center animate-in slide-in-from-top duration-200">
                <WifiOff className="w-4 h-4 shrink-0 animate-pulse" />
                <span>Internet Connection Lost — Operating in Offline Mode. Actions will sync when reconnected.</span>
            </div>
        );
    }

    if (showRestored) {
        return (
            <div className="fixed top-0 inset-x-0 z-[100] bg-emerald-600 text-white px-4 py-2.5 text-xs font-bold shadow-xl flex items-center justify-center space-x-2 text-center animate-in slide-in-from-top fade-out duration-300">
                <Wifi className="w-4 h-4 shrink-0" />
                <span>Connection Restored — Tagwearly AI is online.</span>
            </div>
        );
    }

    return null;
}
