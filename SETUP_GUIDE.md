# UNHITTABLE Website - Setup & Deployment Guide

## Overview

This is a premium, Apple-inspired UNHITTABLE network resilience website built with React 19, Tailwind CSS 4, and TypeScript. The site features a glassmorphism design with dark/light mode toggle, comprehensive pages, and reCAPTCHA v2 integration for contact form protection.

## Features

- **Apple-Inspired Design**: Glassmorphism with frosted glass effects, soft gradients, and rounded corners
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Responsive**: Fully responsive design for all screen sizes
- **reCAPTCHA v2 Integration**: "I'm not a robot" checkbox for contact form protection
- **Vercel-Compatible API**: Serverless function for reCAPTCHA verification
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for Lighthouse scores 90+

## Pages Included

1. **Home** (`/`) - Hero section with features preview and CTAs
2. **Features** (`/features`) - Detailed breakdown of all services
3. **Pricing** (`/pricing`) - Pricing plans with monthly/yearly toggle
4. **Dashboard** (`/dashboard`) - Mock analytics with animated counters
5. **Documentation** (`/docs`) - Setup guides and API examples
6. **About** (`/about`) - Company information and team
7. **Contact** (`/contact`) - Contact form with reCAPTCHA v2
8. **FAQ** (`/faq`) - Frequently asked questions with accordion
9. **Status** (`/status`) - System status and incident history
10. **Privacy** (`/privacy`) - Privacy policy
11. **Terms** (`/terms`) - Terms of service
12. **404** - Not found page

## reCAPTCHA v2 Integration

### Important: Where to Find the reCAPTCHA

The reCAPTCHA v2 "I'm not a robot" checkbox is located on the **Contact page** (`/contact`). It appears in the contact form below the message field and above the submit button. Users must complete the reCAPTCHA verification before they can submit the form.

**Key Points:**
- The reCAPTCHA is **required** to submit the contact form
- It uses Google's reCAPTCHA v2 (the checkbox variant)
- The form cannot be submitted until reCAPTCHA is completed
- The verification happens server-side via the `/api/verify` endpoint

### Setup Instructions

#### Step 1: Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click "Create" or "+" to create a new site
4. Fill in the form:
   - **Label**: UNHITTABLE
   - **reCAPTCHA type**: reCAPTCHA v2 → "I'm not a robot" Checkbox
   - **Domains**: 
     - `localhost` (for local development)
     - `your-domain.com` (for production)
     - `*.vercel.app` (if deploying to Vercel)
5. Accept the reCAPTCHA Terms of Service
6. Click "Create"
7. Copy your **Site Key** and **Secret Key**

#### Step 2: Add Keys to Your Environment

**For Local Development:**

Create a `.env.local` file in the project root:

```bash
# .env.local
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**For Vercel Deployment:**

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add two variables:
   - Name: `RECAPTCHA_SECRET_KEY` → Value: `your_secret_key`
   - Name: `VITE_RECAPTCHA_SITE_KEY` → Value: `your_site_key`
4. Make sure variables are available in all environments (Production, Preview, Development)

#### Step 3: Update the Site Key in Contact Form

The Contact page (`client/src/pages/Contact.tsx`) has a placeholder for the reCAPTCHA site key:

```jsx
<div
  className="g-recaptcha"
  data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
/>
```

Replace `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` with your actual **Site Key**.

## Design System

### Color Palette

**Light Mode:**
- Background: `oklch(0.98 0.001 0)` (off-white)
- Foreground: `oklch(0.235 0.015 65)` (dark gray)
- Accent: `oklch(0.6 0.22 260)` (soft blue)

**Dark Mode:**
- Background: `oklch(0.12 0 0)` (deep black)
- Foreground: `oklch(0.88 0.003 65)` (light gray)
- Accent: `oklch(0.65 0.2 255)` (bright blue)

### Typography

- **Headlines**: Outfit font (400-900 weights)
- **Body**: System font stack (San Francisco, Segoe UI)
- **Monospace**: IBM Plex Mono (for code blocks)

### Components

- `.glass` - Basic glassmorphism card
- `.glass-lg` - Large glassmorphism card with stronger blur
- `.glass-sm` - Small glassmorphism card
- `.gradient-text` - Gradient text effect for headlines

## Development

### Installation

```bash
pnpm install
```

### Local Development

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Configure environment variables (see reCAPTCHA setup above)
6. Click "Deploy"

### Environment Variables Required

For Vercel deployment, ensure these environment variables are set:

- `RECAPTCHA_SECRET_KEY` - Your reCAPTCHA secret key (for server-side verification)
- `VITE_RECAPTCHA_SITE_KEY` - Your reCAPTCHA site key (for client-side rendering)

## API Endpoint

### POST /api/verify

Verifies reCAPTCHA tokens and processes contact form submissions.

**Request:**
```json
{
  "token": "string (reCAPTCHA token)",
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true
}
```

or

```json
{
  "success": false,
  "error": "error message"
}
```

## Security Headers

The site includes security headers configured in `vercel.json`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`

## Performance Optimization

- Lazy loading for images
- CSS-in-JS with Tailwind for minimal bundle size
- Code splitting with React Router
- Optimized fonts with preconnect
- Minimal external dependencies

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### reCAPTCHA Not Showing

1. Verify the site key is correct in `Contact.tsx`
2. Check that your domain is registered in reCAPTCHA Admin Console
3. Ensure the reCAPTCHA script is loaded: `<script src="https://www.google.com/recaptcha/api.js" async defer></script>`
4. Check browser console for errors

### Form Submission Failing

1. Verify the reCAPTCHA token is being sent to `/api/verify`
2. Check that `RECAPTCHA_SECRET_KEY` is set in environment variables
3. Verify the secret key is correct in reCAPTCHA Admin Console
4. Check server logs for verification errors

### Dark Mode Not Working

1. Ensure localStorage is enabled
2. Check that `.dark` class is being applied to `<html>` element
3. Verify CSS variables are defined in `index.css`

## File Structure

```
unhittable-web/
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── contexts/    # React contexts (Theme)
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main app component
│   │   ├── main.tsx     # React entry point
│   │   └── index.css    # Global styles & design tokens
│   └── index.html       # HTML template
├── api/
│   └── verify.js        # reCAPTCHA verification endpoint
├── vercel.json          # Vercel configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies
```

## Next Steps

1. **Add Email Integration**: Implement email notifications for contact form submissions
2. **Add Database**: Store contact submissions in a database
3. **Add Analytics**: Integrate Google Analytics or similar
4. **Add Blog**: Create a blog section for content marketing
5. **Add Testimonials**: Add customer testimonials section
6. **Add Webinars**: Create a webinars/events section

## Support

For issues or questions, contact support@unhittable.io

## License

© 2026 UNHITTABLE. All rights reserved.
