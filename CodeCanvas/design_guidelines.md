# Design Guidelines: Deepak Kumar's Premium Portfolio

## Design Approach

**Selected Approach:** Reference-Based (Apple HIG minimalism) + GitHub Dark Theme coding aesthetics
**Justification:** Portfolio for technical Product Manager requires professional polish with developer credibility - merging Apple's clean minimalism with authentic coding visual language

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: `220 13% 9%` (GitHub dark #0d1117)
- Surface: `220 13% 13%` (GitHub canvas #161b22)
- Primary: `210 100% 60%` (Function blue #3b9eff)
- Secondary: `174 70% 50%` (String teal #22d3ee)
- Accent: `340 75% 55%` (Keyword pink for minimal use)
- Text Primary: `210 20% 98%` (Near white)
- Text Secondary: `215 15% 65%` (Code comment gray #8b949e)
- Border: `215 15% 25%` (Subtle dividers #30363d)

**Light Mode:**
- Background: `0 0% 100%` (Pure white)
- Surface: `210 20% 98%` (Soft gray)
- Primary: `210 100% 45%` (Deeper blue)
- Secondary: `174 70% 40%` (Darker teal)
- Text: `220 15% 15%` (Near black)
- Border: `210 15% 85%` (Soft dividers)

### B. Typography

**Font Families:**
- Headlines: Inter (700-800 weight) - modern, clean
- Body: Inter (400-500) - readable, professional
- Code/Technical: JetBrains Mono (400-500) - authentic monospace

**Hierarchy:**
- Hero Title: 3.5rem (lg:4.5rem) / Bold
- Section Headers: 2.25rem (lg:3rem) / Semi-bold
- Subsections: 1.5rem / Medium
- Body: 1rem (lg:1.125rem) / Regular
- Code snippets: 0.875rem / Mono

### C. Layout System

**Spacing Primitives:** Tailwind units 2, 4, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-4
- Component spacing: p-8, my-12
- Section spacing: py-20, lg:py-24
- Container: max-w-7xl with px-6

### D. Syntax-Inspired Visual System

**Line Numbers:**
- Left margin decoration in key sections using `before:content-['01']` pattern
- Code comment gray color (`215 15% 65%`)
- Position absolute with -left-12 offset

**Code Bracket Dividers:**
- Section separators using: `{ }` brackets in teal
- Horizontal rules styled as comment lines: `// ----------`

**Terminal Elements:**
- Command prompt prefix: `$ ` in hero section
- Blinking cursor animation using `animate-pulse` on `|` character
- File tree navigation in sidebar/nav using `├──` `└──` characters

**Code Block Aesthetics:**
- Background: Surface color with subtle border
- Syntax highlighting via color coding (blue functions, teal strings, pink keywords)
- Copy button with tooltip in top-right corner
- Line numbers in left gutter

### E. Component Library

**Navigation:**
- Fixed header with glass morphism (backdrop-blur-lg bg-opacity-80)
- File tree inspired menu structure for mobile
- Terminal-style breadcrumb trail on scroll

**Hero Section:**
- Terminal command aesthetic: `$ whoami` animation
- Typing animation for tagline using step-end
- CTA buttons: Primary (filled blue), Secondary (outline with blur backdrop)
- Subtle grid pattern background using CSS gradients

**Project Cards:**
- Hover: lift with shadow, border glow in primary color
- Structure: Problem block → Approach block → Outcome block
- Tech stack pills with syntax color coding (APIs=teal, AI=blue, Frameworks=pink)
- Code snippet preview window with line numbers

**Expertise Matrix:**
- 4-column grid (lg) collapsing to 2 (md) and 1 (sm)
- Category headers styled as code comments `// AI & Machine Learning`
- Skills as function declarations: `function aiContentGeneration() { }`
- Progress bars using gradient fills

**Metrics Dashboard:**
- Card-based layout with data visualization
- Terminal-style counters with animated number increments
- API endpoint format for headings: `GET /impact/revenue`
- Color-coded based on metric type (growth=teal, efficiency=blue)

### F. Interactive Elements

**Micro-interactions:**
- Button hover: scale(1.02) with glow effect
- Card hover: translateY(-4px) with shadow expansion
- Link hover: underline slide-in from left (teal)
- Code copy: checkmark fade-in animation

**Dark/Light Toggle:**
- Top-right position, icon-based (sun/moon)
- Smooth transition-all duration-300
- Persist preference in localStorage

**Scroll Animations:**
- Fade-in-up on scroll for sections (using Intersection Observer)
- Progressive line number reveal
- Stagger delays on grid items (delay-75, delay-150, delay-300)

## Images

**Hero Section Image:** NO large hero background image
**Project Screenshots:** Include 4-5 project preview images showing:
- Dashboard UI with metrics visualization
- AI content generation interface
- Marketplace integration architecture diagram
- Multi-marketplace listing export flow
Place as card thumbnails within project showcase section

**Tool Icons:** Use visual references for Google AI Studio, Lovable, Replit, Cursor, Vercel as colored logo SVGs in "Tools" section

**Background Elements:** Subtle code pattern overlay (low opacity regex/JSON structure) on alternating sections

## Section-Specific Design

**Hero:** Terminal aesthetic with command prompt, typing animation tagline, dual CTA buttons with glass effect

**About:** Two-column layout (text + philosophy quote in code block format), IIT Bombay mention with subtle badge

**Technical Expertise:** Matrix grid with syntax-colored categories, expandable skill details, proficiency indicators

**Projects:** Masonry grid (2-3 columns lg), each card with hover state, tech stack badges, impact metrics callout

**AI Deep Dive:** Technical documentation style, expandable code examples, architecture diagram placeholders with proper notation

**Tools:** Icon grid with tool names, usage context in comment format, integration flow visualization

**Contact:** Centered CTA section, terminal-style "connect" command, social links as import statements

**Footer:** Minimal, comment-style copyright, navigation as file tree structure