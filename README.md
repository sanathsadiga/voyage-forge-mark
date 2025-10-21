
# Voyage Forge Marketing Site

This is the public-facing marketing site for Voyage Forge, an AI-powered travel platform. Built with Next.js, TypeScript, Tailwind CSS, and deployed on Vercel, it includes landing, pricing, blog, referral, and policy pages, plus integrations for analytics, chat, and email.

## Project Overview

- **Framework:** Next.js (App Router, SSR/SSG)
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Analytics:** Google Analytics, Vercel Analytics, Microsoft Clarity, Zoho SalesIQ
- **Email:** Resend API (contact form)
- **Chat:** Tawk.to live chat widget
- **Deployment:** Vercel

## Main Folders & File Purposes

- `src/app/` — Main Next.js app directory, all routes/pages
  - `layout.tsx` — Global layout, includes analytics, chat, and shared components
  - `page.tsx` — Home/landing page
  - `global.css` — Global styles
  - `about-us/`, `affiliation/`, `blog/`, `pricing/`, `contact/`, `referral/`, `privacy-policy/`, `refund-policy/`, `terms-conditions/` — Route folders for each main page
  - `components/` — Shared UI components:
	 - `Header.tsx`, `Footer.tsx`, `HeroSection.tsx`, `PricingSection.tsx`, `FeaturesSection.tsx`, `TestimonialsSection.tsx`, `FeatureCardsSection.tsx` — Main UI sections
	 - `TawkChat.tsx` — Tawk.to live chat widget
	 - `GoogleAnalytics.tsx`, `MicrosoftClarity.tsx`, `ZohoSalesIQ.tsx` — Analytics integrations
	 - `SEOEnhancer.tsx` — SEO meta tags and structured data
  - `api/contact/route.ts` — Contact form backend (uses Resend for email)
  - `blog/[slug]/` — Dynamic blog post pages
  - `privacy-policy/`, `refund-policy/`, `terms-conditions/` — Legal pages
- `public/` — Static assets (favicons, images, manifest)
- `global.d.ts`, `tsconfig.json`, `postcss.config.mjs` — TypeScript and build configs
- `.env.local.example` — Example environment variables for local setup
- `package.json` — Project dependencies and scripts

## How to Clone & Run Locally

1. **Clone the repository:**
	```bash
	git clone https://github.com/sanathsadiga/voyage-forge-mark.git
	cd voyage-forge-mark
	```

2. **Install dependencies:**
	```bash
	npm install
	# or
	yarn install
	```

3. **Set up environment variables:**
	- Copy `.env.local.example` to `.env.local` and fill in any required keys (e.g., Resend API for contact form).

4. **Start the development server:**
	```bash
	npm run dev
	# or
	yarn dev
	```
	- Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Push Updates to GitHub

1. **Make your changes locally.**
2. **Test your changes:**
	- Run the dev server and verify your updates work as expected.
	- Check for errors in the browser and terminal.
3. **Stage and commit your changes:**
	```bash
	git add .
	git commit -m "Describe your changes"
	```
4. **Push to GitHub:**
	```bash
	git push origin main
	```
5. **Notify a developer for review.**
	- After pushing, ask a team member to verify and approve your changes before merging to production.

## Deployment

- **Platform:** [Vercel](https://vercel.com/)
- **Production URL:** https://voyage-forge.com
- **Automatic deploys:** On push to `main` branch.

## Main Routes

- `/` — Home/landing page
- `/about-us` — About page
- `/blog` — Blog listing
- `/blog/[slug]` — Individual blog post
- `/pricing` — Pricing page
- `/contact` — Contact form
- `/referral` — Referral program
- `/privacy-policy`, `/refund-policy`, `/terms-conditions` — Legal pages

## Environment Variables

- See `.env.local.example` for required keys (e.g., `RESEND_API_KEY` for contact form email).

## Stack Overview

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React, React Icons
- Resend (email API)
- Vercel (hosting & analytics)

## Collaborator Notes

- Always test your changes locally before pushing.
- Use clear commit messages.
- Ask for a code review before merging to production.
- Keep `.env.local` private and never commit secrets.

---
For any questions, reach out to the project maintainer or open an issue on GitHub.
