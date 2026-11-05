# AGENTS.md — Gajanan Pumps & Systems Workspace Guide

> **CRITICAL RULE FOR ALL AGENTS (READ BEFORE ANY ACTION):**  
> **DO NOT build, code, generate page files, install packages, or make structural modifications to page contents yet.**  
> The client/user is providing individual reference design images for each page one by one.  
> **Wait until the user has shared the page designs and explicitly gives the instruction: `"Start building"`** before writing or altering page implementations. All page routes currently use temporary on-brand placeholders or stubs.

---

## 1. Project Overview & Mission

**Client:** Gajanan Pumps & Systems  
**Domain:** Industrial fluid handling, specializing in Progressive Cavity (Single Screw) Pumps and extrusion systems for viscous, abrasive, shear-sensitive, and solid-laden media.  
**Objective:** Deliver a complete, responsive, premium industrial website accompanied by a secure Admin Panel for enquiry management, powered by Next.js 15, React 19, Tailwind CSS, TypeScript, and Supabase.

### Primary Sources of Truth
1. **Design Specifications:** Visual reference design images provided page-by-page by the user.
2. **Technical & Company Content:** Official company brochure and technical specifications provided by the user.  
   *(Strict rule: Never invent company claims, certifications, or technical ratings. Every specification must stem from authentic company material).*

---

## 2. Tech Stack & Environment Architecture

| Layer | Technology | Version / Details |
|---|---|---|
| **Framework** | Next.js (App Router) | `15.5.29` |
| **Runtime / Library** | React / React DOM | `19.1.1` |
| **Language** | TypeScript | `5.8.3` (Strict mode) |
| **Styling** | Tailwind CSS + PostCSS + Autoprefixer | `3.4.19` with custom theme extensions |
| **Icons** | Lucide React | `^0.468.0` |
| **Forms & Validation** | React Hook Form + Zod + `@hookform/resolvers` | `react-hook-form ^7.91`, `zod ^4.6`, `@hookform/resolvers ^7.0` |
| **Database & Auth** | Supabase JS Client | `@supabase/supabase-js 2.100.0` |
| **Class Utilities** | `clsx` + `tailwind-merge` | Standard `cn(...)` utility helper |
| **Deployment Target** | GitHub + Netlify | `@netlify/plugin-nextjs` via `netlify.toml` |

---

## 3. Brand Identity & Design System

The visual design communicates heavy engineering precision, cleanliness, reliability, and high-tech manufacturing excellence.

### Color Palette
- **Deep Industrial Navy (Primary Backgrounds & Contrast):**
  - `navy-950`: `#000F27` (Deepest hero/footer background)
  - `navy-900`: `#001736` (Section containers, dark cards, headers)
  - `navy-800`: `#021B3D`
  - `navy-700`: `#082B55`
  - `navy-600`: `#123F72`
  - `navy-500`: `#2A5C8F`
- **Brand Yellow / Amber (High-Visibility Accent & CTAs):**
  - `brand-yellow`: `#FFC907` (Core accent, indicator bars, primary CTA button)
  - `brand-yellow-soft`: `#FFD84D` (Hover state)
  - `brand-yellow-deep`: `#E9B400` (Active state / borders)
- **Neutral Light Panels (Clean Contrast Surfaces):**
  - `brand-mist`: `#E9F1F9` (Product card backgrounds)
  - `brand-panel`: `#EFF5FC` (Section card wrapper)
  - Light gradients: `linear-gradient(180deg, #DCEBF9 0%, #EDF5FD 46%, #F7FBFF 100%)`
  - Body text: `#0B1B33` (`brand-ink`)
  - White: `#FFFFFF`

### Typography
- Primary Sans: **Manrope** (`var(--font-manrope)`), variable Google font with system font fallbacks.

### Motion & Micro-Interactions
- Custom timing curve: `cubic-bezier(0.22, 1, 0.36, 1)` (`ease-premium`).
- Hover elevation (`-translate-y-0.5` or `-translate-y-1` with shadow elevation).
- Subtle glow radial gradients behind dark sections (`radial-gradient(ellipse, #0C3D72, #001A3F)`).

---

## 4. Current Repository Inventory & Status

