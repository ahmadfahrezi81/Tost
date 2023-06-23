"use client";

import { Order, Booking } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

// import { getOrderAction } from "../../../../_actions";

import GreenModal from "@/components/GreenModal";
import { getOrder } from "@/libs/order";
import TableInfoPreOrder from "@/components/TableInfoPreOrder";
import Link from "next/link";
import Icons from "@/components/Icons";

var showGreenModal = false;

export const columns: ColumnDef<Booking>[] = [
    {
        accessorKey: "id",
        header: "Booking ID",
    },
    {
        accessorKey: "name",
        header: "Customer Name",
    },
    {
        header: "Action",
        cell: ({ row }) => (
            <div className="ml-3">
                <Link
                    href={`./${row.original.tablesId}/${row.original.id}`}
                    className="inline-block"
                >
                    <Icons.Pencil size={20} />
                </Link>
            </div>
        ),
    },
];

// async function test() {
//   "use server";
//   const i = getOrder(myBID);
//   return i;
// }

// const values = Object.values(i);
// const keys = Object.keys(i);
// console.log(values);
// console.log(i);
// return <span>{keys}</span>;

// const myObjKey = currID;
// const myOrd: {};
// // myObj[myObjKey as keyof typeof myObj]
// // i[myObjKey as keyof typeof i]

// // const myObj = {
// //   Hello: "world"
// // };
// // const myObjKey = "Hello";
