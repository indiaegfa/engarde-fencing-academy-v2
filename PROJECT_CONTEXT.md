# En Garde Fencing Academy — Project Context & Architecture

This document serves as the persistent source of truth for the En Garde Fencing Academy web application architecture, design tokens, typography, component hierarchy, route catalog, and offline asset management.

---

## 1. Project Overview & Mission

**En Garde Fencing Academy** is Pune's premier fencing institution founded by Shiv Chhatrapati Awardee & international fencer **Shweta Chandaliya Avad**. The platform is designed to:
- Showcase world-class training programs across all three Olympic fencing disciplines (Foil, Épée, Sabre).
- Educate students, parents, and schools about competitive fencing pathways, college recruitment, and athletic benefits.
- Power admissions and registrations for beginner to elite competitive batches.
- Highlight social impact through the **Kosuke Sports Foundation** (Section 8 non-profit with 12A & 80G certification), providing free coaching, gear, and competition pathways to talented underprivileged athletes from Pune Municipal Corporation (PMC) schools.
- Share coaching philosophy, student athlete journeys, and sports psychology articles through the Academy **Blog**.

---

## 2. Technology Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) (`react@^19.2.1`, `react-dom@^19.2.1`)
- **Routing**: [Wouter](https://github.com/molefrog/wouter) (`wouter@^3.3.5`) with client-side routing & patch
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`tailwindcss@^4.1.14`, `@tailwindcss/vite@^4.1.3`, `tw-animate-css@^1.4.0`)
- **UI Components & Primitives**: [Radix UI](https://www.radix-ui.com/) accessible primitives (Accordion, Dialog, Tooltip, Popover, Dropdown, Tabs, etc.)
- **Icons**: [Lucide React](https://lucide.dev/) (`lucide-react@^0.453.0`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (`framer-motion@^12.23.22`)
- **State Management & Data Fetching**: [TanStack Query v5](https://tanstack.com/query) (`@tanstack/react-query@^5.90.2`)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) (`react-hook-form@^7.64.0`), [Zod](https://zod.dev/) (`zod@^4.1.12`), `@hookform/resolvers`
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) (`sonner@^2.0.7`)

### Backend & API
- **Runtime**: Node.js (v20+ recommended) with TypeScript (`tsx@^4.19.1` / `esbuild@^0.25.0`)
- **Server Framework**: [Express](https://expressjs.com/) (`express@^4.21.2`)
- **API Protocol**: [tRPC v11](https://trpc.io/) (`@trpc/server`, `@trpc/client`, `@trpc/react-query`) with `superjson` serialization
- **Database & ORM**: [Drizzle ORM](https://orm.drizzle.team/) (`drizzle-orm@^0.44.5`, `drizzle-kit@^0.31.4`, `mysql2`)
- **Authentication**: JWT token management with [Jose](https://github.com/panva/jose) & OAuth route handlers

### Build & Tooling
- **Bundler & Dev Server**: [Vite 7](https://vitejs.dev/) (`vite@^7.1.7`)
- **Cross-Platform Environment**: `cross-env`
- **TypeScript**: TypeScript 5.9 (`tsc --noEmit` check)
- **Code Formatter & Linter**: Prettier 3.6

---

## 3. Directory Structure

```
engarde-fencing-academy-v2/
├── client/
│   ├── index.html                 # Entry HTML with Fira Sans Google Font & meta tags
│   ├── public/
│   │   └── images/                # 69 local high-resolution static assets (offline-ready)
│   │       ├── logo.png           # En Garde Academy brand logo
│   │       ├── KosukeLogo_77010185.jpeg # Kosuke Sports Foundation logo
│   │       ├── DPS_Logo_b0acf486.png    # Delhi Public School Hinjewadi logo
│   │       ├── VidyaValleyLogo_25e2ca36.png # Vidya Valley School Sus logo
│   │       ├── ShwetaChandaliyaAvad_7d7241d5.jpg # Head Coach Shweta portrait
│   │       ├── Coach_Bommai_3b0f57f3.webp # Coach Bommai portrait
│   │       ├── Coach_Victor_4910d054.webp # Coach Victor portrait
│   │       ├── Coach_Benish_09ff7ac2.webp # Coach Benish portrait
│   │       ├── Surabhi_Coach_7f3c994f.webp # Sports Physiotherapist Surabhi
│   │       ├── BeginnersProgram_d72d49a3.webp # Beginners banner
│   │       ├── OpenFencing_6e32dac3.webp # Open Fencing banner
│   │       ├── PrivateFencingLessons_11414a46.webp # Private lessons banner
│   │       ├── Snc_e2e219e3.webp  # Strength & Conditioning banner
│   │       ├── JeejauPatil_916f38e8.jpg # Hall of Fame: Jeejau Patil
│   │       ├── shauryaingawale_hof_d28857bc.webp # Hall of Fame: Shaurya
│   │       ├── RajveerChokhat_hof_e6e1c569.webp  # Hall of Fame: Rajveer
│   │       ├── AhaanDaga_2025_8cdc1d97.jpeg # Hall of Fame: Ahaan Daga
│   │       ├── VidhiPatil_25d26139.jpeg # Hall of Fame: Vidhi Patil
│   │       ├── AnantSathe_4efbcf96.jpeg # Hall of Fame: Anant Sathe
│   │       ├── KavishUttekar_5595e356.jpg # Hall of Fame: Kavish Uttekar
│   │       ├── Parthi_2296dd6a.jpeg # Student athlete Parthi
│   │       ├── Vedika_2fbea782.webp # Athlete Vedika
│   │       └── ...                # 45+ additional competition & training photos
│   └── src/
│       ├── App.tsx                # App shell, theme providers, & route definitions (30+ routes)
│       ├── main.tsx               # Client React DOM mounting
│       ├── index.css              # Tailwind v4 theme tokens, resets, brand utilities
│       ├── const.ts               # Constant definitions
│       ├── components/            # Reusable page sections & UI components
│       │   ├── Navbar.tsx         # Responsive navbar with mega menus & top bar
│       │   ├── Footer.tsx         # Comprehensive footer with quick links & Kosuke info
│       │   ├── HeroSection.tsx    # Impactful hero with stats counters & CTAs
│       │   ├── LogoStrip.tsx      # Academy credentials & social links strip
│       │   ├── AboutSection.tsx   # About story, weapon breakdown & achievements
│       │   ├── CoachesSection.tsx # Certified coach profiles with large portrait cards
│       │   ├── ProgramsSection.tsx# Training batches, banners & Open Fencing
│       │   ├── GallerySection.tsx # 29-photo filterable gallery with lightbox modal
│       │   ├── NewsSection.tsx    # News, upcoming tournaments & community stories
│       │   ├── PartnershipsSection.tsx # School partner logos (DPS, Vidya Valley) & photos
│       │   ├── ContactSection.tsx # Contact form & location details
│       │   ├── AIChatBox.tsx      # Interactive AI assistant modal
│       │   ├── ErrorBoundary.tsx  # React error boundary component
│       │   └── ui/                # shadcn/ui components (button, dialog, card, etc.)
│       ├── contexts/              # ThemeContext & global state providers
│       ├── hooks/                 # Custom React hooks
│       ├── lib/                   # Utility helpers (`cn`, formatting, query client)
│       └── pages/                 # Full page views (30+ routes)
│           ├── Home.tsx           # Landing page assembling core sections
│           ├── About.tsx          # About landing page
│           ├── Coaches.tsx        # Dedicated coaching staff page
│           ├── Programs.tsx       # Dedicated programs & training page
│           ├── Gallery.tsx        # Dedicated full gallery page
│           ├── News.tsx           # Dedicated news & events page
│           ├── Partners.tsx       # School partnerships page
│           ├── Enroll.tsx         # Admission & registration page
│           ├── Contact.tsx        # Contact & inquiry page
│           ├── Events.tsx         # Tournaments & community events page
│           ├── Sponsor.tsx        # Athlete & academy sponsorship page
│           ├── Donate.tsx         # Kosuke Foundation tax-exempt donation page
│           ├── Giving.tsx         # Community impact & philanthropy page
│           ├── Blog.tsx           # Blog directory hub
│           ├── NotFound.tsx       # 404 error page
│           ├── about/             # Subpages: OurStory, MeetFounder, Mission, Achievements (Hall of Fame)
│           ├── fencing/           # Subpages: WhatIsFencing, WhyFencing, CompetitionPathway, FencingColleges
│           ├── programs/          # Subpages: Beginners, Elementary, Intermediate, Competitive, PrivateLessons, StrengthConditioning, OpenFencing
│           └── blog/              # Subpages: BeyondTheStrip, CompetitiveOrCurious, PerformanceDip
├── server/
│   ├── _core/
│   │   ├── index.ts               # Server entry point with port resolution & fallback
│   │   ├── context.ts             # tRPC context setup
│   │   ├── oauth.ts               # OAuth route handlers
│   │   ├── storageProxy.ts        # Storage proxy routing
│   │   └── vite.ts                # Vite dev server middleware / static file server
│   ├── routers/                   # tRPC API routers
│   ├── db.ts                      # Database connection setup
│   └── storage.ts                 # Storage helpers
├── shared/                        # Shared TypeScript types and schemas
├── package.json                   # Project manifest & cross-env scripts
└── tsconfig.json                  # TypeScript compiler configuration
```

---

## 4. Complete Route Catalog (30+ Routes)

| Route Path | Page Component | Category | Description |
| :--- | :--- | :--- | :--- |
| `/` | `Home.tsx` | Main | Full landing page aggregating hero, logo strip, about, programs, coaches, gallery, news, and contact |
| `/about` | `About.tsx` | About | Academy background, philosophy, achievements, and foundation linkage |
| `/about/story` | `OurStory.tsx` | About Subpage | Journey and history of En Garde Fencing Academy in Pune |
| `/about/founder` | `MeetFounder.tsx` | About Subpage | Profile of Shweta Chandaliya Avad (Shree Shiv Chhatrapati Awardee) |
| `/about/mission` | `Mission.tsx` | About Subpage | Academy core mission, values, and Olympic vision |
| `/about/achievements` | `Achievements.tsx` | About Subpage | Athlete Hall of Fame (9 champions), medals tally, and stats |
| `/fencing/what-is-fencing` | `WhatIsFencing.tsx` | Fencing Subpage | Rules, weapon types (Foil, Épée, Sabre), and gear explanation |
| `/fencing/why-fencing` | `WhyFencing.tsx` | Fencing Subpage | Physical, mental, strategic, and cognitive benefits of fencing |
| `/fencing/competition-pathway`| `CompetitionPathway.tsx`| Fencing Subpage | Progression from school leagues to Nationals and Olympic Games |
| `/fencing/colleges` | `FencingColleges.tsx` | Fencing Subpage | Higher education pathways, university recruitment, and scholarships |
| `/programs` | `Programs.tsx` | Programs | Program tiers catalog from grassroot beginners to elite competition |
| `/programs/beginners` | `Beginners.tsx` | Programs Subpage | Entry-level training introducing fundamental footwork and blade safety |
| `/programs/elementary` | `Elementary.tsx` | Programs Subpage | Skill development, target practice, and tactical games |
| `/programs/intermediate` | `Intermediate.tsx`| Programs Subpage | Bout strategy, refereeing, and district/state preparation |
| `/programs/competitive` | `Competitive.tsx` | Programs Subpage | High-performance training, national championship preparation |
| `/programs/private-lessons` | `PrivateLessons.tsx` | Programs Subpage | 1-on-1 personalized technique refinement with senior coaches |
| `/programs/strength-conditioning`| `StrengthConditioning.tsx`| Programs Subpage | Fencing-specific agility, core stability, and injury prevention |
| `/programs/open-fencing` | `OpenFencing.tsx` | Programs Subpage | Open bouting sessions, electric scoring pistes, and sparring passes |
| `/blog` | `Blog.tsx` | Blog | Academy articles directory & thought leadership hub |
| `/blog/beyond-the-strip` | `BeyondTheStrip.tsx` | Blog Article | Character, academics, and discipline through fencing |
| `/blog/competitive-or-curious` | `CompetitiveOrCurious.tsx` | Blog Article | Nurturing curiosity vs early competitive pressure in youth sports |
| `/blog/performance-dip-no-one-talks-about` | `PerformanceDip.tsx` | Blog Article | Sports psychology guide to overcoming athletic plateaus |
| `/coaches` | `Coaches.tsx` | Main | Certified coaching staff portraits, credentials, and coaching philosophy |
| `/gallery` | `Gallery.tsx` | Main | 29-photo filterable showcase (Training, Competition, Community, Events) |
| `/news` | `News.tsx` | Main | Academy announcements, upcoming summer camps, and tournament updates |
| `/partners` | `Partners.tsx` | Main | School curriculum integration & institutional partnerships (DPS, Vidya Valley) |
| `/enroll` | `Enroll.tsx` | Conversion | Interactive enrollment registration form with schedule selection |
| `/contact` | `Contact.tsx` | Conversion | Direct inquiry form, Google Maps location, WhatsApp, and phone contacts |
| `/events` | `Events.tsx` | Engagement | Happy Streets, Sports Expo, training camps, and community outreach |
| `/sponsor` | `Sponsor.tsx` | Philanthropy | Corporate sponsorship tiers and athlete adoption programs |
| `/donate` | `Donate.tsx` | Philanthropy | 12A/80G tax-exempt donation portal for Kosuke Sports Foundation |
| `/giving` | `Giving.tsx` | Philanthropy | Social impact report, PMC school initiatives, and community stories |
| `/support-the-mission` | `Giving.tsx` | Philanthropy | Alias to unified social impact and philanthropy portal |
| `/404` | `NotFound.tsx` | Utility | Custom branded 404 page with quick navigation back to home |

---

## 5. Design System, Brand Tokens & Typography

### Brand Color Tokens (Tailwind v4 / CSS Variables)

```css
:root {
  --brand-navy:      #0d1f3c; /* Primary dark background & headings */
  --brand-blue:      #1a2e5a; /* Deep athletic navy accent */
  --brand-red:       #c8102e; /* Primary brand red — energetic accent & CTAs */
  --brand-red-dark:  #a00d24; /* Hover/active states for primary red */
  --brand-gold:      #e8a020; /* Trophy, championship, and accent gold */
  --brand-white:     #ffffff; /* Clean white background & contrast text */
  --brand-offwhite:  #f5f6f8; /* Soft background tint for alternating sections */
  --brand-grey:      #6b7280; /* Body copy & secondary descriptions */
  --brand-light:     #e8ecf4; /* Subtle borders & card backgrounds */
}
```

### Typography
- **Primary Body & Display Font**: **Fira Sans** (`Google Fonts: 300, 400, 500, 600, 700, 800, 900`)
- **Button & Accent Font**: **Oswald** (`sans-serif`)

---

## 6. Server Architecture & Local Execution

- **Entry Point**: `server/_core/index.ts`
  - Sets default `process.env.NODE_ENV = process.env.NODE_ENV || "development"`.
  - Probes available ports starting from `PORT` (default: 3000) with automatic fallback.
  - In development mode: mounts Vite dev middleware with hot module replacement (HMR).
  - In production mode: serves precompiled static assets from `dist/public`.
  - Mounts tRPC Express middleware at `/api/trpc`.
  - Mounts OAuth routes at `/api/oauth`.
