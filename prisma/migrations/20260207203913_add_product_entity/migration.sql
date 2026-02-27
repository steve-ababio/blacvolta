-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('TSHIRT', 'HOODIE', 'CAP', 'BAG', 'ACCESSORY');

-- CreateEnum
CREATE TYPE "ProductTag" AS ENUM ('MEN', 'WOMEN', 'UNISEX','BAGS', 'ACCESSORIES','CAPS');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('BLACK', 'WHITE', 'PINK', 'RED', 'BLUE', 'GREEN','YELLOW');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('GHS', 'NGN', 'USD', 'EUR', 'GBP');

-- CreateTable
CREATE TABLE "Event" (
    "Id" TEXT NOT NULL,
    "Email" TEXT,
    "Organizationname" TEXT,
    "Phonenumber" TEXT,
    "EventName" TEXT NOT NULL,
    "EventDate" TEXT NOT NULL,
    "EventTime" TEXT NOT NULL,
    "Venue" TEXT NOT NULL,
    "TicketLinks" TEXT NOT NULL,
    "SocialLinks" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "InquiryNumber" TEXT NOT NULL,
    "FlyerImagePath" TEXT NOT NULL,
    "IsEventWeekly" BOOLEAN NOT NULL,
    "DayofWeek" TEXT NOT NULL,
    "EventId" TEXT,
    "approved" BOOLEAN NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "rating" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Paragraph" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "instagrampostlink" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "blogID" INTEGER NOT NULL,

    CONSTRAINT "Paragraph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogPost" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL,
    "dettydecember" BOOLEAN NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "tag" "ProductTag" NOT NULL,
    "foreground" "Color" NOT NULL,
    "background" "Color" NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'GHS',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrls" TEXT[],
    "sizes" "Size"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_Email_key" ON "Event"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_EventId_key" ON "Event"("EventId");

-- CreateIndex
CREATE UNIQUE INDEX "Paragraph_id_key" ON "Paragraph"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_id_key" ON "BlogPost"("id");

-- AddForeignKey
ALTER TABLE "Paragraph" ADD CONSTRAINT "Paragraph_blogID_fkey" FOREIGN KEY ("blogID") REFERENCES "BlogPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
