import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Returns a Prisma client when a database is configured, otherwise null.
 * The z.ai sandbox always provides DATABASE_URL with a local SQLite file.
 * On hosts without a filesystem database (e.g. Vercel serverless) the
 * value may be absent, and the app then falls back to non-persisted
 * booking handling instead of crashing.
 */
function createDb(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null
  try {
    return globalForPrisma.prisma ?? new PrismaClient({ log: ['query'] })
  } catch {
    return null
  }
}

export const db: PrismaClient | null = createDb()

if (process.env.NODE_ENV !== 'production' && db) globalForPrisma.prisma = db