```
gajanan-pumps/
├── .data/
│   └── enquiries.jsonl          # Local fallback storage when Supabase is unconfigured in dev
├── .env.example                 # Template for public site URL & Supabase keys
├── .gitignore                   # Ignores .next, node_modules, .env*.local, .data/
├── netlify.toml                 # Netlify deployment configuration (Node 20 + nextjs plugin)
├── next.config.ts               # Security headers, image optimization (avif/webp)
├── package.json                 # Dependencies & scripts (dev, build, start, typecheck)
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Custom colors (navy, brand), animations, screens
├── tsconfig.json                # TypeScript compiler config
├── supabase/
│   └── schema.sql               # Enquiries table DDL, status check enum, RLS policies
├── public/
│   ├── icon.png                 # Site favicon / app icon
│   └── images/
│       ├── logo.png             # Official Gajanan Pumps & Systems logo
│       ├── monogram.png         # Monogram logo mark
│       ├── hero-pump.png        # Complete pump banner image
│       ├── hero-pump-cutout.png # Transparent cutout pump for hero overlay
│       ├── products/            # 7 product images (product-1.png to product-7.png)
│       └── industries/          # 6 industry images (industry-1.png to industry-6.png)
├── lib/
│   ├── industries.ts            # Industry metadata & slugs (6 industries)
│   ├── navigation.ts            # Main header nav, dropdown links, footer links, trust badges
│   ├── products.ts              # Product list (7 models), slugs, titles, categories
│   ├── supabase.ts              # Server-side Supabase client initialization
│   ├── utils.ts                 # cn() class merge helper
│   └── validation.ts            # Zod validation schema for enquiry submissions & honeypot
├── components/
│   ├── home/
│   │   ├── Hero.tsx             # Homepage hero with SVG sweep curve, trust badges, CTAs
│   │   ├── ProductPortfolio.tsx # Product grid with instant enquiry trigger
│   │   └── Industries.tsx       # Skewed industrial card grid with custom SVG glyphs
│   ├── layout/
│   │   ├── Header.tsx           # Sticky nav, dropdown menus, mobile drawer, search trigger
│   │   ├── Footer.tsx           # Company details, footer navigation, legal, trust badges
│   │   ├── PagePlaceholder.tsx  # Temporary holding component for unbuilt routes
│   │   └── SearchDialog.tsx     # Full modal search across products, industries, and pages
│   ├── providers/
│   │   └── EnquiryProvider.tsx  # Global React Context managing modal state & pre-selected items
│   └── ui/
│       ├── EnquiryModal.tsx     # Animated modal enquiry form with validation & API dispatch
│       ├── IndustryGlyph.tsx    # Custom inline SVG icons for each industry
│       ├── Logo.tsx             # Standardized linked company logo component
│       └── Reveal.tsx           # IntersectionObserver-based reveal animations
└── app/
    ├── globals.css              # Tailwind base, utilities, shell container, button classes
    ├── layout.tsx               # Root layout with Manrope font, Header, Footer, EnquiryProvider
    ├── page.tsx                 # Home page (Hero, ProductPortfolio, Industries)
    ├── api/enquiries/route.ts   # POST endpoint: rate limiting, honeypot, Supabase insert + fallback
    ├── about/page.tsx           # STUB (PagePlaceholder) -> Awaiting design & video carousel
    ├── products/page.tsx        # STUB (PagePlaceholder) -> Awaiting design
    ├── industries/page.tsx      # STUB (PagePlaceholder) -> Awaiting design
    ├── engineering/page.tsx     # STUB (PagePlaceholder) -> Awaiting design
    ├── service-support/page.tsx # STUB (PagePlaceholder) -> Awaiting design
    ├── resources/page.tsx       # STUB (PagePlaceholder) -> Awaiting design
    ├── contact/page.tsx         # STUB (PagePlaceholder) -> Awaiting design & embedded form
    └── admin/                   # NOT YET IMPLEMENTED -> Supabase Auth & enquiry management
```

---

## 5. Implementation Roadmap & Detailed Requirements

When the user gives the green light (`"Start building"`) and supplies page references, implement each module according to these architectural requirements:

### A. Pages to Implement
1. **Home (`/`)**:
   - Maintain established hero, product portfolio, and industry showcase.
   - Expand sections based on design reference (e.g., engineering capabilities, client trust, testimonials/stats).
2. **About Us (`/about`)**:
   - Company background, mission, infrastructure, and DIN EN ISO 9001 quality system.
   - **Video Carousel Requirement:** Build an interactive video carousel for company history and manufacturing operations. It must be data-driven (e.g. from an array or config file `lib/videos.ts`) so new videos can be added easily without redesigning the component or layout.
3. **Products (`/products` & optional dynamic routes `/[slug]`)**:
   - Comprehensive catalogue covering all 7 models:
     1. `NYMBT/TT`: General Purpose Progressive Cavity Pump
     2. `NYMB-C/TT`: Cardinal Joint Progressive Cavity Pump
     3. `NYMB-W/TT`: Hopper Pump
     4. `NYMB-B/TT`: Chemical Pump
     5. `NYMB-H/TT`: Hygienic Pump
     6. `NYMB-D/TT`: Dosing & Metering Pump
     7. `Namkeen Extruder`: High-viscosity food extrusion system
   - Technical specifications, operating parameters (capacity, pressure, viscosity, temperature), applications, and direct "Request Quote" buttons that pass the product name into the enquiry modal.
4. **Industries (`/industries`)**:
   - In-depth process application breakdowns for:
     1. Environment & Energy (sludge, wastewater, biogas)
     2. Chemical, Pulp & Paper (dosing, aggressive chemicals, pulp stock)
     3. Food & Pharmaceutical (sanitary pumping, fruit pastes, dairy, cosmetics)
     4. Vegetable Oil & Refinery (crude oil, bleaching earth, fatty acids)
     5. Oil & Gas (drilling muds, oily water, crude transfer)
     6. Namkeen Manufacturing (dough extrusion, savory mix pumping)
