// prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: "postgresql://postgres:password@localhost:5433/bv"
  },
});