# Zapsquish release test checklist

## Before deployment
- [ ] Confirm GitHub Actions `typecheck` and `build` both pass on the latest `main` commit.
- [ ] Import `koboby/Zapsquish` into Vercel with the Next.js preset and no environment variables.
- [ ] Replace the placeholder canonical URL `https://zapsquish.vercel.app` in metadata, sitemap and robots after the final domain is known.

## Android / mobile browser
- [ ] Open the deployed home page in Chrome on a 2–3GB Android phone.
- [ ] Merge two valid PDFs; verify page order and `zapsquish-merged.pdf` download.
- [ ] Try a password-protected and a corrupted PDF; confirm a clear error.
- [ ] Convert several JPG/PNG images to A4 and fit-to-image PDFs.
- [ ] Compress JPG, PNG and WebP images; compare before/after sizes and test individual and ZIP downloads.
- [ ] Compress a small PDF; confirm the image-based text warning and page progress.
- [ ] Compress a short MP4 using WhatsApp-friendly and Smaller presets; keep the tab open.
- [ ] Test PDF-to-JPG, split, rotate and images-to-WebP tools.
- [ ] Install to Home Screen and confirm the standalone app launches.

## Desktop / compatibility
- [ ] Repeat core tools in Chrome, Safari and Samsung Internet where available.
- [ ] Use Chrome DevTools Slow 3G and check that home page does not load FFmpeg or PDF.js until a tool is used.
- [ ] Check Lighthouse mobile performance; target 85+ before public promotion.
- [ ] Test 5MB PDF, 50MB PDF, 100MB video and corrupted inputs on capable hardware.

## Important limits
- Video encoding is CPU/RAM intensive. The browser limits input to 100MB, reduced to 50MB when the browser reports 2GB device memory or less.
- PDF compression rasterizes each page; selectable/searchable text is not preserved.
- The Vercel deployment and real-device/Lighthouse tests require the owner to connect Vercel and test the public deployment.
