-- CreateTable
CREATE TABLE "recipe" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Recipe_name" TEXT NOT NULL,
    "Total_Calories" INTEGER NOT NULL,
    "Available" BOOLEAN NOT NULL,
    "Ingredients" TEXT[],
    "Description" TEXT NOT NULL,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Ingredient_name" TEXT NOT NULL,
    "Total_Calories" INTEGER NOT NULL,
    "Available" BOOLEAN NOT NULL,
    "Recipes" TEXT[],

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);
