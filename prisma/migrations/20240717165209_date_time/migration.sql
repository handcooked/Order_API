/*
  Warnings:

  - You are about to drop the column `deliveryTime` on the `delivery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "delivery" DROP COLUMN "deliveryTime",
ALTER COLUMN "deliveryStatus" SET DEFAULT 'PENDING';
