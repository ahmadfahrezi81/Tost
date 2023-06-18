"use client";

// import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// export type UserTable = {
//     id: string;
//     name: string;
//     email: string;
//     image: string;
// };

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "image",
        header: "Picture",
        cell: ({ row }) => (
            <Image
                className="rounded-full"
                src={`${row.original.image}`}
                width={30}
                height={30}
                alt="Profile"
            />
        ),
    },
];
