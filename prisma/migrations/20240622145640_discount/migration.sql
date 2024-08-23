/*
  Warnings:

  - Added the required column `Discount` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "Discount" DOUBLE PRECISION NOT NULL;
