"use client";

// import { Checkbox } from "@/components/ui/checkbox";
import { Menu } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// export type UserTable = {
//     id: string;
//     name: string;
//     email: string;
//     image: string;
// };

export const columns: ColumnDef<Menu>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
];
