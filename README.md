# 🚀 Maalav Patadiya — Digital Portfolio

> **Software Development Engineer · Full-Stack & Mobile Developer · Quantum Cryptography Researcher**
>
> B.Tech Computer Engineering — Pandit Deendayal Energy University

A modern, blockchain-inspired digital portfolio built with React, TypeScript, and Express — featuring interactive ML demos, a research spotlight modal, and a real-time developer terminal widget.

---

## ✨ Features

- **Hero Section** — Full-screen landing with gradient text, social links, and smooth scroll navigation
- **About Section** — Professional summary with background and academic context
- **Projects Section** — Filterable project cards (Research, Mobile, ML, Geospatial/Web) with an interactive **ML Simulation Playground** embedded inline
- **Research Spotlight Modal** — Deep-dive modal with the quantum hardware pipeline diagram for the PKE research project
- **Skills Section** — Icon grid grouped by category (Technical & Finance)
- **Experience Section** — Vertical timeline with achievements per role
- **Contact Section** — Two-column layout with a functional email contact form (EmailJS) and social links
- **Developer Terminal Widget** — Animated terminal persona widget
- **Hero Stats Bar** — Key stats/metrics displayed just below the hero
- **Dark Mode First** — Deep charcoal palette with cyber-blue and tech-purple brand accents

---

## 🗂️ Project Structure

```
digital-portfolio/
├── client/                  # React frontend (Vite)
│   ├── index.html
│   └── src/
│       ├── App.tsx           # Root app with routing (wouter)
│       ├── main.tsx
│       ├── index.css         # Global styles & design tokens
│       ├── components/
│       │   ├── HeroSection.tsx
│       │   ├── HeroStatsBar.tsx
│       │   ├── AboutSection.tsx
│       │   ├── ProjectsSection.tsx
│       │   ├── MLSimulationWidget.tsx
│       │   ├── ResearchSpotlightModal.tsx
│       │   ├── SkillsSection.tsx
│       │   ├── ExperienceSection.tsx
│       │   ├── ContactSection.tsx
│       │   ├── DeveloperTerminal.tsx
│       │   ├── Navigation.tsx
│       │   └── Footer.tsx
│       ├── pages/
│       │   ├── home.tsx      # Main single-page assembly
│       │   └── not-found.tsx
│       └── lib/
│           └── queryClient.ts
├── server/                  # Express backend
│   ├── index.ts             # Entry point
│   ├── routes.ts            # API route registration
│   ├── storage.ts           # Storage interface
│   └── vite.ts              # Dev-server Vite integration
├── shared/                  # Shared types (client + server)
├── attached_assets/         # Static images / assets
├── design_guidelines.md     # Color, typography & layout spec
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **TailwindCSS v3** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Radix UI** | Accessible headless components |
| **shadcn/ui** | Pre-built component library |
| **Wouter** | Lightweight client-side routing |
| **TanStack React Query** | Server state management |
| **React Hook Form + Zod** | Form validation |
| **Lucide React** | Icon set |
| **React Icons** | Extended icon set |
| **Recharts** | Data charts |
| **Embla Carousel** | Carousel component |
| **EmailJS** | Client-side email (contact form) |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express** | HTTP server |
| **TypeScript (tsx)** | Runtime TS execution |
| **Drizzle ORM** | Type-safe database ORM |
| **Neon (PostgreSQL)** | Serverless Postgres database |
| **express-session** | Session management |
| **Passport.js** | Authentication middleware |
| **Zod** | Schema validation |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20+
- **npm** v10+
- (Optional) A **Neon** PostgreSQL database URL if using DB features

### Installation

```bash
# Clone the repository
git clone https://github.com/lordknox/digital-portfolio.git
cd digital-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root (if using database or email features):

```env
DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev
```

Starts the Express server (with Vite middleware for HMR) on **http://localhost:5000**.

### Production Build

```bash
npm run build   # Builds client (dist/public) and bundles server (dist/index.js)
npm start       # Runs the production server
```

### Type Check

```bash
npm run check
```

### Database Migrations

```bash
npm run db:push   # Push schema changes to the database via Drizzle Kit
```

---

## 🎨 Design System

The portfolio follows a carefully curated design spec documented in [`design_guidelines.md`](./design_guidelines.md).

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `hsl(222, 25%, 8%)` | Page background (deep charcoal) |
| Surface | `hsl(222, 20%, 12%)` | Card / elevated surfaces |
| Primary | `hsl(217, 91%, 60%)` | Cyber blue — CTAs, links, accents |
| Accent | `hsl(270, 75%, 65%)` | Tech purple — highlights, gradients |
| Success | `hsl(158, 64%, 52%)` | Blockchain green — positive metrics |

### Typography

- **Inter** — Headings and body text (Google Fonts)
- **JetBrains Mono** — Code snippets and technical labels

### Animations

- Scroll-triggered fade-in via Intersection Observer
- Framer Motion page/section transitions
- Hover: subtle lift (`transform: translateY(-2px)`) and border glow
- Animated bounce scroll indicator in the hero

---

## 📁 Featured Projects (Showcased)

| Project | Category | Stack |
|---|---|---|
| **Quantum-Safe PKE Hardware System** | Research | FPGA, Cryptography |
| **PulseCity** — City Intelligence Dashboard | Full-Stack Mobile | Flutter, Django, Redis, PostgreSQL, Docker |
| **Traffic Pattern Prediction** | Machine Learning | CARLA, PySpark, Scikit-learn, XGBoost |
| **Icarus** — Energy Infrastructure Mapper | Geospatial Web | MERN, Leaflet.js, PostgreSQL |

---

## 🔗 Links

- **Live Demo**: [project-icarus-five.vercel.app](https://project-icarus-five.vercel.app) *(Icarus project)*
- **GitHub**: [github.com/lordknox](https://github.com/lordknox)
- **LinkedIn**: [linkedin.com/in/maalav-patadiya](https://linkedin.com/in/maalav-patadiya)

---

## 📄 License

MIT © Maalav Patadiya
