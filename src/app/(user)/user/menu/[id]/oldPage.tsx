"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import DisplayPic from "@/images/BaconEgg-Big.png";
import Button from "@/ui/Button";
import { MdArrowBack } from "react-icons/md";
import Icons from "@/components/Icons";
import { useState } from "react";

interface MenuPage {
    categories: String;
    title: String;
    description: String;
    image: StaticImageData;
    price: number;
    quantity: number;
    ingredients: String;
}

const Page = ({}) => {
    const [toggle, setToggle] = useState(true);

    return (
        <div className="px-14 mt-10 ml-4">
            <Link
                href={"/user/menu"}
                className="flex gap-2 items-center cursor-pointer hover:gap-3 w-fit p-2"
            >
                <Icons.ArrowLeft size={18} color="#000" />
                <span className="font-light text-sm">Back to Menu</span>
            </Link>
            <div className="flex flex-row gap-20 mt-4">
                <div className="flex-1">
                    <Image
                        className="mx-auto rounded-2xl"
                        src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                        alt="Product"
                        width={600}
                        height={600}
                    />
                </div>

                <div className="flex-1 mt-16 flex flex-col gap-2">
                    <h3 className="font-medium text-lg">Food</h3>
                    <h1 className="font-semibold text-2xl mb-2">
                        Bacon & Egg Toast
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam quo natus culpa, exercitationem molestiae sed
                        ipsam ullam voluptates iste rem.
                    </p>

                    <div
                        onClick={() => setToggle(!toggle)}
                        style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1559239115-ce3eb7cb87ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1688&q=80)`,
                            backgroundPosition: "65% 15%",
                        }}
                        className="select-none my-4 h-36 border border-gray-200 rounded-lg p-6 pt-5 flex flex-col gap-2"
                    >
                        <div className="flex justify-between">
                            {toggle ? (
                                <h3 className="font-semibold text-lg">
                                    Overview
                                </h3>
                            ) : (
                                <h3 className="font-semibold text-lg">
                                    Ingredients
                                </h3>
                            )}

                            <div className="flex items-center gap-2">
                                <input
                                    onClick={() => setToggle(!toggle)}
                                    checked={toggle}
                                    id="1"
                                    type="radio"
                                    name="toggle"
                                    // value="overview"
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
                                />
                                <input
                                    onClick={() => setToggle(!toggle)}
                                    checked={!toggle}
                                    id="2"
                                    type="radio"
                                    name="toggle"
                                    // value="ingredients"
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                                />
                            </div>
                        </div>

                        {toggle ? (
                            <div className="flex justify-between mt-2">
                                <div className="flex-1 flex items-center gap-2">
                                    <Icons.ChefHat className="bg-[#15bf59] w-10 h-10 rounded-full p-1.5" />
                                    <div>
                                        <p className="text-sm">Ingredients</p>
                                        <p className="text-xl font-semibold">
                                            19
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-2">
                                    <Icons.Flame className="bg-orange-500 w-10 h-10 rounded-full p-1.5" />
                                    <div>
                                        <p className="text-sm">Calories</p>
                                        <p className="text-xl font-semibold">
                                            190
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-2">
                                    <Icons.Droplets className="bg-[#ffc954] w-10 h-10 rounded-full p-1.5" />
                                    <div>
                                        <p className="text-sm">Fat</p>
                                        <p className="text-xl font-semibold">
                                            15g
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>
                                Bacon, Eggs, Bread slices, Salt, Pepper, Cooking
                                oil, Cheese, Avocado slices, Tomato slices,
                                Lettuce, Mayonnaise, Mustard, Hot sauce, Red
                                onion slices.
                            </p>
                        )}
                    </div>

                    <h2 className="font-semibold text-2xl mb-2">RM21.00</h2>

                    <div className="flex justify-between">
                        <div className="custom-number-input h-10 w-48">
                            <div className="flex flex-row h-14 rounded-lg relative bg-transparent mt-1">
                                <button className=" bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-14 rounded-l cursor-pointer">
                                    <span className="w-full text-2xl font-semibold text-custom-orange">
                                        −
                                    </span>
                                </button>
                                <span className="flex items-center justify-center w-16 bg-gray-200 font-semibold text-lg">
                                    0
                                </span>
                                <button className="bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-14 rounded-r cursor-pointer">
                                    <span className="w-full h-fit text-2xl font-semibold text-custom-orange">
                                        +
                                    </span>
                                </button>
                            </div>
                        </div>

                        <Link
                            className="h-14 bg-custom-orange text-white w-52 py-2 rounded-md flex items-center justify-center gap-4"
                            href="/user/cart"
                        >
                            <Icons.ShoppingCart />
                            Add to Cart
                        </Link>
                    </div>

                    <p className="block mt-4">
                        Haven’t booked yet?{" "}
                        <Link className="underline" href="/user/reserve">
                            Book now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
