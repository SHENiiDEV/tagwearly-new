<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\TechPack;
use App\Models\Transaction;
use App\Services\WalletService;
use App\Services\InvoiceService;
use App\Services\DeepSeekTechPackService;
use App\Services\TechPackPdfService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class TagwearlySystemTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_registration_with_full_details_and_address(): void
    {
        $response = $this->post('/register', [
            'name' => 'Alexander',
            'surname' => 'Vance',
            'email' => 'vance@tagwearly.co.uk',
            'password' => 'password123',
            'phone' => '+44 7911 123456',
            'date_of_birth' => '1992-05-14',
            'address_street' => 'Academy House, 11 Dunraven Place',
            'address_city' => 'Bridgend',
            'address_country' => 'United Kingdom',
            'address_postcode' => 'CF31 1JF',
            'terms_accepted' => true,
        ]);

        $response->assertRedirect('/dashboard');
        $this->assertDatabaseHas('users', [
            'email' => 'vance@tagwearly.co.uk',
            'surname' => 'Vance',
            'phone' => '+44 7911 123456',
            'address_country' => 'United Kingdom',
            'wallet_balance' => 0.00,
        ]);
    }

    public function test_registration_fails_for_excluded_country(): void
    {
        $response = $this->post('/register', [
            'name' => 'John',
            'surname' => 'Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'phone' => '+123456789',
            'date_of_birth' => '1995-01-01',
            'address_street' => 'Street 1',
            'address_city' => 'City',
            'address_country' => 'Russia',
            'address_postcode' => '100000',
            'terms_accepted' => true,
        ]);

        $response->assertSessionHasErrors(['address_country']);
        $this->assertDatabaseMissing('users', ['email' => 'john@example.com']);
    }

    public function test_wallet_top_up_generates_b2b_pdf_invoice(): void
    {
        Storage::fake('public');

        $user = User::factory()->create(['wallet_balance' => 0.00]);
        $this->actingAs($user);

        $walletService = app(WalletService::class);
        $transaction = $walletService->topUp($user, 499.00, 'Pro Outerwear Credit (€499)');

        $this->assertEquals(499.00, $user->fresh()->wallet_balance);
        $this->assertEquals('completed', $transaction->status);
        $this->assertNotNull($transaction->invoice_path);
        Storage::disk('public')->assertExists($transaction->invoice_path);
    }

    public function test_deepseek_tech_pack_generation_and_pdf_export(): void
    {
        Storage::fake('public');

        $user = User::factory()->create(['wallet_balance' => 1000.00]);
        $this->actingAs($user);

        $response = $this->post('/tech-packs', [
            'title' => 'Oversized Zip Hoodie',
            'garment_type' => 'Zip Hoodie',
            'tier' => 'pro',
            'brief_text' => 'Oversized zip hoodie. Fabric — French Terry, 450gsm, 100% cotton. Metallic YKK zipper.',
        ]);

        $techPack = TechPack::first();
        $response->assertRedirect('/tech-packs/' . $techPack->id);

        // Verify balance deduction (€1000 - €699 = €301)
        $this->assertEquals(301.00, $user->fresh()->wallet_balance);

        // Verify database state & JSON structure
        $this->assertNotNull($techPack->json_data);
        $this->assertArrayHasKey('bill_of_materials', $techPack->json_data);
        $this->assertArrayHasKey('measurements_chart', $techPack->json_data);
        $this->assertArrayHasKey('construction_details', $techPack->json_data);
        $this->assertArrayHasKey('pantone_colors', $techPack->json_data);

        // Verify PDF file existence
        $this->assertNotNull($techPack->pdf_path);
        Storage::disk('public')->assertExists($techPack->pdf_path);
    }

    public function test_legal_pages_load_successfully(): void
    {
        $this->get('/terms')->assertStatus(200);
        $this->get('/privacy')->assertStatus(200);
        $this->get('/refund')->assertStatus(200);
    }
}
