#!/bin/bash
echo "🔍 Verifying build configuration..."

# Check files exist
echo ""
echo "✓ Checking configuration files..."
[ -f "nitro.config.ts" ] && echo "  ✓ nitro.config.ts" || echo "  ✗ nitro.config.ts MISSING"
[ -f "vite.config.ts" ] && echo "  ✓ vite.config.ts" || echo "  ✗ vite.config.ts MISSING"
[ -f "vercel.json" ] && echo "  ✓ vercel.json" || echo "  ✗ vercel.json MISSING"
[ -f "src/server.ts" ] && echo "  ✓ src/server.ts" || echo "  ✗ src/server.ts MISSING"

# Check build output
echo ""
echo "✓ Checking build output..."
[ -d ".vercel/output" ] && echo "  ✓ .vercel/output/" || echo "  ✗ .vercel/output/ MISSING - Run npm run build"
[ -f ".vercel/output/config.json" ] && echo "  ✓ config.json" || echo "  ✗ config.json MISSING"
[ -f ".vercel/output/nitro.json" ] && echo "  ✓ nitro.json" || echo "  ✗ nitro.json MISSING"
[ -d ".vercel/output/static" ] && echo "  ✓ static/" || echo "  ✗ static/ MISSING"
[ -d ".vercel/output/functions/__server.func" ] && echo "  ✓ functions/__server.func/" || echo "  ✗ functions/__server.func/ MISSING"

# Check Nitro preset
echo ""
echo "✓ Checking Nitro configuration..."
grep -q 'preset.*vercel' nitro.config.ts && echo "  ✓ Vercel preset enabled" || echo "  ✗ Vercel preset not found"

# Check runtime config
if [ -f ".vercel/output/functions/__server.func/.vc-config.json" ]; then
    echo ""
    echo "✓ Checking runtime configuration..."
    grep -q "nodejs22.x" .vercel/output/functions/__server.func/.vc-config.json && echo "  ✓ Runtime: nodejs22.x" || echo "  ⚠ Runtime mismatch"
fi

# Check static assets
echo ""
echo "✓ Checking static assets..."
if [ -d ".vercel/output/static/assets" ]; then
    ASSET_COUNT=$(find .vercel/output/static/assets -type f | wc -l)
    echo "  ✓ Static assets: $ASSET_COUNT files"
else
    echo "  ✗ No static assets found"
fi

# Check server function size
echo ""
echo "✓ Checking serverless function..."
if [ -f ".vercel/output/functions/__server.func/index.mjs" ]; then
    FUNC_SIZE=$(wc -c < .vercel/output/functions/__server.func/index.mjs)
    echo "  ✓ Function entry point: $(numfmt --to=iec-i --suffix=B $FUNC_SIZE)"
else
    echo "  ✗ Function entry point missing"
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Verification complete!"
echo ""
echo "Next steps:"
echo "  1. If all checks pass, deploy with:"
echo "     vercel deploy --prod --prebuilt"
echo ""
echo "  2. If checks fail, rebuild:"
echo "     npm run build"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
