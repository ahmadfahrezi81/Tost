"use client";

import Image, { StaticImageData } from "next/image";
import { FC, useEffect, useState } from "react";
import AvocadoEgg from "@/images/AvocadoEgg-Small.png";
import { toast } from "@/components/ui/Toast";

interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
    image: StaticImageData;
}

const CartItem = ({ name, price, quantity, image }: CartItemProps) => {
    const [item, setItem] = useState({
        name,
        price,
        quantity,
    });

    useEffect(() => {
        if (item.quantity == 0) {
            if (confirm("Do you want to delete this item?")) {
                tryToast();
            } else {
                setItem({
                    name,
                    quantity,
                    price,
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
            {item.quantity > 0 ? (
                <tr className="border-b">
                    <td className="w-32 p-4">
                        <Image
                            src={image}
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
                                        quantity: item.quantity - 1,
                                        price: price * (item.quantity - 1),
                                    })
                                }
                            >
                                <span className="sr-only">Quantity button</span>
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
                                        quantity: item.quantity + 1,
                                        price: price * (item.quantity + 1),
                                    })
                                }
                            >
                                <span className="sr-only">Quantity button</span>
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
        </>
    );
};

export default CartItem;
