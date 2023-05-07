"use client";

import BaconEgg from "@/images/BaconEgg-Small.png";
import Link from "next/link";

import { useState, useEffect } from "react";

import CartItem from "@/components/(User)/(Cart)/CartItem";

interface CartTotal {
    subtotal: number;
    tax: number;
    total: number;
}

const Page = ({}) => {
    const [cart, setCart] = useState<CartTotal>({
        subtotal: 0,
        tax: 0,
        total: 0,
    });

    const handleClick = (obj: CartTotal) => {
        setCart((cart) => ({ ...cart, ...obj }));
    };

    return (
        <>
            <div className="relative mx-20 mr-20 overflow-auto">
                <div className="flex flex-col justify-between items-left">
                    <span className="p-5 text-3xl font-bold text-gray-900  text-left">
                        CHECKOUT
                    </span>
                    <table className="w-full text-sm text-left text-gray-500 px-5">
                        <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-500 bg-white ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem
                                name={"Avocado & Egg Tost"}
                                price={10}
                                quantity={1}
                                image={BaconEgg}
                            />
                        </tbody>
                    </table>
                </div>
                <div className="flex mt-10  h-screen">
                    <div className="w-full mr-4">
                        <div className="mb-6 w-full lg:w-3/4 h-56">
                            <label
                                htmlFor="message"
                                className="ml-1 block font-boblock mb-2 text-lg font-bold text-gray-900"
                            >
                                Add Notes
                            </label>
                            <textarea
                                rows={8}
                                id="message"
                                className="ml-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your notes here"
                            ></textarea>
                        </div>
                    </div>
                    <div className="w-full  flex justify-end items-start">
                        <div className="py-6 px-8 w-full rounded overflow-hidden border">
                            <div className="font-bold text-xl mb-2">
                                Order Summary
                            </div>
                            <p className="text-gray-700 text-base">
                                Here are the items you have selected:
                            </p>

                            <div className="flex justify-between mt-4">
                                <p className="text-gray-700 text-base">
                                    Subtotal
                                </p>
                                <p className="text-gray-700 text-base">
                                    RM {cart.subtotal}
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="text-gray-700 text-base">
                                    Tax Service
                                </p>
                                <p className="text-gray-700 text-base">
                                    RM {cart.tax}
                                </p>
                            </div>
                            <div className="flex justify-between mt-4 font-bold">
                                <p className="text-gray-700 text-base">Total</p>
                                <p className="text-gray-700 text-base">
                                    RM {cart.total}
                                </p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <Link
                                    href={"/user/payment"}
                                    className="bg-custom-orange hover:bg-custom-red-hov text-white font-bold py-2 px-4 rounded"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
