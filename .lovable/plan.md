## Add two new portfolio projects

Add Reps & Results (reps.mtechcorpja.com) and Sayeed Bernard (sayeedbernard.com) as new entries in the Web Development portfolio.

### Changes

1. **Capture screenshots** of both live sites and save locally as:
   - `public/lovable-uploads/reps-and-results.png`
   - `public/lovable-uploads/sayeed-bernard.png`

2. **Edit `src/data/portfolioData.ts`** — prepend two new entries with the next ids (17 and 18) so they appear first on the Portfolio page:

   - **id 18 — Reps & Results**
     - URL: `https://reps.mtechcorpja.com`
     - Category: Web Development
     - Tech: HTML, CSS, JavaScript, Responsive Design
     - Description: short blurb based on the site content (sales reps / results tracking platform).
   - **id 17 — Sayeed Bernard**
     - URL: `https://sayeedbernard.com`
     - Category: Web Development
     - Tech: HTML, CSS, JavaScript, Responsive Design
     - Description: short blurb based on the site (personal/professional portfolio).

### Notes

- Final descriptions and tech tags will be tuned after visiting each site so they accurately reflect what's there (e.g. WordPress vs custom build).
- No component or route changes needed: the Portfolio grid auto-renders from this data array, and the homepage Featured Projects already pulls the top entries.
- Sitemap and SEO files are unaffected (project detail pages aren't routed individually).