# Zapsquish

Squish, merge and convert your files. Fast, free, private.

## Included tools
- Merge PDF, reorder files and download one merged PDF
- JPG/PNG to PDF with page size, orientation and margin options
- Compress images to JPEG with quality, resize, and ZIP download
- Compress PDF in-browser (image-based output; selectable text is not retained)
- Compress video in-browser with FFmpeg WebAssembly
- PDF to JPG, split PDF, rotate PDF, and images to WebP

## Stack
Next.js App Router, TypeScript, Tailwind CSS, pdf-lib, pdfjs-dist, browser-image-compression, JSZip and FFmpeg WebAssembly.

## Local development
1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL.

## Privacy
File processing runs in the browser. No file upload API, database or login system is included. The FFmpeg core is fetched from a public CDN only when video compression starts; the selected video is not uploaded.

## Deployment
Import this repository into Vercel and use the default Next.js build settings. Update the canonical URL in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` after choosing the production domain.

## Phase 4 is intentionally deferred
Paid server-side processing, user accounts and payment integration are not enabled. They require real usage evidence, an approved server budget, payment-provider credentials, privacy/legal review and an explicit product decision. No paid service has been added.
