import { db } from "@/lib/db";

export async function createTable(status: string, slot: string, seats: number) {
    try {
        const todo = await db.tables.create({
            data: { status, slot, seats },
        });
        return { todo };
    } catch (error) {
        return { error };
    }
}

export async function updateTable(id: number, status: string) {
    try {
        const todo = await db.tables.update({
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
        const todo = await db.tables.delete({
            where: { id },
        });
        return { todo };
    } catch (error) {
        return { error };
    }
}

export async function getTableID() {
    try {
        const tables = await db.tables.findMany();
        return { tables };
    } catch (error) {
        return { error };
    }
}
