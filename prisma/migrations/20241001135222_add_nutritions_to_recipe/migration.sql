/*
  Warnings:

  - You are about to drop the `recipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recipe";

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT NOT NULL,
    "Recipe_name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Ingredients" TEXT[],
    "Steps" TEXT[],
    "Serving_Size" INTEGER NOT NULL,
    "personalizations" TEXT[],
    "Protein" DOUBLE PRECISION NOT NULL,
    "Fat" DOUBLE PRECISION NOT NULL,
    "Carbohydrates" DOUBLE PRECISION NOT NULL,
    "Calories" DOUBLE PRECISION NOT NULL,
    "Available" BOOLEAN NOT NULL,
    "Key_Ingredients" TEXT[],
    "Allergens" TEXT[],
    "Discount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
