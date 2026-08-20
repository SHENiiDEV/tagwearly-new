<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function showRegister()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(Request $request)
    {
        $excludedCountries = [
            'Sudan',
            'Dem. Rep. of the Congo',
            'Democratic Republic of the Congo',
            'Iran',
            'Mali',
            'Myanmar',
            'Myanmar (Burma)',
            'North Korea',
            'South Sudan',
            'Syria',
            'Yemen',
            'Afghanistan',
            'Belarus',
            'Central African Republic',
            'Cuba',
            'Haiti',
            'Iraq',
            'Russia',
            'Somalia',
            'Venezuela',
            'Zimbabwe',
        ];

        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'phone' => 'required|string|max:50',
            'date_of_birth' => 'required|date',
            'address_street' => 'required|string|max:255',
            'address_city' => 'required|string|max:255',
            'address_country' => ['required', 'string', Rule::notIn($excludedCountries)],
            'address_postcode' => 'required|string|max:30',
            'terms_accepted' => 'accepted',
        ], [
            'terms_accepted.accepted' => 'You must agree to the Terms & Conditions and Privacy Policy.',
            'address_country.not_in' => 'Selected country is currently unavailable for service registration.',
        ]);

        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'date_of_birth' => $request->date_of_birth,
            'address_street' => $request->address_street,
            'address_city' => $request->address_city,
            'address_country' => $request->address_country,
            'address_postcode' => $request->address_postcode,
            'wallet_balance' => 0.00,
        ]);

        try {
            Mail::to($user->email)->send(new \App\Mail\WelcomeUserMail($user));
        } catch (\Throwable $e) {
            logger()->error('Failed sending WelcomeUserMail: ' . $e->getMessage());
        }

        Auth::login($user);

        return redirect('/dashboard')->with('success', 'Account created successfully! Welcome to Tagwearly AI.');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }
}
