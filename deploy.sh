#!/bin/bash
set -e

echo "🚀 Starting Production Deployment for Tagwearly AI..."
echo "=========================================================="

echo "📦 1/7 Checking repository status..."
git pull origin main || echo "⚠️ Git pull skipped or requires token. Continuing build..."

echo "📦 2/7 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader

echo "📦 3/7 Running database migrations..."
php artisan migrate --force

echo "📦 4/7 Building frontend production assets..."
npm install
npm run build

echo "📦 5/7 Optimizing Laravel caches..."
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear

echo "📦 6/7 Setting permissions for storage and SQLite database..."
chown -R www-data:www-data /var/www/customAI/tagwearly 2>/dev/null || true
chmod -R 775 /var/www/customAI/tagwearly/storage 2>/dev/null || true
chmod -R 775 /var/www/customAI/tagwearly/bootstrap/cache 2>/dev/null || true
chmod -R 775 /var/www/customAI/tagwearly/database 2>/dev/null || true
chmod 664 /var/www/customAI/tagwearly/database/database.sqlite 2>/dev/null || true

echo "✅ 7/7 Deployment Completed Successfully for Tagwearly AI!"
