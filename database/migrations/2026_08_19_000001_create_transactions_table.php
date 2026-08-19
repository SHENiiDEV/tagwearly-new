<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('reference_code')->unique();
            $table->enum('type', ['top_up', 'deduction']);
            $table->decimal('amount', 10, 2);
            $table->string('service_name');
            $table->enum('status', ['completed', 'pending', 'failed'])->default('completed');
            $table->string('invoice_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
