
// "use client";

// import { FC, useState } from "react";
import { FC } from "react";
import Link from "next/link";
import "@/styles/datepicker-style.css";
import "react-datepicker/dist/react-datepicker.css";

import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { Tables } from "@prisma/client";

import DatePicker from "react-datepicker";
import TableTR from "@/components/(Table)/TableTR";
import { prisma } from "@/db";

async function getData(): Promise<Tables[]> {
  // return await prisma.user.findMany();
  return await prisma.tables.findMany();
}

const Page = async ({}) => {
  // const [startDate, setStartDate] = useState<Date | null>(new Date());

  const data = await getData();

  return (
    <>
      <div className="flex items-center justify-between px-14 py-10">
        <h1 className="text-3xl font-bold text-gray-900 self-center">Tables</h1>
      </div>
      <DataTable columns={columns} data={data} />
      <div className="flex flex-col justify-between items-center px-14"></div>
    </>
  );
};

export default Page;

