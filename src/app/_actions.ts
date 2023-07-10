"use server";

import {
    updateTable,
    getTableID,
    deleteTable,
    createTable,
} from "@/lib/tables";
// import { getOrder } from "@lib/order";

export async function updateTableAction(id: number, status: string) {
    await updateTable(id, status);
}

export async function deleteTableAction(id: number) {
    await deleteTable(id);
}

export async function addTableAction(
    status: string,
    slot: string,
    seats: number
) {
    await createTable(status, slot, seats);
}
