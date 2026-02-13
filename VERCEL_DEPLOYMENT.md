# Vercel Deployment Guide for UNHITTABLE

## Prerequisites

- GitHub account with your repository pushed
- Vercel account (free tier works fine)
- Google reCAPTCHA v2 keys (Site Key and Secret Key)

## Step 1: Push to GitHub

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Add UNHITTABLE website with reCAPTCHA verification gate"
git push origin main
```

## Step 2: Connect to Vercel

### 2.1 Go to Vercel Dashboard

Visit: https://vercel.com/dashboard

### 2.2 Import Project

1. Click **"Add New"** → **"Project"**
2. Select **"Import Git Repository"**
3. Find your `unhittable-web` repository and click **"Import"**

### 2.3 Configure Project

Vercel should auto-detect the settings:
- **Framework Preset**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist/public`
- **Install Command**: `pnpm install`

These are already configured in `vercel.json`, so Vercel will use those settings.

## Step 3: Add Environment Variables

### 3.1 In Vercel Dashboard

1. After importing, go to **Settings** → **Environment Variables**
2. Add these variables:

**Variable 1: reCAPTCHA Secret Key**
- **Name**: `RECAPTCHA_SECRET_KEY`
- **Value**: Your reCAPTCHA Secret Key (from Google reCAPTCHA Admin Console)
- **Environments**: Production, Preview, Development

**Variable 2: reCAPTCHA Site Key (Frontend)**
- **Name**: `VITE_RECAPTCHA_SITE_KEY`
- **Value**: Your reCAPTCHA Site Key (from Google reCAPTCHA Admin Console)
- **Environments**: Production, Preview, Development

3. Click **"Save"**

### 3.2 Update reCAPTCHA Site Key in Code

Open `client/src/components/VerificationGate.tsx` and find this line:

```jsx
data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
```

Replace it with your actual Site Key:

```jsx
data-sitekey="YOUR_ACTUAL_SITE_KEY_HERE"
```

Then push the changes:

```bash
git add client/src/components/VerificationGate.tsx
git commit -m "Update reCAPTCHA site key"
git push origin main
```

## Step 4: Register Domain in reCAPTCHA

### 4.1 Go to Google reCAPTCHA Admin Console

Visit: https://www.google.com/recaptcha/admin

### 4.2 Add Your Vercel Domain

1. Click on your UNHITTABLE reCAPTCHA site
2. Go to **Settings**
3. Under **Domains**, add:
   - Your Vercel URL (e.g., `unhittable-web.vercel.app`)
   - Your custom domain if you have one (e.g., `unhittable.io`)

4. Click **"Save"**

## Step 5: Deploy

### 5.1 Trigger Deployment

After pushing your code with the updated Site Key, Vercel will automatically deploy.

You can also manually trigger a deployment:

1. Go to your Vercel project
2. Click **"Deployments"**
3. Find the latest deployment and click **"Redeploy"**

### 5.2 Wait for Build

The build should complete in 1-2 minutes. You'll see a green checkmark when it's done.

## Step 6: Test Your Deployment

### 6.1 Visit Your Site

1. Go to your Vercel URL (e.g., `https://unhittable-web.vercel.app`)
2. You should see the reCAPTCHA verification gate
3. Check the "I'm not a robot" box
4. Click "Verify & Enter Site"
5. You should be redirected to the home page

### 6.2 Test All Pages

After verification, test these pages:
- `/features` - Features page
- `/pricing` - Pricing page
- `/dashboard` - Dashboard preview
- `/docs` - Documentation
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/status` - Status page

All should load without 404 errors.

## Troubleshooting

### 404 Error on All Pages

**Problem**: You see 404 on the main page or after verification.

**Solutions**:
1. Check that `outputDirectory` in `vercel.json` is `dist/public`
2. Verify the build completed successfully (green checkmark in Vercel)
3. Check the build logs:
   - Go to Vercel Dashboard
   - Click on the latest deployment
   - Click **"View Build Logs"**
   - Look for errors

### reCAPTCHA Not Appearing

**Problem**: The verification gate doesn't show the reCAPTCHA checkbox.

**Solutions**:
1. Verify `VITE_RECAPTCHA_SITE_KEY` is set in Vercel environment variables
2. Check that you updated the Site Key in `VerificationGate.tsx`
3. Verify the Site Key is registered in reCAPTCHA Admin Console for your domain
4. Wait 5-10 minutes for DNS propagation

### Verification Fails

**Problem**: Clicking "Verify & Enter Site" shows an error.

**Solutions**:
1. Verify `RECAPTCHA_SECRET_KEY` is set correctly in Vercel environment variables
2. Check that the Secret Key matches the Site Key in reCAPTCHA Admin Console
3. Check the API response:
   - Open browser DevTools (F12)
   - Go to Network tab
   - Click "Verify & Enter Site"
   - Look for POST request to `/api/verify`
   - Check the response for error details

### Build Fails on Vercel

**Problem**: The deployment shows a build error.

**Solutions**:
1. Check the build logs in Vercel
2. Make sure all dependencies are installed: `pnpm install`
3. Test locally first: `pnpm build && pnpm preview`
4. Check for TypeScript errors: `pnpm check`

## Custom Domain Setup

### 7.1 Add Custom Domain

1. In Vercel Dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `unhittable.io`)
4. Follow Vercel's instructions to update DNS records

### 7.2 Update reCAPTCHA

1. Go to Google reCAPTCHA Admin Console
2. Add your custom domain to the Domains list
3. Wait 5-10 minutes for changes to propagate

## Monitoring

### 8.1 View Analytics

1. In Vercel Dashboard, go to **Analytics**
2. Monitor:
   - Page views
   - Edge function usage
   - Response times

### 8.2 View Logs

1. Go to **Deployments**
2. Click on a deployment
3. Click **"View Build Logs"** or **"View Function Logs"**

## Next Steps

1. **Custom Domain**: Set up a custom domain (e.g., `unhittable.io`)
2. **SSL Certificate**: Vercel provides free SSL automatically
3. **Email Integration**: Connect SendGrid or Mailgun for contact form emails
4. **Database**: Add a database to store contact submissions
5. **Analytics**: Set up analytics to track user behavior

## Support

For Vercel-specific issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

For reCAPTCHA issues:
- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

For UNHITTABLE website issues:
- Check `RECAPTCHA_SETUP.md` for reCAPTCHA configuration
- Review the build logs in Vercel Dashboard
