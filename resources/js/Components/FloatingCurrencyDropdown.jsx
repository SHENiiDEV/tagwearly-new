import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from './CurrencyContext';
import { ChevronDown, Globe } from 'lucide-react';

export default function FloatingCurrencyDropdown() {
    const { currency, changeCurrency, currencies } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentObj = currencies.find((c) => c.code === currency) || currencies[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-extrabold text-slate-200 shadow-md backdrop-blur-md transition"
            >
                <span className="text-sm">{currentObj.flag}</span>
                <span>{currentObj.code}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl z-50 overflow-hidden py-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        Select Currency
                    </div>
                    {currencies.map((c) => (
                        <button
                            key={c.code}
                            type="button"
                            onClick={() => {
                                changeCurrency(c.code);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-bold transition ${
                                currency === c.code
                                    ? 'bg-indigo-500/15 text-indigo-300 font-extrabold'
                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                            <span className="flex items-center space-x-2">
                                <span>{c.flag}</span>
                                <span>{c.code}</span>
                            </span>
                            <span className="text-slate-400 font-mono text-[11px]">{c.symbol}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
