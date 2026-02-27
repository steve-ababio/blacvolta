// prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: process.env.POSTGRES_PRISMA_DATABASE_URL,
  },
});