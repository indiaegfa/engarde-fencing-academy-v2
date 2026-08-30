# 🤺 En Garde Fencing Academy — Web Application

Official web application for **En Garde Fencing Academy**, Pune's premier fencing institution founded by Shiv Chhatrapati Awardee & international fencer Shweta Chandaliya Avad.

---

## 🚀 Quick Start

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**: `v20.x` or higher ([Download Node.js](https://nodejs.org/))
- **pnpm**: `v10.x` or higher ([Install pnpm](https://pnpm.io/installation)):
  ```bash
  npm install -g pnpm
  ```

---

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd engarde-fencing-academy-v2
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

---

### Running Locally

Start the local development server with live reload:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> [!NOTE]
> If port `3000` is currently occupied by another process, the server will automatically find and bind to the next available port (e.g., `3001`, `3002`, etc.) and log the active URL in your terminal.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `pnpm dev` | `cross-env NODE_ENV=development tsx watch server/_core/index.ts` | Starts development server with Vite HMR |
| `pnpm build` | `vite build && esbuild server/_core/index.ts ...` | Builds frontend & backend bundles into `dist/` |
| `pnpm start` | `cross-env NODE_ENV=production node dist/index.js` | Runs production server |
| `pnpm check` | `tsc --noEmit` | Validates TypeScript types across the entire project |
| `pnpm format`| `prettier --write .` | Formats all code files using Prettier |
| `pnpm test` | `vitest run` | Executes unit and integration test suite |

---

## 🏗️ Architecture & Features

- **30+ Dedicated Routes**: Full coverage for training programs, open bouting sessions, weapon breakdowns (Foil, Épée, Sabre), competition pathways, coaching bios, school partnerships, thought leadership blog articles, event registrations, and donations.
- **Athlete Hall of Fame**: Dedicated spotlight on 9 state, national, and international champions with portrait cards, medal tallies, and achievements.
- **Academy Blog**: Full blogging system with 3 in-depth thought leadership articles on student-athlete development, curiosity vs competition, and navigating performance plateaus.
- **Offline Resilience**: All 69 high-resolution photos, coach portraits, and school partner logos are bundled locally in `client/public/images/`, removing runtime external cloud dependencies.
- **Modern UI / UX**: Built with React 19, Tailwind CSS v4, Radix UI primitives, Lucide icons, and Framer Motion animations.
- **Cross-Platform Compatibility**: Full Windows and POSIX support using `cross-env` for environment variable handling.
- **Social Impact**: Dedicated section for the **Kosuke Sports Foundation** (Section 8 non-profit with 12A/80G tax exemptions) supporting underprivileged athletes from Pune Municipal Corporation (PMC) schools.

For detailed architecture, design tokens, color palette, and component hierarchy, see [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

---

## 📄 License
MIT
