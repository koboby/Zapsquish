# Zapsquish

A mobile-friendly browser toolbox for PDF, image and video tasks. Files are processed locally where the selected tool supports it.

## Available tools

### PDF organization and editing
- Merge PDF, split PDF, organize/reorder pages
- Remove pages and extract selected pages
- Rotate PDF, crop page boxes, add page numbers and text watermarks
- Compress PDF (image-based; text will no longer be selectable)

### PDF conversion
- JPG/PNG to PDF, PDF to JPG
- PDF to selectable text and Markdown

### Image and video
- Compress JPG, PNG and WebP images
- Convert images to WebP
- Compress video to MP4 with WhatsApp-friendly, smaller and best-quality presets

## Stack
Next.js App Router, TypeScript, Tailwind CSS, pdf-lib, pdfjs-dist, browser-image-compression, JSZip and FFmpeg WebAssembly.

## Local development
1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL.

## Privacy and limitations
Supported tools process files in the browser. The FFmpeg engine is fetched from a public CDN when video compression starts, but the video itself is not uploaded. PDF text extraction does not OCR scanned pages. PDF compression rasterizes pages and does not preserve selectable text. Password-protected PDF handling, Office conversions, OCR, electronic signatures, redaction, repair, PDF/A conversion and full visual PDF editing are not implemented yet; do not treat those items as available tools.

## Deployment
Import this repository into Vercel with the Next.js preset. Update the canonical URL in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` after choosing the production domain.

## Phase 4
Paid server-side processing, accounts and payment integration are intentionally deferred until real usage justifies them and you approve the costs. No paid service has been added.
