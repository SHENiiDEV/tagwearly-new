import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Mail, Building2, ShieldCheck, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact({ company }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout>
            <div className="space-y-12 py-6 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
                        <Clock className="w-4 h-4" />
                        <span>SLA Guarantee: &lt; 4 Working Hours Response</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Contact Tagwearly AI Trade Desk
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                        Have a question regarding B2B wallet billing, factory specifications, or custom enterprise supply contracts? Our trade department is ready to assist.
                    </p>
                </div>

                {/* Flash Success Notification */}
                {flash?.success && (
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-3 shadow-lg">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <span>{flash.success}</span>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Form Column */}
                    <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
                        <div className="space-y-1">
                            <h2 className="text-xl font-black text-white flex items-center space-x-2">
                                <MessageSquare className="w-5 h-5 text-indigo-400" />
                                <span>Support Ticket Form</span>
                            </h2>
                            <p className="text-xs text-slate-400">Fill in the details below to submit a direct ticket to our trade desk.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="e.g. Alexander Vance"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                                />
                                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Corporate Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="name@yourbrand.com"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                                />
                                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Inquiry Subject
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    placeholder="e.g. Wallet Top-Up / Custom Outerwear Spec Request"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                                />
                                {errors.subject && <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Message / Specification Details
                                </label>
                                <textarea
                                    required
                                    rows="5"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Describe your inquiry or collection requirements in detail..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                                />
                                {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full py-3.5 px-6 font-black text-white text-xs rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 shadow-xl shadow-indigo-500/25 transition disabled:opacity-50 flex items-center justify-center space-x-2"
                            >
                                <Send className="w-4 h-4" />
                                <span>Submit Support Ticket</span>
                            </button>
                        </form>
                    </div>

                    {/* Corporate Merchant Details Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
                            <div className="flex items-center space-x-3 text-white font-extrabold text-sm border-b border-slate-800 pb-3">
                                <Building2 className="w-5 h-5 text-indigo-400" />
                                <span>Corporate Entity Details</span>
                            </div>

                            <div className="space-y-3 text-xs text-slate-300">
                                <div>
                                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Company Name</span>
                                    <strong className="text-white">{company?.name || 'INCHWARD LIMITED'}</strong>
                                </div>

                                <div>
                                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Registration Number</span>
                                    <strong className="text-white">Co. No. {company?.company_number || '16021412'} (England & Wales)</strong>
                                </div>

                                <div>
                                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Registered Address</span>
                                    <span className="text-slate-300 leading-relaxed block mt-0.5">
                                        {company?.address || 'Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, CF31 1JF, United Kingdom'}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Official Support Email</span>
                                    <a href={`mailto:${company?.email || 'info@tagwearly.co.uk'}`} className="text-indigo-400 font-bold hover:underline">
                                        {company?.email || 'info@tagwearly.co.uk'}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl bg-slate-900 border border-emerald-500/30 space-y-3 shadow-xl">
                            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
                                <ShieldCheck className="w-4 h-4" />
                                <span>4-Hour Trade SLA Guarantee</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                All logged support tickets are routed directly to our dedicated B2B client success desk. Guaranteed response within &lt; 4 business hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
