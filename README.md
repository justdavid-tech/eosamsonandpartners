1. Background alternation system

New wrapper: src/components/layout/Section.jsx — takes a tone prop and applies consistent styling:

tone="navy"   → bg-navy, text-white, brass accents
tone="cream"  → bg-cream, text-ink, navy accents
tone="white"  → bg-white, text-ink (for a lighter beat between two cream/navy sections)

Home page order becomes: Hero (navy) → Practice Areas (cream) → next section (navy) → alternating from there. One prop per section, no repeated color logic.

2. Sanity schema changes needed (before content can support this)

practiceArea.js schema needs two new fields added:

featured — boolean, "Show on homepage" toggle
icon — image type, for the uploaded SVG/icon per practice area

Once added, you'll need to go into Studio and:

Toggle featured: true on exactly 6 entries (your pick — ideally one from each of the 5 categories plus one more, for visual/topic variety)
Upload an icon image to each of those 6 (doesn't have to be all 25 immediately — just the featured ones to start)

This is a blocking step — the homepage component can't render real icons until at least 6 entries have both featured and icon set in Sanity. I'll build the component to gracefully fall back (placeholder icon) if either is missing, so nothing breaks while you're filling this in.

3. Data fetching

Home page (src/app/page.js): new GROQ query, featuredPracticeAreasQuery, fetches only featured == true, limited to 6, includes icon asset URL, title, overview (short), slug.

Main /practice-areas index page: separate query, allPracticeAreasQuery, fetches all 25 with title, category, overview, slug, icon. Fetched once on the server; passed down to a client component that handles the search input and filters in-browser (25 items is small enough that client-side filtering is simpler and faster than a live Sanity search query — no extra API calls per keystroke).

4. Card design (the 6 on Home)
Icon (uploaded SVG, rendered via next/image or inline <img>)
Title
Overview, truncated to ~2 lines (line-clamp-2)
"Learn more →" → links to /practice-areas/[slug] for that specific entry
Hover: subtle lift (translateY(-4px)) + border shifts from navy/10 to brass + icon gets a slight brass tint or scale — kept restrained, not bouncy
Grid: grid-cols-1 md:grid-cols-3, 6 cards → naturally forms 3-up/3-down on desktop, stacks on mobile

Below the 6-card grid: one centered CTA — "View All 25 Practice Areas →" → /practice-areas (the main index).

5. Main /practice-areas index page (separate from Home)
Search input at the top — filters by title/category/overview substring match, live as you type, client-side
Optional: category filter chips below search (using the same 5 categories from the mega-menu) for one-click narrowing
Grid of all 25 cards below, same visual card style as Home's featured ones, just more of them
This page is where the "20+ list, easy way for visitors" problem actually gets solved — Home just teases 6, this page is the real directory
6. Build order
Add featured + icon fields to practiceArea.js schema → you fill in 6 entries in Studio
Build Section.jsx wrapper
Build PracticeAreaHighlights.jsx (Home's 6-card section)
Wire into page.js with alternating tones
Build /practice-areas/page.jsx (full index + search) — separate task, since it's a bigger page