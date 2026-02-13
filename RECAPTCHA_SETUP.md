# reCAPTCHA v2 Configuration Guide

## Overview

This document provides step-by-step instructions for configuring reCAPTCHA v2 ("I'm not a robot" checkbox) on the UNHITTABLE website.

## Important: reCAPTCHA Location

**The reCAPTCHA v2 checkbox is the FIRST THING users see when accessing the site.**

It appears on a full-screen verification gate before any site content is accessible:
- Users must complete the "I'm not a robot" reCAPTCHA verification
- After verification, they click "Verify & Enter Site" button
- Only then can they access the website content
- Verification status is stored in localStorage, so users won't see the gate on subsequent visits (unless they clear their browser data)

This ensures **all traffic is verified as human** before accessing any part of the site.

## Step 1: Create reCAPTCHA Keys

### 1.1 Go to Google reCAPTCHA Admin Console

Visit: https://www.google.com/recaptcha/admin

### 1.2 Sign In

Sign in with your Google account. If you don't have one, create a free account.

### 1.3 Create a New Site

1. Click the **"+" button** or **"Create"** button
2. Fill in the registration form:

   **Label:** `UNHITTABLE` (or your preferred name)
   
   **reCAPTCHA type:** Select **reCAPTCHA v2**
   
   **reCAPTCHA v2 variant:** Select **"I'm not a robot" Checkbox**
   
   **Domains:** Add your domains:
   ```
   localhost
   127.0.0.1
   your-domain.com
   www.your-domain.com
   *.vercel.app
   ```

3. Accept the reCAPTCHA Terms of Service
4. Click **"Create"**

### 1.4 Copy Your Keys

After creation, you'll see:
- **Site Key** (public, safe to expose in frontend)
- **Secret Key** (private, must be kept secret)

Copy both keys and save them somewhere safe.

## Step 2: Update reCAPTCHA Site Key

The verification gate component uses a placeholder reCAPTCHA site key. You need to replace it with your actual key.

Open `client/src/components/VerificationGate.tsx` and find this line:

```jsx
data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
```

Replace it with your actual Site Key:

```jsx
data-sitekey="YOUR_ACTUAL_SITE_KEY_HERE"
```

## Step 3: Local Development Setup

### 3.1 Create `.env.local` File

In the project root directory, create a file named `.env.local`:

