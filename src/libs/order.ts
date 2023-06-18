import { prisma } from "@/db";

export async function getOrder() {
    try {
      const order = await prisma.order.findMany();
      return JSON.stringify(order) ;
    } catch (error) {
      return { error };
    }
  }