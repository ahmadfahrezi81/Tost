import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { prisma } from "@/lib/db";
import { User } from "@prisma/client";

async function getData(): Promise<User[]> {
    // return await prisma.user.findMany();
    return await prisma.user.findMany();
}

export default async function page() {
    // const [showModal, setShowModal] = useState<boolean>(false);
    // const [showGreenModal, setShowGreenModal] = useState<boolean>(false);

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
