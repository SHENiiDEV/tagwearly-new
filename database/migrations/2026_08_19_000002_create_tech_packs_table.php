<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tech_packs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->string('garment_type');
            $table->enum('tier', ['starter', 'pro', 'collection'])->default('pro');
            $table->decimal('price', 10, 2);
            $table->text('brief_text');
            $table->json('json_data')->nullable();
            $table->string('pdf_path')->nullable();
            $table->enum('status', ['draft', 'processing', 'completed'])->default('completed');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tech_packs');
    }
};