5. **Engineering (`/engineering`)**:
   - Pump selection methodology, stator/rotor material pairing (NBR, EPDM, FKM, Tool Steel, SS 316, etc.), hydraulic characteristics, and custom turnkey skid engineering.
6. **Service & Support (`/service-support`)**:
   - Genuine spare parts availability (rotors, stators, coupling rods, mechanical seals).
   - Maintenance, on-site commissioning, pump refurbishing, troubleshooting guides.
7. **Resources (`/resources`)**:
   - Downloadable technical documentation, product brochures (PDF), catalog downloads, and dimension sheets.
   - Ensure download buttons and links are functional (providing placeholder or authentic brochure files in `/public/downloads/`).
8. **Contact Us (`/contact`)**:
   - Plant location, registered office address, phone numbers, email addresses, working hours, and embedded enquiry contact form with full validation.

---

### B. Enquiry System Architecture
- **Client Validation:** Form powered by `react-hook-form` + `zod` schema (`lib/validation.ts`).
  - Fields: `name` (required, 2-80 chars), `company` (optional), `email` (valid email), `phone` (regex-validated international/Indian numbers), `product` (optional), `message` (required, 10-1500 chars), hidden `website` honeypot field.
- **Server Route (`/api/enquiries/route.ts`):**
  - Rate limiting (in-memory IP tracking, 8 requests per 10-minute window).
  - Honeypot check: Bots filling `website` silently return 200 without saving.
  - Safe Zod parse of incoming body.
  - Supabase Insertion into `public.enquiries`.
  - Fallback: If Supabase credentials are not yet configured in local environment, appends safely to `.data/enquiries.jsonl` so development testing is never blocked.

---

### C. Admin Panel & Authentication Requirements
To fulfill the user's requirement for a secure Admin Panel:
1. **Routing:**
   - `/admin/login`: Secure sign-in form using Supabase Auth (`signInWithPassword`).
   - `/admin` or `/admin/dashboard`: Protected route (verified via Supabase Auth session / middleware).
2. **Dashboard Features:**
   - **Enquiry Feed:** Tabular and card view of customer enquiries sorted by `created_at desc`.
   - **Status Management:** Ability to update status (`new` → `contacted` → `qualified` → `closed`).
   - **Search & Filters:** Search by customer name, company, email, phone, or message text. Filter by status or target product.
   - **Export:** Quick export to CSV/JSON for sales team follow-up.
3. **Security Constraints:**
   - **Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser or in `NEXT_PUBLIC_*` variables.**
   - All admin read/update operations must either use an authenticated Supabase user token with proper RLS policies, or run through server-side Route Handlers / Server Actions using `SUPABASE_SERVICE_ROLE_KEY`.

---

### D. Supabase Database Schema
The database is defined in `supabase/schema.sql`:
- **Table:** `public.enquiries`
  - `id` (UUID, default `gen_random_uuid()`)
  - `created_at` (TIMESTAMPTZ, default `now()`)
  - `name` (TEXT, NOT NULL)
  - `company` (TEXT)
  - `email` (TEXT, NOT NULL)
  - `phone` (TEXT, NOT NULL)
  - `product` (TEXT)
  - `message` (TEXT, NOT NULL)
  - `source` (TEXT, default `'website'`)
  - `status` (TEXT, default `'new'`, CHECK `status in ('new', 'contacted', 'qualified', 'closed')`)
  - `user_agent` (TEXT)
- **Row Level Security (RLS):**
  - Public `anon` users have `INSERT` permission only.
  - Public users have **no `SELECT`, `UPDATE`, or `DELETE`** permissions.
  - Only authenticated admin accounts can read and manage enquiries.

---

## 6. Environment Variables Reference

Defined in `.env.example`:
```bash
# Public site URL used for metadata (canonical/OG)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase API (Project Settings -> API)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Server-Only Service Role Key (Admin Panel operations, never client-side)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 7. Operational Rules for Agents Working on this Repo

1. **Wait for Reference Images:** Do not write speculative UI layouts for pages whose design images have not yet been provided.
2. **Maintain Type Integrity:** Run `npm run typecheck` (`tsc --noEmit`) before completing any task. Zero TypeScript errors allowed.
3. **Strict Content Integrity:** Use genuine specifications, product names, and descriptions from the provided brochure. Do not invent marketing slogans or fabricate certifications.
4. **Responsive First:** Test every component down to 360px mobile viewport, tablet (768px), laptop (1024px), desktop (1440px), and ultrawide (1600px+).
5. **Accessibility (a11y):** All interactive buttons and links must have accessible names, proper focus rings (`focus-visible:ring-brand-yellow`), and ARIA landmarks.
6. **Reusable Components:** Shared UI patterns must reside in `@/components/ui/` or `@/components/layout/`. Avoid monolithic 1000-line single-file pages.
7. **Clean Commits & Documentation:** Keep changes modular, descriptive, and well-structured.
