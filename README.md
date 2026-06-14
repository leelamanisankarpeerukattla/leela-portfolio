# Leela Mani Sankar Peerukattla - Portfolio Website

A complete, responsive, recruiter-friendly software engineer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

The project is intentionally simple to edit: nearly all major content is stored in one file: `src/data/profile.ts`.

## Tech stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for subtle section animations
- Lucide React icons
- Static export friendly configuration
- Dark mode by default with light mode support
- SEO metadata, Open Graph metadata, `robots.ts`, `sitemap.ts`, and JSON-LD

## Run locally

```bash
npm install
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## How to edit your portfolio

Most profile content lives here:

```txt
src/data/profile.ts
```

Edit that file to change:

- Name and headline
- Email, GitHub, LinkedIn, and resume links
- Hero copy and open-to text
- About section
- Project cards and GitHub links
- Experience bullets
- Skills and top skill highlights
- Certifications and credential links
- Education
- Current focus cards
- SEO title, description, keywords, and site URL

## Replace your resume

A valid placeholder PDF is included at:

```txt
public/resume.pdf
```

Replace it with your latest resume and keep the same filename:

```txt
resume.pdf
```

The portfolio buttons already point to:

```txt
/resume.pdf
```

## Add credential links

In `src/data/profile.ts`, each certification has:

```ts
credentialUrl: ""
```

Paste the real credential URL when you have it. If the field is empty, the UI shows “Credential available on request” instead of a fake link.

## Update project links

Public projects include real GitHub URLs. The private marketplace project is intentionally marked as:

```txt
Case Study Available on Request
```

Do not add a fake repository link for private work.

## Change colors

Primary styling is handled in:

```txt
src/app/globals.css
tailwind.config.ts
```

Common accent classes use cyan, blue, and violet Tailwind utilities. Search for classes such as:

```txt
text-cyan-300
from-cyan-500
to-violet-500
border-white/10
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the project in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Deploy.

Vercel is the easiest option for this project.

## Deploy to Netlify

1. Push this folder to GitHub.
2. Import the project in Netlify.
3. Build command: `npm run build`.
4. Use the Netlify Next.js integration or adapter settings recommended by Netlify.

## Deploy to Render

1. Push this folder to GitHub.
2. Create a new Web Service in Render.
3. Build command: `npm install && npm run build`.
4. Start command: `npm run start`.

## Deploy to GitHub Pages

1. In `next.config.mjs`, enable the commented static export options: `output: 'export'` and `trailingSlash: true`.
2. Run `npm run build`.
3. Publish the generated `out/` directory using GitHub Pages or a GitHub Action.
4. If hosting under a repository path such as `/leela-portfolio`, also add `basePath` and `assetPrefix` before deploying.

## SEO setup

Update the `siteUrl` field in `src/data/profile.ts` before production deployment. This value is used for sitemap, Open Graph metadata, and JSON-LD.

## Quality notes

- The site avoids fake metrics, fake credential links, and fake private project URLs.
- The private project is clearly marked as private.
- The content is centralized for easy editing.
- The design is responsive and supports keyboard navigation.
- Motion is subtle and respects reduced-motion settings.
