"use client";

import Link from "next/link";
import Image from "next/image";
import DisplayPic from "@/images/burger.png";
// import Burger from "@/images/Burger-Small.png";
import Bacon from "@/images/BaconEgg-Big.png";
import { Form as MENUIDFORM } from "../../../../../components/menuidform";
import Button from "@/ui/Button";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MenuIdPage() {
    const [name, setName] = useState(true);
    const [price, setPrice] = useState(true);
    const [ingredients, setIngredients] = useState(true);

    const [defaultmenu, setDefaultmenu] = useState<{
        name: string;
        price: string;
        ingredients: string;
    }>({
        name: "",
        price: "",
        ingredients: "",
    });

    return (
        <div>
            <h1 className="font-bold text-4xl text-black text-center mt-10 mb-12 py-3 pt-5">
                Add Menu
            </h1>
            <div className=" relative h-full flex justify-center gap-10">
                <div className="h-full">
                    {/* Picture */}

                    <div className="flex items-center justify-center w-[19rem] h-[19rem]">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mb-3 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                            />
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col items-center justify-center mt-4">
                        <Button
                            className="max-w-xs content-center"
                            style={{ marginBottom: "10px" }}
                        >
                            Change Picture
                        </Button>
                    </div>
                </div>

                <div className="shadow-xl px-8 py-12 rounded-xl h-fit">
                    <form className="flex flex-col gap-8 w-[24rem]">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
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
                </div>
            </div>
        </div>
    );
}
