/*
  Warnings:

  - You are about to drop the column `studentId` on the `Order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bID]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bID` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Tables` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_studentId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "studentId",
ADD COLUMN     "bID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tables" ADD COLUMN     "status" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_bID_key" ON "Order"("bID");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bID_fkey" FOREIGN KEY ("bID") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
