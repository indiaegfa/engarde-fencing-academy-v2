# 🤺 En Garde Fencing Academy — Developer Guide (`readme-dev.md`)

Welcome to the development guide for the **En Garde Fencing Academy (EGFA)** web application. This document covers everything a developer needs to know to set up, develop, test, and deploy changes.

---

## 🌐 Production Architecture & Infrastructure Overview

* **Live Domain**: [`https://egfa.in`](https://egfa.in) and [`https://www.egfa.in`](https://www.egfa.in)
* **Domain Registrar**: **Hostinger** (Registered as `egfa.in`)
* **DNS Management**: **Cloudflare** (Nameservers: `carioca.ns.cloudflare.com`, `lars.ns.cloudflare.com`)
* **Hosting Platform**: **Cloudflare Pages** (Project connected to GitHub `origin/main`)
* **CI/CD**: **Fully Automated** — every push to the `main` branch triggers an automated build and edge deployment on Cloudflare Pages within 45–60 seconds.

---

## 💻 1. Prerequisites

Ensure you have the following installed on your development machine:

1. **Node.js**: `v20.x` or higher (LTS recommended) ([Download Node.js](https://nodejs.org/))
2. **pnpm**: `v10.x` or higher ([Install pnpm](https://pnpm.io/installation)):
   ```bash
   npm install -g pnpm
   ```
   *(Alternatively, `npm` can be used, but `pnpm` is the project's primary package manager).*
3. **Git**: Installed and configured with your name and email:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

---

## 🚀 2. Local Setup & Running the Site

### Step 1: Clone the Repository
```bash
git clone https://github.com/indiaegfa/engarde-fencing-academy-v2.git
cd engarde-fencing-academy-v2
```

### Step 2: Install Dependencies
```bash
pnpm install
```
*(If using npm: `npm install`)*

### Step 3: Start the Local Development Server
```bash
pnpm dev
```
*(If using npm: `npm run dev`)*

The server will spin up Vite with instant Hot Module Replacement (HMR).
* Open **[http://localhost:3000](http://localhost:3000)** in your browser.
* *Note: If port `3000` is occupied by another app, the server will automatically bind to the next available port (e.g. `3001`, `3002`) and print the URL in your terminal.*

---

## 📜 3. Available npm/pnpm Scripts

| Command | Action | When to Use |
| :--- | :--- | :--- |
| `pnpm dev` | Starts local development server with Vite HMR | Everyday local development |
| `pnpm build:client` | Builds client static assets into `dist/public/` | Testing production build locally |
| `pnpm build` | Builds both frontend & backend server bundle | Full-stack build test |
| `pnpm check` | Runs TypeScript type-checking (`tsc --noEmit`) | Before committing code |
| `pnpm test` | Runs the Vitest test suite | Verifying components/logic |
| `pnpm format` | Auto-formats code with Prettier | Keeping code style clean |

---

## 🌿 4. Git Commands Cheatsheet for Developers

### A. Pulling the Latest Code
Always pull the latest changes from GitHub before starting any new work:
```bash
# Check status first
git status

# Pull the latest changes from main branch
git pull origin main
```

---

### B. Checking Status & Reviewing Changes
See what files you have modified, added, or deleted:
```bash
# View list of changed files
git status

# View the exact line-by-line diff of what you changed
git diff
```

---

### C. Staging and Committing Changes
Once your changes are tested locally:
```bash
# Stage all modified and new files
git add .

# Or stage specific files only
git add client/src/pages/About.tsx client/src/components/Navbar.tsx

# Commit with a clear, descriptive message
git commit -m "Update coaching staff bios and tournament dates"
```

---

### D. Pushing Changes to Production
When you push to the `main` branch, **Cloudflare Pages automatically deploys the site live to `https://egfa.in`**:
```bash
git push origin main
```

---

### E. Working on a Feature Branch (Best Practice)
For large changes, work on a separate branch before merging to `main`:
```bash
# Create and switch to a new branch
git checkout -b feature/summer-camp-page

# Work on your code, then stage and commit:
git add .
git commit -m "Add Summer Camp 2026 page and registration link"

# Push the branch to GitHub:
git push -u origin feature/summer-camp-page

# When ready to merge into main:
git checkout main
git pull origin main
git merge feature/summer-camp-page
git push origin main
```

---

### F. Undoing Mistakes / Discarding Local Changes
```bash
# Discard modifications in a specific file (revert to last commit)
git restore client/src/pages/Home.tsx

# Temporarily stash uncommitted changes to switch branches
git stash

# Re-apply stashed changes later
git stash pop
```

---

## 🏗️ 5. Project Structure & Conventions

```
engarde-fencing-academy-v2/
├── client/
│   ├── index.html                 # Main HTML entry with favicon & Google Fonts
│   ├── public/                    # Static public assets
│   │   ├── favicon.png            # Browser tab icon
│   │   ├── apple-touch-icon.png   # iOS home screen icon
│   │   ├── _redirects             # Cloudflare Pages SPA rewrite rule (/* /index.html 200)
│   │   └── images/                # 70+ bundled academy photos, logos, coach portraits
│   └── src/
│       ├── main.tsx               # React 19 root mounting
│       ├── App.tsx                # Route definitions using Wouter (30+ pages)
│       ├── index.css              # Tailwind CSS v4 design tokens and brand colors
│       ├── components/            # Reusable UI components (Navbar, Footer, Hero, etc.)
│       │   └── ui/                # Accessible Radix UI components (buttons, dialogs, cards)
│       └── pages/                 # Page components (Home, Programs, Blog, Gallery, etc.)
├── deployment.md                  # Detailed hosting & cloud deployment guide
├── readme-dev.md                  # This developer reference guide
├── package.json                   # Dependencies and scripts
└── vite.config.ts                 # Vite bundler configuration
```

### Key Conventions:
1. **Brand Colors**:
   - Navy: `#0d1f3c` / `#1a2e5a`
   - Red Accent: `#c8102e`
   - Gold Accent: `#e8a020`
   - Font: `'Fira Sans', sans-serif`
2. **Local Images**:
   - Always place photos in `client/public/images/`.
   - In components, reference them via `/images/your-image-name.jpg` (do not rely on external cloud image hosts).
3. **Single Page Application (SPA) Routing**:
   - When adding a new route, add it to `client/src/App.tsx`.
   - The file `client/public/_redirects` ensures that refreshing an internal page (e.g. `/about` or `/programs`) serves `index.html` without throwing a 404.

---

## 🧪 6. Pre-Push Quality Checklist

Before running `git push origin main`, perform this quick 3-step check:

1. **Type Check**:
   ```bash
   pnpm check
   ```
   *(Ensures zero TypeScript errors).*
2. **Build Validation**:
   ```bash
   pnpm build:client
   ```
   *(Ensures the production bundle builds cleanly).*
3. **Visual Check**:
   - Verify page layout on both Desktop and Mobile screen sizes using browser DevTools (`Ctrl + Shift + M` / `Cmd + Shift + M`).
   - Check that navigation links and buttons work properly.

---

## 🆘 7. Common Troubleshooting

* **Issue: "Port 3000 is already in use"**
  * *Solution*: The dev server automatically detects this and picks port 3001. Check the console output for the active URL.
* **Issue: Changes not appearing on live site after `git push`**
  * *Solution*: Check your [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Deployments** to view the build logs. It usually finishes within 1 minute.
  * Perform a hard refresh in your browser with `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac) to bypass local browser cache.
* **Issue: Subpage returns 404 on reload**
  * *Solution*: Ensure `client/public/_redirects` exists with `/* /index.html 200`.
