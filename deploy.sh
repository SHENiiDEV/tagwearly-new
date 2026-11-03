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

DEPLOY_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "📦 6/7 Setting permissions for storage and SQLite database in $DEPLOY_PATH..."
chown -R www-data:www-data "$DEPLOY_PATH"
chmod -R 775 "$DEPLOY_PATH/storage"
chmod -R 775 "$DEPLOY_PATH/bootstrap/cache"
chmod -R 775 "$DEPLOY_PATH/database"
if [ -f "$DEPLOY_PATH/database/database.sqlite" ]; then
    chmod 664 "$DEPLOY_PATH/database/database.sqlite"
fi

echo "✅ 7/7 Deployment Completed Successfully for Tagwearly AI!"
