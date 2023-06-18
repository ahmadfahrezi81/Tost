"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface MenuProps {
    createMenuItem: (menu: any) => void;
}

export default function NewMenuForm({ createMenuItem }: MenuProps) {
    //menu properties
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [calories, setCalories] = useState(0);
    const [fats, setFats] = useState(0);

    //to go back
    const router = useRouter();

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    createMenuItem({
                        name,
                        price,
                        description,
                        ingredients,
                        type,
                        calories,
                        fats,
                    });

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
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Description</label>
                <input
                    required
                    type="text"
                    name="description"
                    id="ndescriptioname"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="ingredient">Ingredients</label>
                <input
                    required
                    type="text"
                    name="ingredient"
                    id="ingredient"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    onChange={(e) => setIngredients(e.target.value)}
                />

                <label htmlFor="type">Type</label>
                <select
                    required
                    id="type"
                    className="bg-gray-50 border text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block h-fit w-full p-2.5"
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Choose Food Type</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Dessert">Dessert</option>
                </select>

                <label htmlFor="price">Price</label>
                <input
                    required
                    type="text"
                    name="price"
                    id="price"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />

                <label htmlFor="calories">Calories</label>
                <input
                    required
                    type="text"
                    name="calories"
                    id="calories"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    onChange={(e) => setCalories(parseFloat(e.target.value))}
                />

                <label htmlFor="fat">Fats</label>
                <input
                    required
                    type="text"
                    name="fat"
                    id="fat"
                    className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    onChange={(e) => setFats(parseFloat(e.target.value))}
                />

                <div className="flex mt-5 gap-2 justify-end">
                    <Link
                        href="/admin/menu"
                        className="
                            flex justify-center
                            h-fit px-8 text-red-600 hover:text-white border border-red-600 hover:bg-red-600 focus:outline-none font-medium rounded-lg text-sm py-2 text-center"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="
                            flex justify-center
                            h-fit px-8 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm py-2 text-center"
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    );
}
