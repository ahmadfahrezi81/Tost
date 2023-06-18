"use client";

import Icons from "@/components/Icons";
import { Menu } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { deleteMenu } from "./page";

export const columns: ColumnDef<Menu>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => (
            <Image
                className="rounded"
                src={`${row.original.imageURL}`}
                width={150}
                height={100}
                alt="Profile"
            />
        ),
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "ingredients",
        header: "Ingredients",
    },

    {
        accessorKey: "calories",
        header: "Calories",
    },
    {
        accessorKey: "fats",
        header: "Fats",
    },
    {
        header: "Action",
        cell: ({ row }) => (
            <>
                <Link
                    href={"/admin/menu/" + row.original.id}
                    className="inline-block mr-2"
                >
                    <Icons.Pencil size={15} />
                </Link>
                <span
                    onClick={() => {
                        if (
                            confirm(
                                "Do you want to permanently delete this menu?"
                            )
                        ) {
                            //  tryToast();
                            // deleteMenu(row.original.id);
                        }
                    }}
                    className="inline-block"
                >
                    <Icons.Trash2 size={15} />
                </span>
            </>
        ),
    },
];
