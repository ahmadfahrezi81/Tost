"use client";

import Button from "@/ui/Button";
import Input from "@/ui/Input";
// import {signIn } from "next-auth/react"
import { useState } from "react";

export const Form = () => {
    // const [name, setName] = useState("");
    const [name, setName] = useState(false);
    const [price, setPrice] = useState(false);
    const [ingredients, setIngredients] = useState(false);

    const [defaultmenu, setDefaultmenu] = useState<{
        name: string;
        price: string;
        ingredients: string;
    }>({
        name: "Bacon & Egg Tost",
        price: "RM 20",
        ingredients: "Bacon, sunny side egg, bread, pepper, oil",
    });

    const onSubmit = (e: React.FormEvent) => {
        console.log("Login!");

        // e.preventDefault()
        // signIn ('credentials',{
        //     email,
        //     password
        // })
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-8 w-[24rem]">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                {/* <label htmlFor="name">Name</label> */}
                {/* <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="name"
                /> */}
                {/* <input
                    className="bg-zinc-300 text-zinc-600 text-sm rounded-lg block p-2.5 font-semibold cursor-not-allowed"
                    value="Ini Burger"
                    id="name"
                    type="name"
                /> */}
                <label
                    htmlFor="name"
                    className="block mb-2 text-m font-medium text-zinc-700"
                >
                    Name
                </label>
                <div className="flex flex-row w-full gap-3">
                    <input
                        type="text"
                        id="name"
                        className={`
                            ${name ? "bg-white" : "bg-zinc-300"}
                            text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold h-fit
                        `}
                        value={defaultmenu.name}
                        disabled={!name}
                        onChange={(e) =>
                            setDefaultmenu({
                                ...defaultmenu,
                                name: e.target.value,
                            })
                        }
                    />

                    <button
                        onClick={() => {
                            setName(!name);
                        }}
                        type="button"
                        className="
                        flex justify-center
                        h-fit w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                    >
                        {!name ? "edit" : "confirm"}
                    </button>
                </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label
                    htmlFor="price"
                    className="block mb-2 text-m font-medium text-zinc-700"
                >
                    Price
                </label>
                <div className="flex flex-row w-full gap-3">
                    <input
                        type="text"
                        id="price"
                        className={`
                            ${price ? "bg-white" : "bg-zinc-300"}
                            text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold h-fit
                        `}
                        value={defaultmenu.price}
                        disabled={!price}
                        onChange={(e) =>
                            setDefaultmenu({
                                ...defaultmenu,
                                price: e.target.value,
                            })
                        }
                    />

                    <button
                        onClick={() => {
                            setPrice(!price);
                        }}
                        type="button"
                        className="
                        flex justify-center
                        h-fit w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                    >
                        {!price ? "edit" : "confirm"}
                    </button>
                </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label
                    htmlFor="ingredients"
                    className="block mb-2 text-m font-medium text-zinc-700"
                >
                    Ingredients
                </label>
                <div className="flex flex-row w-full gap-3">
                    <textarea
                        id="ingredients"
                        rows={6}
                        className={`
                            ${ingredients ? "bg-white" : "bg-zinc-300"}
                            text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold h-fit
                        `}
                        value={defaultmenu.ingredients}
                        disabled={!ingredients}
                        onChange={(e) =>
                            setDefaultmenu({
                                ...defaultmenu,
                                ingredients: e.target.value,
                            })
                        }
                    />

                    <button
                        onClick={() => {
                            setIngredients(!ingredients);
                        }}
                        type="button"
                        className="
                        flex justify-center
                        h-fit w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                    >
                        {!ingredients ? "edit" : "confirm"}
                    </button>
                </div>
            </div>
        </form>
    );
};
