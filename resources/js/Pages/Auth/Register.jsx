import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import DatePicker from '@/Components/DatePicker';
import { Sparkles, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Register() {
    const rawCountries = [
        "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
        "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cyprus", "Czech Republic", "Denmark",
        "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
        "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
        "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
        "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
        "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
        "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nauru",
        "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
        "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
        "Romania", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain",
        "Sri Lanka", "Suriname", "Sweden", "Switzerland", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
        "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Vietnam", "Zambia"
    ];

    const excludedList = [
        "Sudan", "Dem. Rep. of the Congo", "Democratic Republic of the Congo", "Iran", "Mali", "Myanmar (Burma)", "Myanmar", "North Korea",
        "South Sudan", "Syria", "Yemen", "Afghanistan", "Belarus", "Central African Republic", "Cuba", "Haiti", "Iraq", "Russia", "Somalia", "Venezuela", "Zimbabwe"
    ];

    const availableCountries = rawCountries.filter((c) => !excludedList.includes(c));

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        date_of_birth: '',
        address_street: '',
        address_city: '',
        address_country: 'United Kingdom',
        address_postcode: '',
        terms_accepted: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <AppLayout>
            <div className="max-w-2xl mx-auto py-6">
                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                    <div className="text-center space-y-2">
                        <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-black text-white">Create B2B Account</h1>
                        <p className="text-xs text-slate-400">Create your Tagwearly AI brand account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name & Surname */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="Alexander"
                                    required
                                />
                                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Surname / Last Name
                                </label>
                                <input
                                    type="text"
                                    value={data.surname}
                                    onChange={(e) => setData('surname', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="Vance"
                                    required
                                />
                                {errors.surname && <p className="text-xs text-rose-400 mt-1">{errors.surname}</p>}
                            </div>
                        </div>

                        {/* Email & Password */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="founder@vancestudios.com"
                                    required
                                />
                                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                                {errors.password && <p className="text-xs text-rose-400 mt-1">{errors.password}</p>}
                            </div>
                        </div>

                        {/* Phone & DOB */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="+44 7911 123456"
                                    required
                                />
                                {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                                    Date of Birth *
                                </label>
                                <DatePicker
                                    value={data.date_of_birth}
                                    onChange={(val) => setData('date_of_birth', val)}
                                    error={errors.date_of_birth}
                                />
                                {errors.date_of_birth && <p className="text-xs text-rose-400 mt-1">{errors.date_of_birth}</p>}
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 pb-2">
                                <MapPin className="w-4 h-4" />
                                <span>B2B Billing Address (4 Sections)</span>
                            </div>

                            {/* Section 1: Street */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-1">
                                    1. Street, House Number, Apartment...
                                </label>
                                <input
                                    type="text"
                                    value={data.address_street}
                                    onChange={(e) => setData('address_street', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="Academy House, 11 Dunraven Place, Suite 4B"
                                    required
                                />
                                {errors.address_street && <p className="text-xs text-rose-400 mt-1">{errors.address_street}</p>}
                            </div>

                            {/* Section 2 & 3: City & Country */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                                        2. City
                                    </label>
                                    <input
                                        type="text"
                                        value={data.address_city}
                                        onChange={(e) => setData('address_city', e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                        placeholder="Bridgend"
                                        required
                                    />
                                    {errors.address_city && <p className="text-xs text-rose-400 mt-1">{errors.address_city}</p>}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                                        3. Country
                                    </label>
                                    <select
                                        value={data.address_country}
                                        onChange={(e) => setData('address_country', e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                        required
                                    >
                                        {availableCountries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.address_country && <p className="text-xs text-rose-400 mt-1">{errors.address_country}</p>}
                                </div>
                            </div>

                            {/* Section 4: Post Code */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-1">
                                    4. Post Code / ZIP
                                </label>
                                <input
                                    type="text"
                                    value={data.address_postcode}
                                    onChange={(e) => setData('address_postcode', e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                                    placeholder="CF31 1JF"
                                    required
                                />
                                {errors.address_postcode && <p className="text-xs text-rose-400 mt-1">{errors.address_postcode}</p>}
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start space-x-3 pt-2">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={data.terms_accepted}
                                onChange={(e) => setData('terms_accepted', e.target.checked)}
                                className="mt-1 w-4 h-4 rounded bg-slate-950 border-slate-700 text-indigo-600 focus:ring-indigo-500"
                                required
                            />
                            <label htmlFor="terms" className="text-xs text-slate-300 leading-relaxed">
                                I agree to the{' '}
                                <Link href="/terms" target="_blank" className="text-indigo-400 font-bold underline hover:text-indigo-300">
                                    Terms & Conditions
                                </Link>{' '}
                                and{' '}
                                <Link href="/privacy" target="_blank" className="text-indigo-400 font-bold underline hover:text-indigo-300">
                                    Privacy Policy
                                </Link>
                                .
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3.5 px-6 font-bold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition disabled:opacity-50 flex items-center justify-center space-x-2"
                        >
                            <span>Create Account</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="text-center pt-4 border-t border-slate-800 text-xs text-slate-400">
                        Already have an account?{' '}
                        <Link href="/login" className="text-indigo-400 font-bold hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
