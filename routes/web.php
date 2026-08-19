<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LegalController;
use App\Http\Controllers\TechPackController;
use App\Http\Controllers\WalletController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Landing Page (Root & /landing)
Route::get('/', function () {
    return Inertia::render('Landing');
})->name('home');

Route::get('/landing', function () {
    return Inertia::render('Landing');
})->name('landing');

// Public Legal Pages
Route::get('/terms', [LegalController::class, 'terms'])->name('terms');
Route::get('/privacy', [LegalController::class, 'privacy'])->name('privacy');
Route::get('/refund', [LegalController::class, 'refund'])->name('refund');

// Guest Authentication Routes
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

// Authenticated Routes
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Dashboard & Tech Packs
    Route::get('/dashboard', [TechPackController::class, 'index'])->name('dashboard');
    Route::get('/tech-packs/create', [TechPackController::class, 'create'])->name('tech-packs.create');
    Route::post('/tech-packs', [TechPackController::class, 'store'])->name('tech-packs.store');
    Route::get('/tech-packs/{techPack}', [TechPackController::class, 'show'])->name('tech-packs.show');
    Route::get('/tech-packs/{techPack}/pdf', [TechPackController::class, 'exportPdf'])->name('tech-packs.pdf');

    // Wallet & Billing
    Route::get('/wallet', [WalletController::class, 'index'])->name('wallet.index');
    Route::post('/wallet/top-up', [WalletController::class, 'topUp'])->name('wallet.top-up');
    Route::get('/wallet/invoice/{transaction}', [WalletController::class, 'downloadInvoice'])->name('wallet.invoice');
});
