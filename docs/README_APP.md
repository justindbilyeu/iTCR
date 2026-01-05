# iTCR Quote Engine - Web App

## Overview

The iTCR Quote Engine is a privacy-first, client-side web application for generating transparent roofing quotes. This is the extracted UX framework from SCSRRS-TCR, adapted for iTCR's multi-product quote workflow.

**Status:** Phase 0 - Shell/Stub (No pricing engine yet)

---

## Features

### Current (v0.1 - Shell)
- ✅ Clean, professional UI extracted from SCSRRS
- ✅ JSON import panel for GPT handoff workflow
- ✅ Quote-focused form inputs (complexity, story count, tear-off type, etc.)
- ✅ Multi-product selection (Metal / Architectural / 3-Tab)
- ✅ Draft quote preview (inputs only, no pricing)
- ✅ 100% client-side processing (no uploads, no API calls)
- ✅ Privacy-first messaging
- ✅ Data pack version loader stub

### Planned (Phase A - Quote Core)
- ⏳ Deterministic pricing engine using iTCR data
- ⏳ JSON data packs generated from CSV files
- ⏳ Multi-product quote generation with ranges
- ⏳ PDF export via window.print() or pdf-lib
- ⏳ Version stamping and quote hashing

---

## Running Locally

### Prerequisites
- Any modern web browser
- A simple HTTP server (Python, Node, or VS Code Live Server)

### Option 1: Python (Easiest)

```bash
# Navigate to iTCR/docs directory
cd path/to/iTCR/docs

# Start HTTP server
python3 -m http.server 8080

# Open in browser
# Navigate to: http://localhost:8080/app/
```

### Option 2: Node.js

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to iTCR/docs directory
cd path/to/iTCR/docs

# Start server
http-server -p 8080

# Open in browser
# Navigate to: http://localhost:8080/app/
```

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Open `iTCR/docs/app/index.html` in VS Code
3. Right-click and select "Open with Live Server"
4. App opens automatically in your default browser

---

## Usage Guide

### Basic Workflow

1. **Open the App**
   - Navigate to `http://localhost:8080/app/` in your browser

2. **Option A: Manual Entry**
   - Fill in property information fields:
     - ZIP Code (required)
     - Roof Area (Mid, Low, High)
     - Complexity Level
     - Story Count
     - Current Roof Type
     - Etc.
   - Select desired product options (Metal, Architectural, 3-Tab)
   - Click "Generate Quote"
   - View draft quote preview

3. **Option B: Import from GPT**
   - Copy JSON output from iTCR Custom GPT
   - Paste into the yellow "Import from GPT" panel
   - Click "Load JSON"
   - Form fields auto-populate
   - Click "Generate Quote"

### JSON Import Format

The app accepts JSON in the following format (all fields optional):

```json
{
  "zip": "78703",
  "roof_area_mid": 2500,
  "roof_area_low": 2300,
  "roof_area_high": 2700,
  "complexity": "Moderate",
  "story_count": "2",
  "current_roof": "asphalt",
  "tear_off_type": "asphalt",
  "austin_city_limits": "yes",
  "products": ["Metal", "Architectural"]
}
```

**Alternative key names supported:**
- `roofAreaMid` or `roof_area_mid`
- `storyCount` or `story_count`
- `currentRoof` or `current_roof`
- `tearOffType` or `tear_off_type`
- `austinCityLimits` or `austin_city_limits`
- `selected_products` or `products`

---

## File Structure

```
iTCR/docs/
├── app/
│   └── index.html          # Main quote engine app (self-contained)
├── data/
│   ├── data_pack_version.json  # Data pack metadata (stub)
│   ├── pricing/            # (empty - future)
│   └── products/           # (empty - future)
├── 404.html                # GitHub Pages 404 handler
├── .nojekyll               # Disable Jekyll processing
└── README_APP.md           # This file
```

---

## What's Included (Extracted from SCSRRS)

### Preserved from SCSRRS:
- ✅ Clean, modern UI design system
- ✅ Responsive layout (mobile-friendly)
- ✅ Form validation and user experience
- ✅ Privacy-first messaging
- ✅ CSS styling (embedded in HTML)
- ✅ JavaScript form handling

### Removed from SCSRRS:
- ❌ ROI-specific calculations (insurance premium, energy savings, payback period)
- ❌ Insurance carrier dropdown
- ❌ URL parameter persistence (privacy concern)
- ❌ Navigation to results.html page
- ❌ ROI-specific marketing copy

### Added for iTCR:
- ✅ JSON import panel for GPT handoff
- ✅ Quote core form fields (complexity, story count, tear-off type)
- ✅ Multi-product selection checkboxes
- ✅ Quote draft preview (stub)
- ✅ Data pack version loader
- ✅ Austin city limits field (permit logic)
- ✅ Low/High roof area range fields

