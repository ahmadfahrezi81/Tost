"use client";

import { useState } from "react";
import { toast } from "@/components/ui/Toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";
import { UserProps } from "../User/ProfileField";

// interface UserProps extends User {
//     updateData: (id: string, name: string) => void;
//     deleteUser: (id: string) => void;
// }

export function AdminUsersProfilePage({
    user,
    updateData,
    deleteUser,
}: UserProps) {
    const [name, setName] = useState<string>(user.name || "");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleUpdate = () => {
        setIsLoading(true);

        updateData(user.id, name);

        // This forces a cache invalidation.
        router.refresh();

        setTimeout(() => {
            setIsLoading(false);

            router.back();

            toast({
                title: "Updated Name",
                message: `You've updated the name to ${name}`,
                type: "success",
            });
        }, 1500);
    };

    const handleDelete = (e: any) => {
        if (confirm("Do you want to permanently delete this acc?")) {
            e.preventDefault();

            deleteUser(user.id);

            // This forces a cache invalidation.
            // router.refresh();

            router.back();

            toast({
                title: "User Permanently Deleted",
                message: `You've deleted ${user.email}.`,
                type: "error",
            });
        }
    };

    return (
        <div className="flex flex-col mt-5 gap-3">
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="name" className="font-semibold text-zinc-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    className="text-zinc-600 text-sm rounded-lg block w-full font-semibold"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="email" className="font-semibold text-zinc-700">
                    Email
                </label>
                <input
                    disabled
                    type="text"
                    id="email"
                    value={user?.email}
                    className="bg-gray-300 text-zinc-600 text-sm rounded-lg block w-full font-semibold"
                />
            </div>

            <div className="flex flex-col w-full gap-1">
                <label htmlFor="id" className="font-semibold text-zinc-700">
                    ID
                </label>
                <input
                    disabled
                    type="text"
                    id="id"
                    value={user?.id}
                    className="bg-gray-300 text-zinc-600 text-sm rounded-lg block w-full font-semibold"
                />
            </div>

            <div className="flex mt-10">
                <Link
                    href="/admin/users"
                    className="
                            flex justify-center
                            h-fit px-8 text-white bg-red-600 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center"
                >
                    Cancel
                </Link>

                <div className="flex w-full gap-2 items-center justify-end">
                    <button
                        onClick={handleDelete}
                        type="button"
                        className="w-[12rem] focus:outline-none border border-red-600 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Delete Account
                    </button>
                    <Button
                        onClick={handleUpdate}
                        variant="none"
                        isLoading={isLoading}
                        className="w-[12rem] text-white bg-green-700 hover:bg-green-600"
                    >
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
}
