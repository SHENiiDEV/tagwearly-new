import React, { useState, useEffect } from 'react';
import { Sparkles, Cpu, Layers, Palette, FileText, CheckCircle2 } from 'lucide-react';

export default function MagicUiGenerator({ isGenerating, garmentTitle, tier }) {
    if (!isGenerating) return null;

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { title: 'Initializing Tagwearly AI Fashion Engine...', icon: Cpu },
        { title: 'Calculating Sizing Matrix & cm Tolerances (S, M, L, XL)...', icon: Layers },
        { title: 'Matching Pantone TCX / TPG Color Swatches...', icon: Palette },
        { title: 'Structuring Bill of Materials (BOM) & Hardware Specs...', icon: FileText },
        { title: 'Compiling Factory Production Multi-Page PDF...', icon: CheckCircle2 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
        }, 1500);
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
            <div className="relative w-full max-w-xl p-8 overflow-hidden text-center border border-indigo-500/30 rounded-3xl bg-slate-900/90 shadow-2xl shadow-indigo-500/20">
                {/* Scanning line animation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-scanline" />

                <div className="relative z-10 space-y-6">
                    {/* Glowing Icon */}
                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 shadow-inner">
                        <Sparkles className="w-10 h-10 animate-pulse" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Generating Tech Pack</h2>
                        <p className="text-sm font-medium text-slate-400 mt-1">
                            {garmentTitle} • <span className="text-indigo-400 uppercase">{tier} SPEC</span>
                        </p>
                    </div>

                    {/* Steps list */}
                    <div className="space-y-3 text-left bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                        {steps.map((step, idx) => {
                            const StepIcon = step.icon;
                            const isActive = idx === currentStep;
                            const isDone = idx < currentStep;

                            return (
                                <div
                                    key={idx}
                                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
                                        isActive
                                            ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 shadow-md'
                                            : isDone
                                            ? 'text-emerald-400 opacity-80'
                                            : 'text-slate-500 opacity-40'
                                    }`}
                                >
                                    <StepIcon className={`w-5 h-5 ${isActive ? 'animate-bounce' : ''}`} />
                                    <span className="text-xs font-semibold">{step.title}</span>
                                    {isDone && <CheckCircle2 className="w-4 h-4 ml-auto text-emerald-400" />}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-center space-x-2 text-xs font-medium text-slate-400">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Factory Engine Processing • Proprietary AI Active</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
