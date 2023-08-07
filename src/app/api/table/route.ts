import { prisma } from "@/db";
import { Tables } from "@prisma/client";
import { NextResponse } from "next/server";

export const PATCH = async (
    request: Request,
    { params }: { params: { id: number } }
) => {
    const body: Tables = await request.json();
    const product = await db.tables.update({
        where: {
            id: params.id,
        },
        data: {
            seats: body.seats,
            slot: body.slot,
        },
    });
    return NextResponse.json(product, { status: 200 });
};
