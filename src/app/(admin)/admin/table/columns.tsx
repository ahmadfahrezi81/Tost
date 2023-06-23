"use client";

import { Tables } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { prisma } from "@/db";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
//   DropdownMenuRadioItem,
//   DropdownMenuRadioGroup,
// } from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/buttonTwo";
import Link from "next/link";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
    addTableAction,
    deleteTableAction,
    updateTableAction,
} from "@/app/_actions";
import Icons from "@/components/Icons";

export const columns: ColumnDef<Tables>[] = [
    // {
    //     accessorKey: "id",
    //     header: ({ column }) => {
    //         return (
    //             <Button
    //                 variant="ghost"
    //                 onClick={() =>
    //                     column.toggleSorting(column.getIsSorted() === "asc")
    //                 }
    //             >
    //                 Table ID
    //                 <ArrowUpDown className="ml-2 h-4 w-4" />
    //             </Button>
    //         );
    //     },
    // },
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const currID = row.original.id;
            const currStatusIn = row.original.status;
            var currStatus = "";

            return (
                <>
                    <select
                        id="availability"
                        className="bg-black text-center border-0 text-white"
                        // defaultValue
                        defaultValue={currStatusIn}
                        onChange={(e: any) => {
                            currStatus = e.target.value;
                            updateTableAction(currID, currStatus);
                        }}
                    >
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                        <option value="booked">Booked</option>
                    </select>
                </>
            );
        },
    },
    {
        accessorKey: "slot",
        header: "Time Slots",
    },
    {
        accessorKey: "seats",
        header: "Seats",
    },
    {
        header: "Action",
        cell: ({ row }) => (
            <div className="ml-3">
                <Link
                    href={"/admin/table/" + row.original.id}
                    className="inline-block"
                >
                    <Icons.Pencil size={20} />
                </Link>
            </div>
        ),
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const currID = row.original.id;
    //         // const router = useRouter();
    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <Link href={"./admin/table/" + currID}>
    //                         <DropdownMenuItem>
    //                             More Informations
    //                         </DropdownMenuItem>
    //                     </Link>
    //                     <DropdownMenuItem
    //                         onClick={() => {
    //                             deleteTableAction(currID);
    //                         }}
    //                     >
    //                         Delete menu
    //                     </DropdownMenuItem>
    //                     <DropdownMenuItem
    //                         onClick={() => {
    //                             addTableAction("available", "00 - 00", 2);
    //                         }}
    //                     >
    //                         Add menu
    //                     </DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         );
    //     },
    // },
];
