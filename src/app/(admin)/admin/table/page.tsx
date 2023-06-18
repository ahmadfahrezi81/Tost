import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { prisma } from "@/lib/db";
import { Menu } from "@prisma/client";

async function getData(): Promise<Menu[]> {
    "use server";

    return await prisma.menu.findMany();
}

export default async function page() {
    const data = await getData();

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Users
                    </h1>
                </header>
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}
