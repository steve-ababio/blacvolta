/*
  Warnings:

  - You are about to drop the column `country` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Address` table. All the data in the column will be lost.
  - Added the required column `region` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "country",
DROP COLUMN "postalCode",
DROP COLUMN "state",
ADD COLUMN     "region" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;
