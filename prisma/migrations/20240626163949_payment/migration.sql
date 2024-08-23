-- CreateTable
CREATE TABLE "PaymentOptions" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "RecentlyUsed" TEXT[],
    "UPI" TEXT[],
    "Credit_cards" TEXT[],
    "More" TEXT[],
    "Pay_later" TEXT[],

    CONSTRAINT "PaymentOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CardNumber" INTEGER NOT NULL,
    "ValidThroughMonth" INTEGER NOT NULL,
    "ValidThroughYear" INTEGER NOT NULL,
    "CVV" INTEGER NOT NULL,
    "CardHolderName" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UPI" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UPI_ID" TEXT NOT NULL,
    "UPI_Name" TEXT NOT NULL,

    CONSTRAINT "UPI_pkey" PRIMARY KEY ("id")
);
