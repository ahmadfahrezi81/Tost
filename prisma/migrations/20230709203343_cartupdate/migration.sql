/*
  Warnings:

  - You are about to drop the column `bID` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookingId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tablesId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calories` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fats` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `menuAmount` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_bID_fkey";

-- DropIndex
DROP INDEX "Order_bID_key";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "tablesId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "calories" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fats" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "imageURL" TEXT NOT NULL,
ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "bID",
DROP COLUMN "name",
ADD COLUMN     "bookingId" TEXT NOT NULL,
ADD COLUMN     "menuAmount" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CheckoutItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "menuId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageURL" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CheckoutItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CheckoutItem_userId_menuId_key" ON "CheckoutItem"("userId", "menuId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_bookingId_key" ON "Order"("bookingId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tablesId_fkey" FOREIGN KEY ("tablesId") REFERENCES "Tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckoutItem" ADD CONSTRAINT "CheckoutItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckoutItem" ADD CONSTRAINT "CheckoutItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;
