"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UploadImage from "./UploadImage";
import { Menu } from "@prisma/client";
import { toast } from "@/ui/Toast";
import Button from "@/ui/Button";

interface MenuProps extends Menu {
    updateMenuItem: (id: number, menu: Menu) => void;
    deleteMenuItem: (id: number) => void;
}

export default function NewMenuForm({
    id,
    name,
    price,
    description,
    ingredients,
    type,
    calories,
    fats,
    imageURL,
    updateMenuItem,
    deleteMenuItem,
}: MenuProps) {
    //menu properties
    const [menu, setMenu] = useState<Menu>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setMenu({
            id,
            name,
            price,
            description,
            ingredients,
            type,
            calories,
            fats,
            imageURL,
        });
    }, []);

    //to go back
    const router = useRouter();

    //update image
    const setImageURLChild = (url: string) => {
        if (!menu) {
            throw new Error("No menu");
        }

        setMenu({ ...menu, imageURL: url });
    };

    const handleUpdate = () => {
        setIsLoading(true);

        if (!menu) {
            throw new Error("No menu");
        }

        updateMenuItem(id, menu);

        router.refresh();

        setTimeout(() => {
            setIsLoading(false);

            toast({
                title: "Updated Menu",
                message: `You've updated "${name}"`,
                type: "success",
            });

            router.back();
        }, 1500);
    };

    const handleDelete = () => {
        if (confirm("Do you want to permanently delete this menu item?")) {
            deleteMenuItem(id);

            router.refresh();

            router.back();

            toast({
                title: "Menu Permanently Deleted",
                message: `You've deleted ${menu?.name}.`,
                type: "error",
            });
        }
    };

    return (
        <>
            <UploadImage
                imageURLString={imageURL}
                setImageURLChild={setImageURLChild}
            />

            <div className="flex gap-2 flex-col">
                <label htmlFor="name">Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    value={menu?.name}
                    onChange={(e) => {
                        if (!menu) {
                            throw new Error("No menu");
                        }
                        setMenu({ ...menu, name: e.target.value });
                    }}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    required
                    name="description"
                    id="description"
                    className="bg-gray-50 text-zinc-600 h-16 text-sm rounded block p-2.5 font-semibold"
                    value={menu?.description}
                    onChange={(e) => {
                        if (!menu) {
                            throw new Error("No menu");
                        }
                        setMenu({ ...menu, description: e.target.value });
                    }}
                ></textarea>
                <label htmlFor="ingredients">Ingredients</label>
                <input
                    required
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    value={menu?.ingredients}
                    onChange={(e) => {
                        if (!menu) {
                            throw new Error("No menu");
                        }
                        setMenu({ ...menu, ingredients: e.target.value });
                    }}
                />

                <label htmlFor="type">Type</label>
                <select
                    required
                    id="type"
                    className="bg-gray-50 border text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block h-fit w-full p-2.5"
                    value={menu?.type}
                    onChange={(e) => {
                        if (!menu) {
                            throw new Error("No menu");
                        }
                        setMenu({ ...menu, type: e.target.value });
                    }}
                >
                    <option value="">Choose Food Type</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Dessert">Dessert</option>
                </select>

                <div className="flex gap-2">
                    <div className="flex flex-col w-full">
                        <label htmlFor="price">Price</label>
                        <input
                            required
                            type="text"
                            name="price"
                            id="price"
                            className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                            value={menu?.price}
                            onChange={(e) => {
                                if (!menu) {
                                    throw new Error("No menu");
                                }
                                setMenu({
                                    ...menu,
                                    price: parseFloat(e.target.value),
                                });
                            }}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="calories">Calories</label>
                        <input
                            required
                            type="text"
                            name="calories"
                            id="calories"
                            className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                            value={menu?.calories}
                            onChange={(e) => {
                                if (!menu) {
                                    throw new Error("No menu");
                                }
                                setMenu({
                                    ...menu,
                                    calories: parseFloat(e.target.value),
                                });
                            }}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="fats">Fats</label>
                        <input
                            required
                            type="text"
                            name="fats"
                            id="fats"
                            className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                            value={menu?.fats}
                            onChange={(e) => {
                                if (!menu) {
                                    throw new Error("No menu");
                                }
                                setMenu({
                                    ...menu,
                                    fats: parseFloat(e.target.value),
                                });
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex mt-10">
                <Link
                    href="/admin/menu"
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

            {/* <div className="flex mt-5 gap-2 justify-end">
                <button
                    onClick={(e) => {
                        if (
                            confirm(
                                "Do you want to permanently delete this menu item?"
                            )
                        ) {
                            e.preventDefault();

                            console.log("Inside EditMenuForm", id);

                            tryToast();
                            deleteMenuItem(id);

                            router.refresh();
                            router.back();
                        }
                    }}
                    className="px-8 flex-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2.5 mb-2"
                >
                    Delete
                </button>
                <Link
                    href="/admin/menu"
                    className="
                            flex justify-center
                            h-fit px-8 text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm py-2 text-center"
                >
                    Cancel
                </Link>
            </div> */}
        </>
    );
}
