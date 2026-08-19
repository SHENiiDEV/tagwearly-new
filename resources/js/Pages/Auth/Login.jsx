import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Sparkles, ArrowRight, Lock } from 'lucide-react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <AppLayout>
            <div className="max-w-md mx-auto py-8">
                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                    <div className="text-center space-y-2">
                        <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-black text-white">Sign In to Tagwearly AI</h1>
                        <p className="text-xs text-slate-400">Access your tech packs & B2B wallet balance</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                placeholder="founder@brand.com"
                                required
                            />
                            {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                placeholder="••••••••"
                                required
                            />
                            {errors.password && <p className="text-xs text-rose-400 mt-1">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3.5 px-6 font-bold text-white rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition disabled:opacity-50 flex items-center justify-center space-x-2"
                        >
                            <span>Sign In</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="text-center pt-4 border-t border-slate-800 text-xs text-slate-400">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-indigo-400 font-bold hover:underline">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
