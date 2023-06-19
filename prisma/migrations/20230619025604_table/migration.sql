/*
  Warnings:

  - You are about to drop the `_MenuToOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MenuToOrder" DROP CONSTRAINT "_MenuToOrder_A_fkey";

-- DropForeignKey
ALTER TABLE "_MenuToOrder" DROP CONSTRAINT "_MenuToOrder_B_fkey";

-- DropTable
DROP TABLE "_MenuToOrder";
