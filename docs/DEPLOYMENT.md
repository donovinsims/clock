# Vercel Deployment Guide

This project is a **TanStack Start** application with **Nitro** server framework, configured for Vercel deployment.

## ✅ Configuration Status

Your build is **CORRECTLY CONFIGURED** and generating proper Vercel output:

- ✅ Nitro preset: `vercel`
- ✅ Runtime: `nodejs22.x`
- ✅ Output directory: `.vercel/output/`
- ✅ Serverless function: `.vercel/output/functions/__server.func/`
- ✅ Static assets: `.vercel/output/static/`
- ✅ Build command: `npm run build`

## 🏗️ Project Configuration

### Key Files

1. **`vite.config.ts`** - TanStack Start + Nitro plugins
2. **`nitro.config.ts`** - Vercel preset and static serving
3. **`vercel.json`** - Build commands (minimal config)
4. **`src/server.ts`** - Custom server entry point with error handling

### Build Output Structure

```
.vercel/output/
├── config.json          # Vercel routing configuration
├── nitro.json           # Nitro metadata
├── static/              # Static assets (HTML, CSS, JS, images)
│   ├── assets/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
└── functions/
    └── __server.func/   # Node.js 22 serverless function
        ├── index.mjs    # Function entry point
        ├── _libs/       # Dependencies
        ├── _ssr/        # SSR routes
        └── _chunks/     # Code chunks
```

## 🚀 Deployment Commands

### Option 1: Deploy to Production (Recommended)
```bash
npm run build
vercel deploy --prod --prebuilt
```

### Option 2: Deploy to Preview (Testing)
```bash
npm run build
vercel deploy --prebuilt
```

### Option 3: Automatic Deployment via Git
- Push to `main` branch → Auto-deploy to production
- Push to other branches → Auto-deploy to preview

## 🔍 Vercel Project Settings

**Project:** clock
**Project ID:** `prj_owcKG7tpv8yzHdACz7bElUOwTLli`
**Team ID:** `team_PpwGPSLyPfmRspwxIVX0pZJl`

### Required Settings in Vercel Dashboard

1. **Build & Development Settings:**
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `.vercel/output` (leave blank, Nitro handles it)
   - Install Command: `npm install`
   - Node.js Version: `22.x` (automatically set by Nitro)

2. **Environment Variables:**
   - No environment variables required for basic functionality
   - Add any API keys or secrets here if needed

3. **Root Directory:**
   - Leave as `.` (root of repository)

## 📝 Important Notes

### ✅ What's Working

1. **Nitro builds correctly** - Output goes to `.vercel/output/`
2. **No Lovable imports** - Using standard TanStack Start packages
3. **Proper server entry** - Custom `src/server.ts` with error handling
4. **Static assets served** - Public files copied to static directory

### ⚠️ Common Issues & Solutions

#### Issue: "Website not showing / 404 error"

**Causes:**
1. Old deployment cached
2. Build output not deployed
3. Vercel reading wrong output directory

**Solutions:**
```bash
# 1. Clear local caches and rebuild
rm -rf .nitro .tanstack .output node_modules/.vite
npm run build

# 2. Check build output exists
ls -la .vercel/output/functions/__server.func/

# 3. Deploy with prebuilt flag
vercel deploy --prod --prebuilt --force

# 4. If still not working, redeploy from dashboard
# Go to Vercel dashboard → Deployments → Redeploy (use existing build cache OFF)
```

#### Issue: "500 Internal Server Error"

**Causes:**
1. Missing dependencies
2. Server-side code errors
3. Runtime environment mismatch

**Solutions:**
```bash
# Check build logs
npm run build 2>&1 | tee build.log

# Verify function output
cat .vercel/output/functions/__server.func/.vc-config.json

# Test locally
npx vite preview
```

#### Issue: "Build succeeds but page is blank"

**Causes:**
1. Client-side JavaScript errors
2. Missing static assets
3. Routing configuration issues

**Solutions:**
```bash
# Check static assets were generated
ls -la .vercel/output/static/assets/

# Verify routing config
cat .vercel/output/config.json

# Check browser console for errors (F12)
```

## 🧪 Testing Locally

### Preview the Build
```bash
# Build first
npm run build

# Preview using Vite
npx vite preview

# OR preview using Nitro's server
cd .vercel/output
npx srvx --static static ./functions/__server.func/index.mjs
```

### Development Mode
```bash
npm run dev
```

## 🔄 Redeploying

### After Code Changes
```bash
# 1. Build locally
npm run build

# 2. Deploy
vercel deploy --prod --prebuilt
```

### Force Redeploy (Same Code)
```bash
# Rebuild without cache
npm run build

# Force deploy
vercel deploy --prod --prebuilt --force
```

### Rollback to Previous Deployment
1. Go to Vercel Dashboard
2. Navigate to Deployments
3. Find working deployment
4. Click "Promote to Production"

## 🌐 Live URLs

- **Production:** https://clockout.us
- **Dashboard:** https://vercel.com/team_PpwGPSLyPfmRspwxIVX0pZJl/clock

## 🐛 Debugging Checklist

If your website isn't showing:

- [ ] Run `npm run build` successfully
- [ ] Check `.vercel/output/` directory exists
- [ ] Check `.vercel/output/functions/__server.func/index.mjs` exists
- [ ] Check `.vercel/output/static/assets/` has CSS/JS files
- [ ] Verify `vercel.json` build command is `npm run build`
- [ ] Ensure `nitro.config.ts` has `preset: "vercel"`
- [ ] Check Node.js version: `node --version` (should be ≥20)
- [ ] Deploy with: `vercel deploy --prod --prebuilt`
- [ ] Check Vercel deployment logs for errors
- [ ] Verify Vercel project settings (Framework: Other, Node: 22.x)

## 📊 Build Verification

Run this script to verify your build is correct:

```bash
#!/bin/bash
echo "🔍 Verifying build configuration..."

# Check files exist
echo "✓ Checking configuration files..."
[ -f "nitro.config.ts" ] && echo "  ✓ nitro.config.ts" || echo "  ✗ nitro.config.ts MISSING"
[ -f "vite.config.ts" ] && echo "  ✓ vite.config.ts" || echo "  ✗ vite.config.ts MISSING"
[ -f "vercel.json" ] && echo "  ✓ vercel.json" || echo "  ✗ vercel.json MISSING"

# Check build output
echo ""
echo "✓ Checking build output..."
[ -d ".vercel/output" ] && echo "  ✓ .vercel/output/" || echo "  ✗ .vercel/output/ MISSING - Run npm run build"
[ -f ".vercel/output/config.json" ] && echo "  ✓ config.json" || echo "  ✗ config.json MISSING"
[ -f ".vercel/output/nitro.json" ] && echo "  ✓ nitro.json" || echo "  ✗ nitro.json MISSING"
[ -d ".vercel/output/static" ] && echo "  ✓ static/" || echo "  ✗ static/ MISSING"
[ -d ".vercel/output/functions/__server.func" ] && echo "  ✓ functions/__server.func/" || echo "  ✗ functions/__server.func/ MISSING"

# Check runtime config
echo ""
echo "✓ Checking runtime configuration..."
cat .vercel/output/functions/__server.func/.vc-config.json | grep -q "nodejs22.x" && echo "  ✓ Runtime: nodejs22.x" || echo "  ✗ Runtime mismatch"

echo ""
echo "✅ Verification complete!"
```

Save this as `verify-build.sh`, make it executable (`chmod +x verify-build.sh`), and run it (`./verify-build.sh`).
