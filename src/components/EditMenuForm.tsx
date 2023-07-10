"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UploadImage from "./UploadImage";
import { Menu } from "@prisma/client";
import { toast } from "@/ui/Toast";

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

    const tryToast = () => {
        toast({
            title: "User Permanently Deleted",
            message: `You've deleted ${menu?.name}. Please Reload.`,
            type: "error",
        });
    };

    //to go back
    const router = useRouter();

    //update image
    const setImageURLChild = (url: string) => {
        if (!menu) {
            throw new Error("No menu");
        }

        setMenu({ ...menu, imageURL: url });
    };

    return (
        <>
            <UploadImage
                imageURLString={imageURL}
                setImageURLChild={setImageURLChild}
            />

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!menu) {
                        throw new Error("No menu");
                    }

                    updateMenuItem(id, menu);

                    router.refresh();

                    router.back();
                }}
                className="flex gap-2 flex-col"
            >
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
                <input
                    required
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    value={menu?.description}
                    onChange={(e) => {
                        if (!menu) {
                            throw new Error("No menu");
                        }
                        setMenu({ ...menu, description: e.target.value });
                    }}
                />
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
                <button
                    type="submit"
                    className="
                            flex justify-center
                            w-full h-fit px-8 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm py-2 text-center"
                >
                    Update
                </button>
            </form>

            <div className="flex mt-5 gap-2 justify-end">
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
            </div>
        </>
    );
}
