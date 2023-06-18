import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import NewMenuForm from "@/components/NewMenuForm";
import { Menu } from "@prisma/client";

async function createMenuItem(menu: Menu) {
    "use server";

    if (!menu) {
        throw new Error("Error Somewhere");
    }

    await prisma.menu.create({
        data: {
            ...menu,
        },
    });
}

export default async function NewMenu() {
    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Add Menu Item
                    </h1>
                </header>

                <NewMenuForm createMenuItem={createMenuItem} />

                {/* <form action={createMenuItem} className="flex gap-2 flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    />
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    />
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        className="bg-gray-50 text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                    />

                    <div className="flex gap-5">
                        <div className="flex-1 flex-col">
                            <label htmlFor="type">Types</label>
                            <select
                                id="type"
                                className="bg-gray-50 border text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block h-fit w-full p-2.5"
                            >
                                <option value="nani" selected>
                                    Choose Food Type
                                </option>
                                <option value="Food">Food</option>
                                <option value="Drink">Drink</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                        </div>

                        <div className="flex-1 flex-col">
                            <label htmlFor="calories">Calories</label>
                            <input
                                type="text"
                                name="calories"
                                id="calories"
                                className="bg-gray-50 w-full text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                            />
                        </div>

                        <div className="flex-1 flex-col">
                            <label htmlFor="fats">Fats</label>
                            <input
                                type="text"
                                name="fats"
                                id="fats"
                                className="bg-gray-50 w-full text-zinc-600 text-sm rounded block p-2.5 font-semibold h-fit"
                            />
                        </div>
                    </div>

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
                </form> */}
            </div>
        </>
    );
}
