import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import NewMenuForm2 from "@/components/NewMenuForm2";
import { Menu } from "@prisma/client";

async function createMenuItem(menu: Menu) {
    "use server";

    if (!menu) {
        throw new Error("Error Somewhere");
    }

    await prisma.menu.create({
        data: {
            ...menu,
        },
    });
}

export default async function NewMenu() {
    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Add Menu Item
                    </h1>
                </header>

                <NewMenuForm2 createMenuItem={createMenuItem} />
            </div>
        </>
    );
}
