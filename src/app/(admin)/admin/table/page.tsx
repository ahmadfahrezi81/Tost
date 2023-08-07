import { FC } from "react";
import Link from "next/link";
import "@/styles/datepicker-style.css";
import "react-datepicker/dist/react-datepicker.css";

// import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { Tables } from "@prisma/client";

import DatePicker from "react-datepicker";
import TableTR from "@/components/(Table)/TableTR";
import { db } from "@/lib/db";

async function getData(): Promise<Tables[]> {
    // return await db.user.findMany();
    return await db.tables.findMany();
}

const Page = async ({}) => {
    // const [startDate, setStartDate] = useState<Date | null>(new Date());

    const data = await getData();

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Tables
                    </h1>
                </header>
                {/* <DataTable columns={columns} data={data} /> */}
            </div>
        </>
    );
};

export default Page;
