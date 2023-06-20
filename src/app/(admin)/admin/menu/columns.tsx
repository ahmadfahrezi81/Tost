"use client";

import Icons from "@/components/Icons";
import { Menu } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

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
