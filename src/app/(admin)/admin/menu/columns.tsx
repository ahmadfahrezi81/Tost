"use client";

import { Menu } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<Menu>[] = [
    {
        accessorKey: "id",
        header: "ID",
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
];
