import { db } from "@/lib/db";
// import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { Booking } from "@prisma/client";
import Link from "next/link";

interface pageProps {
    params: {
        id: string;
    };
}

export default async function TablePageID({ params }: pageProps) {
    const getBooking = async () => {
        const res = await db.booking.findMany({
            where: {
                tablesId: parseInt(params.id),
            },
        });
        return res;
    };

    const data = await getBooking();

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Table Info
                    </h1>
                </header>
                {/* <DataTable columns={columns} data={data} /> */}
            </div>
        </>
    );
}
