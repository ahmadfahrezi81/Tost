import { prisma } from "@/db";

export async function createTable(status: string, slot: string, seats: number) {
  try {
    const todo = await prisma.tables.create({
      data: { status, slot, seats },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}


export async function updateTable(id: number, status: string) {
  try {
    const todo = await prisma.tables.update({
      where: { id },
      data: { status },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function deleteTable(id: number) {
  try {
    const todo = await prisma.tables.delete({
      where: { id },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function getTableID() {
  try {
    const tables = await prisma.tables.findMany();
    return { tables };
  } catch (error) {
    return { error };
  }
}
