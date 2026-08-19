<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TechPack extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'garment_type',
        'tier',
        'price',
        'brief_text',
        'json_data',
        'pdf_path',
        'status',
    ];

    protected $casts = [
        'price' => 'float',
        'json_data' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
