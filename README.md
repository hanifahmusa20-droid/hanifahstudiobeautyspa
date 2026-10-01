# Amara Beauty & Spa

A complete website for Amara Beauty & Spa, a salon and spa in Lekki Phase 1, Lagos. Six pages share one warm, editorial design built around a cream, espresso and caramel gold palette: Home, About, Services, Pricing, Gallery and Contact with online booking.

## Pages

| Page | What it covers |
|------|----------------|
| Home | Hero, stats, salon intro, service cards, price preview, team, testimonials, gallery strip |
| About | Story, values, team profiles, salon interior |
| Services | Full detail for hair, nails, facials, massage, makeup, brows and lashes |
| Pricing | Complete price list with membership tiers |
| Gallery | Filterable portfolio of salon work |
| Contact | Booking form, visit information, opening hours, FAQ |

The booking form posts to `/api/bookings` and stores requests in a SQLite database through Prisma. The footer carries the studio credit, Designed By hanifah Studio.

## Tech stack

- Next.js 16 (App Router) with React 19 and TypeScript
- Tailwind CSS 4 with custom brand tokens
- shadcn/ui components (accordion, toast, form controls)
- Prisma with SQLite for booking storage
- Deployable to Vercel with no extra configuration

## Getting started

```bash
bun install        # or npm install, then prisma generate runs automatically
cp .env.example .env
mkdir -p db
bun run db:push    # creates the SQLite schema
bun run dev        # http://localhost:3000
```

## Environment variables

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Prisma connection string, e.g. `file:../db/custom.db` for local SQLite |

## Booking storage across hosts

- **With a filesystem database** (local machine, the z.ai sandbox): bookings are saved to SQLite and confirmed with a success message.
- **Without one** (for example a fresh Vercel deploy with no database): the site stays fully browsable, and the form politely asks the visitor to complete the booking by phone or WhatsApp instead of failing.

To capture bookings on serverless hosting, point `DATABASE_URL` at a hosted database and switch the Prisma datasource provider accordingly. Free tiers of Turso, Neon or Vercel Postgres all work for this.

## Deployment

The repository deploys to Vercel directly: import the repository, accept the detected Next.js settings, and deploy. No environment variables are required for the site to serve, and adding `DATABASE_URL` enables booking persistence where the provider supports it.

## Scripts

| Script | Purpose |
|--------|---------|
| `bun run dev` | Development server on port 3000 |
| `bun run build` | Production build |
| `bun run lint` | ESLint check |
| `bun run db:push` | Sync the Prisma schema to the database |
