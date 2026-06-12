# Quick Deploy Reference

**TL;DR:** Your build is correct. Deploy with: `vercel deploy --prod --prebuilt`

---

## ✅ Status Check

Run this to verify everything is ready:

```bash
./verify-build.sh
```

All checks should pass ✅

---

## 🚀 Deploy Commands

### Production Deploy (Git)
```bash
git add .
git commit -m "Deploy to production"
git push origin main
# Vercel auto-deploys
```

### Production Deploy (CLI)
```bash
npm run build
vercel deploy --prod --prebuilt
```

### Preview Deploy
```bash
npm run build
vercel deploy --prebuilt
```

---

## 🔍 Common Issues

### Issue: Website Not Showing

**Fix:**
```bash
# Force redeploy
vercel deploy --prod --prebuilt --force
```

### Issue: Build Fails on Vercel

**Fix:**
1. Go to Vercel Dashboard → Settings → Build & Development
2. Set Framework to "Other"
3. Clear Output Directory field
4. Redeploy

### Issue: Old Version Still Showing

**Fix:**
1. Vercel Dashboard → Deployments
2. Find latest deployment → Promote to Production
3. Clear browser cache (Cmd+Shift+R)

---

## 📋 Pre-Deploy Checklist

- [ ] `npm run build` succeeds locally
- [ ] `./verify-build.sh` passes all checks
- [ ] Changes committed to git
- [ ] Code pushed to remote

---

## 🌐 URLs

- **Dashboard:** https://vercel.com/team_PpwGPSLyPfmRspwxIVX0pZJl/clock
- **Production:** https://clockout.us

---

## 📚 Full Documentation

- `DEPLOYMENT.md` - Complete guide
- `VERCEL_SETTINGS.md` - Dashboard settings
- `DEPLOY_CHECKLIST.md` - Detailed checklist
- `DEPLOYMENT_STATUS.md` - Status report

---

## 🆘 Emergency Rollback

```bash
# 1. Go to Vercel Dashboard → Deployments
# 2. Find last working deployment
# 3. Click "..." → "Promote to Production"
```

---

**Your build is configured correctly. Deploy with confidence! 🚀**