---

## Privacy & Security

### Client-Side Only
- **No uploads:** All processing happens in your browser
- **No API calls:** No data sent to external servers (except fetching local data pack JSON)
- **No tracking:** No analytics or tracking scripts
- **No cookies:** No browser storage used (yet)

### Data Pack Loading
- The app attempts to fetch `../data/data_pack_version.json` on page load
- This is a **local file fetch** (not an external API)
- If the file doesn't exist, app shows "Data pack unavailable" and continues working
- Future: Data packs will be generated via GitHub Actions and committed to repo

---

## Current Limitations (Phase 0 Shell)

### No Pricing Engine Yet
- Form captures inputs correctly
- Preview displays captured data
- **NO calculations performed** (totals show as "Not computed yet")
- This is intentional - pricing engine comes in Phase A

### No PDF Export Yet
- Quote preview is HTML-only
- Future: window.print() for basic PDF, or pdf-lib for advanced

### No Data Validation
- Basic HTML5 form validation only
- No schema enforcement on JSON import
- No business logic validation (e.g., roof area sanity checks)

### No State Persistence
- Closing browser loses form data
- No localStorage/sessionStorage yet
- Each session starts fresh

---

## Next Steps (Phase A Development)

### 1. Implement Pricing Engine
- Convert CSV files to JSON data packs
- Load data packs in browser
- Implement deterministic calculation logic:
  - Material costs by product
  - Labor by complexity tier
  - Business costs (overhead, profit, permits)
  - Regional adjustments by zip code

### 2. Generate Quotes
- Calculate totals for each selected product
- Display cost breakdowns
- Show ranges (low/mid/high if provided)
- Include assumptions and notes

### 3. PDF Export
- Implement window.print() styling
- Or integrate pdf-lib for custom PDFs
- Include version stamp and quote hash

### 4. Data Pack Automation
- GitHub Action to convert CSV → JSON
- Version stamping
- Automatic deployment to docs/data/

---

## Troubleshooting

### App doesn't load
- **Check HTTP server:** Make sure you're serving from `iTCR/docs` directory
- **Check URL:** Should be `http://localhost:8080/app/` (note the `/app/` path)
- **Check console:** Open browser DevTools (F12) and check for errors

### JSON import doesn't work
- **Check JSON syntax:** Use a JSON validator (jsonlint.com)
- **Check field names:** See supported key names above
- **Check error message:** App displays parse errors in red box

### Form doesn't submit
- **Check required fields:** ZIP, Roof Area Mid, Complexity, Story Count must be filled
- **Check product selection:** At least one product checkbox must be checked

### Data pack shows "unavailable"
- **This is expected:** The placeholder `data_pack_version.json` exists but isn't loaded properly yet
- **Not a problem:** App works fine without it (just shows stub message)
- **Future:** Will show actual version info when pricing engine is implemented

---

## Development Notes

### For Developers

**Modifying the UI:**
- Edit `docs/app/index.html` directly
- CSS is embedded in `<style>` tag
- JavaScript is embedded in `<script>` tag
- Refresh browser to see changes (no build step required)

**Adding Pricing Engine:**
- Load JSON data packs via `fetch()`
- Implement calculation functions in JavaScript
- Update `buildQuoteDraft()` to include totals
- Update `displayQuotePreview()` to show breakdown

**Testing:**
- No automated tests yet
- Manual testing via browser
- Future: Add Jest or similar for unit tests

---

## GitHub Pages Deployment

The app is designed to run on GitHub Pages.

### Current Setup
- **Path:** `/docs` (GitHub Pages source directory)
- **Entry:** `/docs/app/index.html`
- **URL:** https://justindbilyeu.github.io/iTCR/app/

### Files for GitHub Pages
- `.nojekyll` - Prevents Jekyll processing
- `404.html` - Custom 404 page
- `app/index.html` - Main application
- `data/` - Data packs (future)

---

## Changelog

### v0.1 (2026-01-05) - Initial Shell
- Extracted UX framework from SCSRRS-TCR
- Transformed ROI calculator to quote engine shell
- Added JSON import panel
- Added quote core form fields
- Removed URL parameter persistence (privacy)
- Removed results page navigation (single-page app)
- Added data pack version loader stub
- Created this README

---

## Contact & Support

**Project:** iTCR (Intelligent Texas Choice Roofing)
**Repository:** https://github.com/justindbilyeu/iTCR
**Documentation:** See `/docs` directory in repository

---

**Built with privacy. Deployed with transparency. Designed for customers.**
