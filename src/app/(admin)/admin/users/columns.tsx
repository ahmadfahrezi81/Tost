"use client";

import Icons from "@/components/Icons";
import Button from "@/components/ui/Button";
// import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

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
        header: ({ column }) => {
            return (
                <span className="flex items-center">
                    Email
                    <Icons.ArrowUpDown
                        onClick={() => column.toggleSorting()}
                        className="ml-2 h-4 w-4 cursor-pointer"
                    />
                </span>
            );
        },
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
    {
        header: "Action",
        cell: ({ row }) => (
            <div className="flex justify-center mr-4">
                <Link
                    href={"/admin/users/" + row.original.id}
                    className="inline-block"
                >
                    <Icons.Pencil size={20} />
                </Link>
            </div>
        ),
    },
];
