/*
  Warnings:

  - Added the required column `Price` to the `recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Serving_Size` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "Allergens" TEXT[],
ADD COLUMN     "Key_Ingredients" TEXT[],
ADD COLUMN     "Price" INTEGER NOT NULL,
ADD COLUMN     "Serving_Size" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FlatNumber" TEXT NOT NULL,
    "Street" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Pincode" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "Geohash" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);
