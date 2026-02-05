#!/bin/bash
set -e

echo "🐐 Deploying Goat Guild website..."

# Build the site
echo "📦 Building..."
npm run build

# Deploy to S3
echo "🚀 Uploading to S3..."
aws s3 sync ./dist s3://goatguild.gg \
  --delete \
  --cache-control "max-age=31536000" \
  --exclude "*.html" \
  --exclude "*.json"

# HTML files should not be cached as long
aws s3 sync ./dist s3://goatguild.gg \
  --delete \
  --cache-control "max-age=3600" \
  --include "*.html" \
  --include "*.json"

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id E24ZXM12LE6HIT \
  --paths "/*"

echo "✅ Deployment complete!"
echo "🌐 Visit: https://goatguild.gg"
