import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { prisma } from "@/lib/db";
import { Menu } from "@prisma/client";
import Link from "next/link";
import Icons from "@/components/Icons";

async function getData(): Promise<Menu[]> {
    "use server";

    return await prisma.menu.findMany();
}

export async function deleteMenu(id: number) {
    "use server";

    await prisma.menu.delete({ where: { id } });
}

export default async function page() {
    const data = await getData();

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Menu
                    </h1>
                    <div className="flex w-fit">
                        <Link
                            href="./menu/new"
                            className="flex items-center justify-center gap-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5"
                        >
                            <span>Add</span>
                        </Link>
                    </div>
                </header>
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}
