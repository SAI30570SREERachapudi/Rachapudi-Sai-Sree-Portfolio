# Rachapudi Sai Sree — Developer Portfolio Website

A personal portfolio website for **Rachapudi Sai Sree**, AI Engineer Intern @ Calibo and Computer Science undergraduate at K L University. Built with **React** and **Vite**, styled with an **Ivory & Burgundy** visual identity, and configured for zero-cost static deployment via **GitHub Pages** using **GitHub Actions**.

---

## 🏛️ Professional Identity Overview

- **Name:** Rachapudi Sai Sree
- **Current Position:** AI Engineer Intern at Calibo
- **Headline:** AI Engineer Intern @ Calibo | Software Developer
- **Degree:** B.Tech in Computer Science and Engineering, K L University (July 2023 – May 2027)
- **Academic Standing:** CGPA 9.82 / 10.0 (As stated in official academic records)
- **Academic Distinctions:** University 3rd Rank, NPTEL Discipline Star
- **Verified Profiles:**
  - **Email:** [saisreerachupudi@gmail.com](mailto:saisreerachupudi@gmail.com)
  - **GitHub:** [github.com/SAI30570SREERachapudi](https://github.com/SAI30570SREERachapudi)
  - **LinkedIn:** [linkedin.com/in/rachapudi-sai-sree-313305388](https://linkedin.com/in/rachapudi-sai-sree-313305388)
- **Location:** Nandyal, Andhra Pradesh, India

---

## 🎨 Visual Identity & Design System

- **Color Palette:**
  - **Predominantly Light Ivory Background:** `#FAF8F5`, `#F3ECE2`, `#FFFFFF`
  - **Burgundy Accents:** `#800020`, `#580B17`, `#9E2034`, `#F8EDEF` (tint)
  - **Refined Gold Highlights:** `#B8860B`, `#E5C158`, `#FBF6EC`
  - **Typography & Neutrals:** Deep charcoal `#1C1917`, slate `#44403C`, muted `#78716C`
- **Typography:**
  - Headlines: `Outfit`
  - Body Text: `Plus Jakarta Sans`
  - Technical Data & Code Badges: `JetBrains Mono`
- **Aesthetic Principles:** Generous whitespace, fine technical grid pattern, restrained glassmorphism, responsive mobile drawer navigation, smooth anchor scrolling with header offset, and strict `prefers-reduced-motion` compliance.
- **Styling Architecture:** Standard Vanilla CSS and design tokens (no Tailwind CSS).

---

## 🛠️ Technology Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Icons:** Lucide React
- **Styling:** CSS3 Custom Properties (Design Tokens), CSS Grid, Flexbox
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Local Development

### 1. Prerequisites
- **Node.js:** v18.0.0 or later (v20+ recommended)
- **npm:** v9.0.0 or later

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173/Rachapudi-Sai-Sree-Portfolio/` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment Guide

The repository includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### One-Time Setup in GitHub Repository Settings:
1. Navigate to your repository on GitHub:
   `https://github.com/SAI30570SREERachapudi/Rachapudi-Sai-Sree-Portfolio`
2. Go to **Settings** > **Pages** (in the left sidebar under "Code and automation").
3. Under **Build and deployment** > **Source**, select:
   👉 **GitHub Actions**
4. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: complete premium React portfolio with ivory-burgundy design"
   git push origin main
   ```
5. The GitHub Actions workflow will automatically run, build the Vite app with the base path `/Rachapudi-Sai-Sree-Portfolio/`, and deploy to:
   **`https://sai30570sreerachapudi.github.io/Rachapudi-Sai-Sree-Portfolio/`**

---

## 📁 Repository Directory Structure

```
Rachapudi-Sai-Sree-Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   └── favicon.svg               # Custom burgundy & ivory geometric monogram
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation with mobile menu drawer
│   │   ├── Hero.jsx              # Hero identity, CTAs, and technical SVG illustration
│   │   ├── About.jsx             # First-person bio, quick facts, and engineering pillars
│   │   ├── Experience.jsx        # Verified Calibo AI Engineer Intern showcase
│   │   ├── Skills.jsx            # Categorized skills matrix with interactive filter
│   │   ├── Projects.jsx          # Verified software projects (Auto-PPT-Agent, LeaseLinker, InsurAI, FreshMart)
│   │   ├── Education.jsx         # K L University degree, CGPA 9.82, and distinctions
│   │   ├── Contact.jsx           # Direct mailto links, copy-to-clipboard, mail templates
│   │   └── Footer.jsx            # Minimalist footer with dynamic year and back-to-top
│   ├── data/
│   │   └── portfolioData.js      # Single source of verified portfolio data
│   ├── styles/
│   │   ├── global.css            # Design tokens, ivory-burgundy palette, resets
│   │   ├── components.css        # High-craft component styles and card elevations
│   │   └── responsive.css        # Tablet, mobile drawer, and touch viewport rules
│   ├── App.jsx                   # Main layout container
│   └── main.jsx                  # React client entry point
├── index.html                    # Root HTML with Google Fonts & SEO metadata
├── package.json                  # Dependencies and build scripts
├── vite.config.js                # Vite build configuration with GitHub Pages base path
├── LICENSE                       # MIT License
└── README.md                     # Project documentation
```

---

## 🔒 Safety & Privacy Principles

- **No Private Data:** Phone number is strictly excluded.
- **Authentic Credentials:** CGPA (9.82), University 3rd Rank, and Calibo role reflect verified records.
- **Verified Projects:** All project links connect to actual, public repositories.