```bash
# .env.local
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

Replace:
- `your_site_key_here` with your actual Site Key
- `your_secret_key_here` with your actual Secret Key

### 3.2 Test Locally

```bash
pnpm dev
```

Visit http://localhost:3000/contact and verify the reCAPTCHA checkbox appears.

## Step 4: Vercel Deployment

### 4.1 Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add two variables:

   **Variable 1:**
   - Name: `RECAPTCHA_SECRET_KEY`
   - Value: Your Secret Key
   - Environments: Production, Preview, Development

   **Variable 2:**
   - Name: `VITE_RECAPTCHA_SITE_KEY`
   - Value: Your Site Key
   - Environments: Production, Preview, Development

4. Click "Save"

### 4.2 Update reCAPTCHA Domains

Go back to Google reCAPTCHA Admin Console and add your Vercel domain:

1. Click on your UNHITTABLE site
2. Go to **Settings**
3. Under **Domains**, add:
   - `your-vercel-domain.vercel.app`
   - `your-custom-domain.com` (if using custom domain)

### 4.3 Deploy

Push your changes to GitHub. Vercel will automatically deploy.

## Step 5: Test the Integration

### 5.1 Local Testing

1. Start the dev server: `pnpm dev`
2. Navigate to http://localhost:3000
3. You will immediately see the reCAPTCHA verification gate
4. Check the "I'm not a robot" checkbox
5. Click "Verify & Enter Site"
6. You should see a success toast and be redirected to the home page
7. Verification status is stored in localStorage, so refresh the page—you won't see the gate again

### 5.2 Production Testing

1. Visit your deployed site
2. You will immediately see the reCAPTCHA verification gate
3. Repeat the same steps as local testing

### 5.3 Clear Verification (for testing)

To test the verification gate again:
1. Open browser DevTools (F12)
2. Go to Application → Local Storage
3. Delete the `unhittable-verified` and `unhittable-verified-time` keys
4. Refresh the page—the verification gate will appear again

## Troubleshooting

### reCAPTCHA Not Showing on Verification Gate

**Problem:** The reCAPTCHA checkbox doesn't appear on the verification gate.

**Solutions:**
1. Verify the Site Key is correct in `client/src/components/VerificationGate.tsx`
2. Check that your domain is registered in reCAPTCHA Admin Console
3. Verify the reCAPTCHA script is loaded in `client/index.html`:
   ```html
   <script src="https://www.google.com/recaptcha/api.js" async defer></script>
   ```
4. Check browser console for errors (F12 → Console tab)
5. Wait a moment—the reCAPTCHA script takes time to load

### Verification Gate Not Appearing

**Problem:** The verification gate doesn't appear when accessing the site.

**Solutions:**
1. Clear localStorage: Open DevTools → Application → Local Storage → Delete `unhittable-verified`
2. Refresh the page
3. The verification gate should now appear

### Verification Fails

**Problem:** Clicking "Verify & Enter Site" fails with an error.

**Solutions:**
1. Verify the Secret Key is correct in environment variables
2. Check that the Secret Key matches the Site Key in reCAPTCHA Admin Console
3. Open browser DevTools (F12) → Network tab
4. Try verification again
5. Look for a POST request to `/api/verify`
6. Check the response for error details

### "Please complete the reCAPTCHA verification" Error

**Problem:** User gets this error even after checking the box.

**Solutions:**
1. Refresh the page and try again
2. Clear browser cache and cookies
3. Try a different browser
4. Check that JavaScript is enabled

### Domain Verification Issues

**Problem:** reCAPTCHA shows errors about unregistered domain.

**Solutions:**
1. Go to reCAPTCHA Admin Console
2. Click on your site
3. Go to Settings
4. Add the domain to the Domains list
5. Wait 5-10 minutes for changes to propagate

## API Endpoint Details

### POST /api/verify

**Request:**
```json
{
  "token": "string (reCAPTCHA token from client)",
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response (Success):**
```json
{
  "success": true
}
```

**Response (Failure):**
```json
{
  "success": false,
  "error": "error message"
}
```

**Error Codes:**
- `missing-input-secret` - Secret key is missing
- `invalid-input-secret` - Secret key is invalid
- `missing-input-response` - reCAPTCHA response is missing
- `invalid-input-response` - reCAPTCHA response is invalid
- `bad-request` - Request format is invalid
- `timeout-or-duplicate` - Request timeout or duplicate

## Security Best Practices

1. **Never expose Secret Key**: Keep it in environment variables only
2. **Always verify server-side**: Never trust client-side verification
3. **Use HTTPS**: reCAPTCHA requires HTTPS in production
4. **Implement rate limiting**: Prevent abuse of the contact form
5. **Log submissions**: Keep records of contact form submissions
6. **Email validation**: Verify email addresses before storing

## How It Works

1. **User visits site** → Verification gate appears (full-screen)
2. **User completes reCAPTCHA** → Checks "I'm not a robot" box
3. **User clicks "Verify & Enter Site"** → Token sent to `/api/verify` endpoint
4. **Backend verifies token** → Google reCAPTCHA API confirms human verification
5. **Verification stored** → localStorage saves verification status
6. **Site content unlocked** → User can now access all pages
7. **Subsequent visits** → Verification gate skipped (unless localStorage cleared)

## Next Steps

1. **Email Integration**: Send notification emails when form is submitted
2. **Database Storage**: Store contact submissions in a database
3. **Admin Dashboard**: Create admin panel to view submissions
4. **Auto-reply**: Send automatic confirmation email to users
5. **Verification Expiry**: Set verification to expire after 24 hours

## Support

For issues with reCAPTCHA:
- Google reCAPTCHA Help: https://support.google.com/recaptcha
- reCAPTCHA Documentation: https://developers.google.com/recaptcha

For issues with the UNHITTABLE website:
- Contact: support@unhittable.io
- Documentation: `/docs` page on the website

## File Locations

- **Verification Gate**: `client/src/components/VerificationGate.tsx`
- **Verification Context**: `client/src/contexts/VerificationContext.tsx`
- **App Router**: `client/src/App.tsx`
- **API Endpoint**: `api/verify.js`
- **HTML Template**: `client/index.html`

## Additional Resources

- [Google reCAPTCHA v2 Documentation](https://developers.google.com/recaptcha/docs/display)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Verification Gate Component](./client/src/components/VerificationGate.tsx)
