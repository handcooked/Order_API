-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "Total_Calories" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "personalizations" TEXT[],
ALTER COLUMN "Total_Calories" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Price" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "MealPlan" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "personalizations" TEXT[],
    "monday" JSONB NOT NULL,
    "tuesday" JSONB NOT NULL,
    "wednesday" JSONB NOT NULL,
    "thursday" JSONB NOT NULL,
    "friday" JSONB NOT NULL,
    "saturday" JSONB NOT NULL,
    "sunday" JSONB NOT NULL,

    CONSTRAINT "MealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MealPlan_userId_key" ON "MealPlan"("userId");
