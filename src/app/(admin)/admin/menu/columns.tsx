"use client";

import Icons from "@/components/Icons";
import { Menu } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const columns: ColumnDef<Menu>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <span className="flex items-center">
                    ID
                    <Icons.ArrowUpDown
                        onClick={() => column.toggleSorting()}
                        className="ml-2 h-4 w-4 cursor-pointer"
                    />
                </span>
            );
        },
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => (
            <Image
                className="rounded"
                src={`${row.original.imageURL}`}
                width={300}
                height={300}
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
        header: ({ column }) => {
            return (
                <span className="flex items-center">
                    Price
                    <Icons.ArrowUpDown
                        onClick={() => column.toggleSorting()}
                        className="ml-2 h-4 w-4 cursor-pointer"
                    />
                </span>
            );
        },
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => (
            <>
                {row.original.description.split(" ").slice(0, 12).join(" ")} ...
            </>
        ),
    },
    {
        accessorKey: "ingredients",
        header: "Ingredients",
        cell: ({ row }) => (
            <>
                {row.original.ingredients.split(",").slice(0, 3).join(", ")},
                ...
            </>
        ),
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
            <div className="flex justify-center">
                <Link
                    href={"/admin/menu/" + row.original.id}
                    className="inline-block"
                >
                    <Icons.Pencil size={20} />
                </Link>
            </div>
        ),
    },
];
