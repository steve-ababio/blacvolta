/*
  Warnings:

  - You are about to drop the column `tag` on the `Product` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('MEN', 'WOMEN', 'UNISEX', 'BAGS', 'ACCESSORIES', 'CAPS');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "tag",
ADD COLUMN     "category" "ProductCategory"[];

-- DropEnum
DROP TYPE "ProductTag";
