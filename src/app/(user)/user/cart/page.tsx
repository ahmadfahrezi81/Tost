"use client";

import Image from "next/image";
import Burgir from "@/images/Burgir.png";

import Link from "next/link";

import { useState, useEffect } from "react";
import { toast } from "@/ui/Toast";

const Page = ({}) => {
    const [count, setCount] = useState(1);
    const [item, setItem] = useState<{
        name: string;
        price: number;
        quantity: number;
    }>({
        name: "Bacon & Egg Tost",
        price: 10000,
        quantity: 1,
    });

    useEffect(() => {
        if (item.quantity == 0) {
            if (confirm("Do you want to delete this item?")) {
                tryToast();
            } else {
                setItem({
                    ...item,
                    quantity: 1,
                });
            }
        }
    }, [item.quantity]);

    const tryToast = () => {
        toast({
            title: "Item Deleted",
            message: `You've removed "${item.name}"`,
            type: "error",
        });
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
                            {item.quantity > 0 ? (
                                <tr className=" border-b">
                                    <td className="w-32 p-4">
                                        <Image
                                            src={Burgir}
                                            alt="Picture of the author"
                                            width={500}
                                            height={500}
                                        />
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900 ">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <button
                                                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                                                type="button"
                                                onClick={() =>
                                                    setItem({
                                                        ...item,
                                                        quantity:
                                                            item.quantity - 1,
                                                        price:
                                                            10000 *
                                                            (item.quantity - 1),
                                                    })
                                                }
                                            >
                                                <span className="sr-only">
                                                    Quantity button
                                                </span>
                                                <svg
                                                    className="w-4 h-4"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <div>
                                                <input
                                                    type="number"
                                                    id="first_product"
                                                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 k:bg-gray-700 rk:ay-400"
                                                    value={item.quantity}
                                                    min={1}
                                                />
                                            </div>
                                            <button
                                                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                                type="button"
                                                onClick={() =>
                                                    setItem({
                                                        ...item,
                                                        quantity:
                                                            item.quantity + 1,
                                                        price:
                                                            10000 *
                                                            (item.quantity + 1),
                                                    })
                                                }
                                            >
                                                <span className="sr-only">
                                                    Quantity button
                                                </span>
                                                <svg
                                                    className="w-4 h-4"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                                        RM {item.price}
                                    </td>
                                </tr>
                            ) : null}
                            <tr className=" border-b  ">
                                <td className="w-32 p-4">
                                    <Image
                                        src={Burgir}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-900 ">
                                    Lemon Ice Tost
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                                            type="button"
                                        >
                                            <span className="sr-only">
                                                Quantity button
                                            </span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div>
                                            <input
                                                type="number"
                                                id="first_product"
                                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 k:bg-gray-700 rk:ay-400"
                                                placeholder="1"
                                            />
                                        </div>
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                            type="button"
                                        >
                                            <span className="sr-only">
                                                Quantity button
                                            </span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    RM 30
                                </td>
                            </tr>
                            <tr className=" border-b  ">
                                <td className="w-32 p-4">
                                    <Image
                                        src={Burgir}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-900 ">
                                    British Baked Bean Tost
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                                            type="button"
                                        >
                                            <span className="sr-only">
                                                Quantity button
                                            </span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div>
                                            <input
                                                type="number"
                                                id="first_product"
                                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 k:bg-gray-700 rk:ay-400"
                                                placeholder="1"
                                            />
                                        </div>
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                            type="button"
                                        >
                                            <span className="sr-only">
                                                Quantity button
                                            </span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    RM 24
                                </td>
                            </tr>
                            <tr className=" border-b  ">
                                <td className="w-32 p-4">
                                    <Image
                                        src={Burgir}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-900 ">
                                    Creamy Tandoori Paneer Sandwich Tost
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                                            type="button"
                                        >
                                            <span className="sr-only">
                                                Quantity button
                                            </span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div>
                                            <input
                                                type="number"
                                                id="first_product"
                                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 k:bg-gray-700 rk:ay-400"
                                                placeholder="1"
                                            />
                                        </div>
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                            type="button"
                                        >
                                            <span className="sr-only">
                                                Quantity button
                                            </span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    RM 18
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex mt-10  h-screen">
                    <div className="w-full mr-4">
                        <div className="mb-6 w-full lg:w-3/4 h-56">
                            <label
                                htmlFor="message"
                                className="block font-boblock mb-2 text-sm font-bold text-gray-900ld text-gray-900"
                            >
                                Add Notes
                            </label>
                            <textarea
                                rows={6}
                                id="message"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your notes here"
                            ></textarea>
                        </div>
                    </div>
                    <div className="w-full  flex justify-end items-start">
                        <div className="w-full rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    Order Summary
                                </div>
                                <p className="text-gray-700 text-base">
                                    Here are the items you have selected:
                                </p>

                                <div className="flex justify-between mt-4">
                                    <p className="text-gray-700 text-base">
                                        Total
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        RM 77.00
                                    </p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <p className="text-gray-700 text-base">
                                        Tax Service
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        RM 1.00
                                    </p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <p className="text-gray-700 text-base">
                                        Subtotal
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        RM 72.00
                                    </p>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={tryToast}
                                        className="bg-custom-orange hover:bg-custom-red-hov text-white font-bold py-2 px-4 rounded"
                                    >
                                        Checkout
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
