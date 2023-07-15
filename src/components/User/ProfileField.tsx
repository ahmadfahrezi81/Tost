"use client";

import { useState } from "react";
import { toast } from "@/components/ui/Toast";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import { signOut } from "next-auth/react";

export interface UserProps {
    // user: Pick<User, "name" | "email" | "id">;
    user: any;
    updateData: (id: string, name: string) => void;
    deleteUser: (id: string) => void;
}

export function ProfileField({ user, updateData, deleteUser }: UserProps) {
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

            toast({
                title: "Updated Name",
                message: `You've updated your name to ${name}`,
                type: "success",
            });
        }, 1500);
    };

    const handleDelete = () => {
        if (confirm("Do you want to permanently delete this acc?")) {
            deleteUser(user.id);

            toast({
                title: "User Permanently Deleted",
                message: `You've deleted ${user.name}.`,
                type: "error",
            });

            signOut();
        }
    };

    return (
        <div className="flex flex-col mx-auto border-2 shadow-sm rounded-xl p-10 py-10 w-[35rem]">
            <h2 className="text-xl font-semibold mb-6">
                Hey there, {user.name}
            </h2>

            <label
                htmlFor="name"
                className="block mb-2 text-m font-medium text-zinc-700"
            >
                Name
            </label>

            <input
                type="text"
                id="name"
                value={name}
                className="text-zinc-600 text-sm rounded-lg block p-2.5 mb-4 w-full font-semibold h-fit"
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>

            <input
                disabled
                type="text"
                id="email"
                value={user.email!}
                className="bg-gray-300 text-zinc-600 text-sm rounded-lg block p-2.5  mb-4  w-full font-semibold h-fit"
            />

            <label htmlFor="id">ID</label>

            <input
                disabled
                type="text"
                id="id"
                value={user.id}
                className="bg-gray-300 text-zinc-600 text-sm rounded-lg block p-2.5  mb-4  w-full font-semibold h-fit"
            />

            <div className="flex flex-col gap-2">
                <Button
                    onClick={handleUpdate}
                    variant="none"
                    isLoading={isLoading}
                    className="mt-6 text-white bg-green-700 hover:bg-green-600"
                >
                    Save Changes
                </Button>

                <Button onClick={handleDelete} variant="destructive">
                    Delete Account
                </Button>
            </div>
        </div>
    );
}
