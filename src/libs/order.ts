import { prisma } from "@/db";

export async function getOrder(bID: string) {
    try {
      const order = await prisma.order.findUnique(
        {
          where: {
            bID: bID,
          }
        }
      );
      return order?.bID ;
    } catch (error) {
      return { error };
    }
  }