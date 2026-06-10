# Vercel Dashboard Settings

## Project Information

- **Project Name:** clock
- **Project ID:** `prj_owcKG7tpv8yzHdACz7bElUOwTLli`
- **Team ID:** `team_PpwGPSLyPfmRspwxIVX0pZJl`
- **Production URL:** https://clock-mu-henna.vercel.app

## Required Settings in Vercel Dashboard

### 1. General Settings

Navigate to: **Settings → General**

- **Project Name:** clock
- **Framework Preset:** `Other` (NOT Next.js, NOT Vite)
- **Root Directory:** `.` (leave blank or set to root)
- **Node.js Version:** `22.x` (automatically detected from build)

### 2. Build & Development Settings

Navigate to: **Settings → Build & Development Settings**

```
Framework Preset:        Other
Build Command:          npm run build
Output Directory:       (leave blank - Nitro handles this)
Install Command:        npm install
Development Command:    npm run dev
```

**Important Notes:**
- ✅ Leave Output Directory **BLANK** - Nitro automatically uses `.vercel/output/`
- ✅ Framework must be set to "Other" - NOT "Vite" or "TanStack Start"
- ✅ Build Command must be exactly `npm run build`
- ✅ Do NOT add custom output directory overrides

### 3. Environment Variables

Navigate to: **Settings → Environment Variables**

**Currently:** No environment variables required for basic functionality

**If you need to add API keys or secrets:**
```
Production:
  KEY_NAME=value

Preview:
  KEY_NAME=preview_value

Development:
  KEY_NAME=dev_value
```

### 4. Git Settings

Navigate to: **Settings → Git**

- **Production Branch:** `main` (or your default branch)
- **Automatically Deploy:** ✅ Enabled
- **Deploy Preview Branches:** ✅ Enabled (recommended)
- **Deploy Branches:** All branches (or specific patterns)

### 5. Functions Settings

Navigate to: **Settings → Functions**

**Automatically Configured by Nitro:**
- Runtime: `nodejs22.x`
- Region: Auto (or select specific regions)
- Memory: 1024 MB (default)
- Max Duration: 10s (default, increase if needed)

### 6. Domains

Navigate to: **Settings → Domains**

**Current Domains:**
- `clock-mu-henna.vercel.app` (auto-generated)

**To add custom domain:**
1. Click "Add Domain"
2. Enter your domain (e.g., `yourdomain.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate provisioning

## Deployment Configuration

### Automatic Deployments (Git Integration)

**Production Deployments:**
- Triggered by: Push to `main` branch
- URL: https://clock-mu-henna.vercel.app

**Preview Deployments:**
- Triggered by: Push to any branch except `main`
- URL: `clock-{branch-name}-{team}.vercel.app`

**Pull Request Deployments:**
- Triggered by: Opening/updating PRs
- Comment posted in PR with preview URL

### Manual Deployments (CLI)

**Deploy to Production:**
```bash
npm run build
vercel deploy --prod --prebuilt
```

**Deploy to Preview:**
```bash
npm run build
vercel deploy --prebuilt
```

## Troubleshooting Dashboard Issues

### Issue: Build Fails with "Output directory not found"

**Cause:** Framework preset set incorrectly or custom output directory specified

**Fix:**
1. Go to Settings → Build & Development Settings
2. Set Framework Preset to "Other"
3. Clear/remove any custom Output Directory setting
4. Save changes
5. Trigger redeploy

### Issue: "Function not found" or 404 errors

**Cause:** Build completed but function wasn't generated

**Fix:**
1. Check Deployment logs for build errors
2. Verify `nitro.config.ts` has `preset: "vercel"`
3. Rebuild locally: `npm run build`
4. Check `.vercel/output/functions/__server.func/` exists
5. Redeploy with: `vercel deploy --prod --prebuilt --force`

### Issue: "500 Internal Server Error"

**Cause:** Runtime error in server function

**Fix:**
1. Check Function logs in Vercel dashboard
2. Navigate to Deployment → Functions → View Logs
3. Identify the error
4. Fix in code and redeploy

### Issue: Old deployment still showing

**Cause:** Deployment promoted but not serving new content

**Fix:**
1. Go to Deployments tab
2. Find latest successful deployment
3. Click "..." menu → "Promote to Production"
4. Clear browser cache (Cmd+Shift+R on Mac)

## Performance & Monitoring

### View Deployment Logs

1. Go to Deployments tab
2. Click on a deployment
3. View tabs:
   - **Building:** Build output and logs
   - **Functions:** Serverless function logs
   - **Static:** Static asset serving

### View Function Logs

1. Navigate to specific deployment
2. Click "Functions" tab
3. Select `__server` function
4. View real-time logs and errors

### Analytics

Navigate to: **Analytics** (if enabled)
- Pageviews
- Unique visitors
- Top pages
- Web Vitals scores

## Security Settings

Navigate to: **Settings → Security**

**Deployment Protection:**
- Production: Public (or add password/SSO)
- Preview: Public (or restrict access)

**Secure Compute:**
- Enable for sensitive operations (optional)

## Advanced Configuration

### Custom Build Environment

If you need custom build behavior, create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": null,
  "outputDirectory": null
}
```

**Note:** Current `vercel.json` is minimal - Nitro handles everything.

### Edge Functions

Not currently used. Nitro generates Node.js serverless functions.

To enable Edge Functions (experimental):
- Requires Nitro Edge preset
- Update `nitro.config.ts` to `preset: "vercel-edge"`

## Quick Actions

### Force Redeploy
```bash
vercel deploy --prod --prebuilt --force
```

### Rollback Deployment
1. Deployments → Find working deployment → Promote to Production

### Clear Build Cache
1. Settings → Build & Development Settings
2. Scroll to "Build Cache"
3. Click "Clear Build Cache"
4. Trigger new deployment

### View Live Logs
```bash
vercel logs [deployment-url] --follow
```

## Support Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Nitro Documentation:** https://nitro.unjs.io
- **TanStack Start Docs:** https://tanstack.com/start
- **Project Dashboard:** https://vercel.com/team_PpwGPSLyPfmRspwxIVX0pZJl/clock
