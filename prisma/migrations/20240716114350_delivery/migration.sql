/*
  Warnings:

  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('PENDING', 'SHIPPED', 'DELIVERED', 'CANCELLED');

-- DropTable
DROP TABLE "Card";

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CardNumber" INTEGER NOT NULL,
    "ValidThroughMonth" INTEGER NOT NULL,
    "ValidThroughYear" INTEGER NOT NULL,
    "CVV" INTEGER NOT NULL,
    "CardHolderName" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderID" TEXT NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "deliveryTime" TIMESTAMP(3) NOT NULL,
    "deliveryStatus" "DeliveryStatus" NOT NULL,

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("id")
);
