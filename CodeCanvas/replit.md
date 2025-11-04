# Deepak Kumar - Portfolio Website

## Overview

This is a premium portfolio website for Deepak Kumar, a Product Manager specializing in AI-driven product strategy, e-commerce marketplace integrations, and generative AI applications. The portfolio showcases technical expertise in marketplace platforms (Amazon, Walmart, Shopify, ONDC), multi-LLM architectures, and data-driven product development.

The application is built as a modern single-page React application with a focus on professional design aesthetics merging Apple's minimalist approach with GitHub dark theme coding aesthetics. It features comprehensive sections including work experience, technical expertise, projects, AI deep dives, decision frameworks, and personal interests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query (React Query)** for server state management and data fetching

**UI Framework:**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design system
- **CVA (Class Variance Authority)** for component variant management

**Design System:**
- Custom color palette supporting dark/light modes with GitHub-inspired dark theme as primary
- Typography using Inter for UI and JetBrains Mono for code/technical elements
- Consistent spacing system based on Tailwind's spacing primitives
- Glass morphism effects, gradient animations, and smooth transitions
- Responsive design with mobile-first approach

**State Management:**
- Theme state managed via Context API (ThemeProvider)
- Form state handled by React Hook Form with Zod validation
- Server state managed by TanStack Query

**Component Architecture:**
- Atomic design pattern with reusable UI components in `/components/ui`
- Feature components organized by domain (About, Projects, Contact, etc.)
- Example components for development/testing in `/components/examples`

### Backend Architecture

**Server Framework:**
- **Express.js** running on Node.js with TypeScript
- HTTP server for API routes and static file serving
- Development and production mode support

**API Structure:**
- RESTful API design with routes prefixed by `/api`
- Centralized error handling middleware
- Request/response logging for debugging

**Development Setup:**
- Vite middleware integration for HMR in development
- Separate build processes for client and server
- Development server proxying through Express

### Data Storage

**Database:**
- **PostgreSQL** via Neon serverless driver (`@neondatabase/serverless`)
- **Drizzle ORM** for type-safe database queries and schema management
- Migrations stored in `/migrations` directory

**Schema Design:**
- User authentication schema with username/password fields
- UUID-based primary keys using PostgreSQL's `gen_random_uuid()`
- Zod schemas derived from Drizzle schema for validation

**Storage Interface:**
- Abstract storage interface (`IStorage`) for CRUD operations
- In-memory implementation (`MemStorage`) for development/testing
- Easy swap to database-backed storage for production

### External Dependencies

**Third-Party UI Libraries:**
- **Radix UI** - Unstyled, accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **Lucide React** - Icon library for consistent iconography
- **React Icons** - Additional icon sets (Simple Icons for brand logos)
- **Embla Carousel** - Touch-friendly carousel/slider component

**Development Tools:**
- **ESBuild** - Fast JavaScript bundler for server code
- **TSX** - TypeScript execution for development server
- **Drizzle Kit** - Database migration and schema management CLI

**Utilities:**
- **clsx & tailwind-merge** - Conditional className composition
- **date-fns** - Modern date/time manipulation
- **nanoid** - Unique ID generation
- **wouter** - Minimal routing solution

**Replit-Specific Integrations:**
- Vite plugins for runtime error overlay, cartographer, and dev banner
- Development-only integrations disabled in production

**Authentication:**
- Session-based authentication using `express-session`
- PostgreSQL session store via `connect-pg-simple`
- Credentials passed via cookies

**API Integrations (Portfolio Content):**
The portfolio showcases expertise with:
- Amazon SP-API and Ads API
- Walmart Marketplace API
- Shopify ecosystem
- Google AI Studio for LLM integration
- Multi-marketplace data synchronization

**Deployment:**
- Designed for Vercel deployment (referenced in tools section)
- Environment variable configuration via `.env` for `DATABASE_URL`
- Production build outputs to `/dist` directory