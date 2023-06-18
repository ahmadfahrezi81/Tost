"use client";

import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/Toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserProps extends User {
    updateData: (id: string, user: User) => void;
    deleteUser: (id: string) => void;
}

export function AdminUsersProfilePage({
    id,
    name,
    email,
    updateData,
    deleteUser,
}: UserProps) {
    const [user, setUser] = useState<any>();

    const tryToast = () => {
        toast({
            title: "User Permanently Deleted",
            message: `You've deleted ${user.name}. Please Reload.`,
            type: "error",
        });
    };

    useEffect(() => {
        setUser({ id, name, email });
    }, []);

    const router = useRouter();

    return (
        <div className="flex flex-col mt-5">
            <label
                htmlFor="name"
                className="block mb-2 text-m font-medium text-zinc-700"
            >
                Name
            </label>
            <div className="flex flex-row w-full gap-3 mb-6">
                <input
                    type="text"
                    id="name"
                    value={user?.name}
                    className="text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold h-fit"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <button
                    onClick={() => {
                        updateData(id, user);
                    }}
                    className="
                            flex justify-center
                            h-fit w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                >
                    Save
                </button>
            </div>
            <label htmlFor="email">Email</label>
            <div className="flex flex-row w-full gap-3 mb-6 pr-3">
                <input
                    disabled
                    type="text"
                    id="email"
                    value={user?.email}
                    className="bg-gray-300 text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold h-fit"
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
            </div>

            <label htmlFor="id">ID</label>
            <div className="flex flex-row w-full gap-3 mb-6 pr-3">
                <input
                    disabled
                    type="text"
                    id="id"
                    value={user?.id}
                    className="bg-gray-300 text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold h-fit"
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
            </div>

            <div className="flex mt-10 gap-2 justify-end">
                <Link
                    href="/admin/users"
                    className="
                            flex justify-center
                            h-fit px-8 text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center"
                >
                    Cancel
                </Link>

                <button
                    onClick={(e) => {
                        if (
                            confirm(
                                "Do you want to permanently delete this acc?"
                            )
                        ) {
                            e.preventDefault();
                            router.back();
                            tryToast();
                            deleteUser(id);
                        }
                    }}
                    type="button"
                    className="w-full focus:outline-none border border-red-600 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
}
