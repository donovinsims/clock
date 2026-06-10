# Deployment Checklist

Use this checklist before deploying to ensure everything is configured correctly.

## Pre-Deployment Checklist

### ✅ Local Build Verification

- [ ] Run `npm install` to ensure dependencies are up to date
- [ ] Run `npm run build` successfully without errors
- [ ] Verify `.vercel/output/` directory was created
- [ ] Verify `.vercel/output/functions/__server.func/index.mjs` exists
- [ ] Verify `.vercel/output/static/assets/` contains CSS and JS files
- [ ] Run `./verify-build.sh` to check all build outputs
- [ ] Test locally with `npx vite preview` or `npm run dev`

### ✅ Configuration Files

- [ ] `vite.config.ts` imports `nitro()` plugin
- [ ] `nitro.config.ts` has `preset: "vercel"`
- [ ] `vercel.json` has `buildCommand: "npm run build"`
- [ ] `package.json` has correct build script
- [ ] No `dist/` or `.output/` directories (should only be `.vercel/output/`)

### ✅ Code Quality

- [ ] Run linter: `npm run lint`
- [ ] Fix any critical errors or warnings
- [ ] Check for console errors in browser
- [ ] Verify all routes are working locally
- [ ] Test responsive design on different screen sizes

### ✅ Git Status

- [ ] All changes committed: `git status`
- [ ] On correct branch (usually `main` for production)
- [ ] Push to remote: `git push origin main`

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)

When using Git integration:

1. **Push to Git repository:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Wait for Vercel to auto-deploy:**
   - Check Vercel dashboard for deployment status
   - Monitor build logs for any errors
   - Verify deployment success notification

3. **Test production URL:**
   - Visit: https://clock-mu-henna.vercel.app
   - Test all major features
   - Check browser console for errors

### Option 2: Manual CLI Deployment

When deploying manually with CLI:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Verify build output:**
   ```bash
   ./verify-build.sh
   ```

3. **Deploy to production:**
   ```bash
   vercel deploy --prod --prebuilt
   ```

4. **Verify deployment:**
   - Note the deployment URL from CLI output
   - Visit the URL to test
   - Check for any errors

## Post-Deployment Checklist

### ✅ Production Verification

- [ ] Homepage loads without errors
- [ ] All navigation links work correctly
- [ ] Forms submit properly (if applicable)
- [ ] Images and assets load correctly
- [ ] Check mobile responsiveness
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Verify SSL certificate is active (https://)
- [ ] Check page load performance

### ✅ Console & Logs

- [ ] No errors in browser console (F12 → Console)
- [ ] Check Vercel function logs for server errors
- [ ] Verify no 404s in Network tab (F12 → Network)
- [ ] Check for any failed API calls

### ✅ SEO & Metadata

- [ ] Page title displays correctly
- [ ] Meta description is present
- [ ] Favicon loads
- [ ] robots.txt is accessible: `/robots.txt`
- [ ] sitemap.xml is accessible: `/sitemap.xml`

### ✅ Monitoring

- [ ] Set up uptime monitoring (optional)
- [ ] Configure error tracking (Sentry, etc.) (optional)
- [ ] Enable Vercel Analytics (optional)

## If Deployment Fails

### Build Failure

**Symptoms:** Deployment fails during build phase

**Steps:**
1. Check deployment logs in Vercel dashboard
2. Look for error messages in build output
3. Verify build works locally: `npm run build`
4. Check Node.js version matches (`>=20`)
5. Clear build cache in Vercel dashboard
6. Retry deployment

### Runtime Failure (500 Error)

**Symptoms:** Build succeeds but site shows 500 error

**Steps:**
1. Check Vercel function logs
2. Look for server-side errors
3. Verify environment variables are set
4. Test server locally: `npx vite preview`
5. Check for missing dependencies
6. Review recent code changes

### 404 Not Found

**Symptoms:** Build succeeds but site shows 404

**Steps:**
1. Verify `.vercel/output/functions/__server.func/` exists in build
2. Check `nitro.config.ts` has correct preset
3. Verify `vercel.json` doesn't override output directory
4. Force redeploy: `vercel deploy --prod --prebuilt --force`
5. Check Vercel project settings (Framework should be "Other")

### Blank Page

**Symptoms:** Page loads but shows nothing

**Steps:**
1. Open browser console (F12) for JavaScript errors
2. Check Network tab for failed asset loads
3. Verify static assets in `.vercel/output/static/`
4. Check for hydration errors in console
5. Test client-side JavaScript is loading

## Emergency Rollback

If production is broken:

1. **Go to Vercel Dashboard → Deployments**
2. **Find last working deployment**
3. **Click "..." menu → "Promote to Production"**
4. **Verify rollback was successful**
5. **Fix issue locally before redeploying**

## Quick Commands Reference

```bash
# Verify build locally
npm run build
./verify-build.sh

# Deploy to production
vercel deploy --prod --prebuilt

# Deploy to preview
vercel deploy --prebuilt

# Force deploy (bypass cache)
vercel deploy --prod --prebuilt --force

# View live logs
vercel logs --follow

# List deployments
vercel ls

# Pull environment variables
vercel env pull

# Link to Vercel project
vercel link
```

## Success Criteria

Your deployment is successful when:

✅ Build completes without errors  
✅ All routes return 200 status codes  
✅ No JavaScript errors in console  
✅ All assets load correctly  
✅ Forms and interactions work  
✅ Mobile view renders properly  
✅ Performance is acceptable (Core Web Vitals)  

## Notes

- **Always build before deploying** when using `--prebuilt` flag
- **Test locally first** with `npm run dev` or `npx vite preview`
- **Check Vercel dashboard** for detailed logs and analytics
- **Keep build output gitignored** - `.vercel/output/` should not be committed
- **Monitor first few requests** after deployment for any issues

---

**Last Updated:** June 10, 2026  
**Project:** Clock  
**Framework:** TanStack Start + Nitro + Vercel
