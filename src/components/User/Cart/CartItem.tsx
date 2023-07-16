"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import AvocadoEgg from "@/images/AvocadoEgg-Small.png";
import { toast } from "@/components/ui/Toast";
import { CheckoutItem } from "@prisma/client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

interface CartProps {
    checkoutItem: CheckoutItem;
    updateCartItem: (id: string, quantity: number) => void;
    deleteCartItem: (id: string) => void;
}

const CartItem = ({
    checkoutItem,
    deleteCartItem,
    updateCartItem,
}: CartProps) => {
    const router = useRouter();

    const [amount, setAmount] = useState(1);

    //initial amount
    useEffect(() => {
        setAmount(checkoutItem.quantity);
    }, []);

    const handleDelete = () => {
        if (confirm("Do you want to remove this item?")) {
            deleteCartItem(checkoutItem.id);

            // This forces a cache invalidation.
            router.refresh();

            toast({
                title: "Item is Removed",
                message: `You've removed ${checkoutItem.name}.`,
                type: "error",
            });
        }
    };

    useEffect(() => {
        updateCartItem(checkoutItem.id, amount);

        // This forces a cache invalidation.
        router.refresh();
    }, [amount]);

    return (
        <>
            <div className="bg-white rounded-lg flex p-5 gap-5 mb-3 shadow-sm">
                <Image
                    className="rounded-lg"
                    src={checkoutItem.imageURL}
                    alt="Picture of the author"
                    width={140}
                    height={140}
                />
                <div className="flex flex-col">
                    <p className="font-bold text-gray-900 text-xl">
                        {checkoutItem.name}
                    </p>
                </div>

                <div className="px-6 py-4">
                    <div className="custom-number-input h-10 w-48">
                        <div className="flex flex-row h-14 rounded-lg relative bg-transparent mt-1">
                            <button
                                onClick={() => {
                                    if (amount > 1) setAmount(amount - 1);
                                }}
                                className=" bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-14 rounded-l cursor-pointer"
                            >
                                <span className="w-full text-2xl font-semibold text-custom-orange">
                                    −
                                </span>
                            </button>
                            <span className="flex items-center justify-center w-16 bg-gray-200 font-semibold text-lg">
                                {amount}
                            </span>
                            <button
                                onClick={() => {
                                    setAmount(amount + 1);
                                }}
                                className="bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-14 rounded-r cursor-pointer"
                            >
                                <span className="w-full h-fit text-2xl font-semibold text-custom-orange">
                                    +
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 font-semibold text-gray-900 ">
                    {`RM${checkoutItem.price} x ${amount} = ${
                        checkoutItem.price * amount
                    }`}
                </div>

                <Button
                    onClick={handleDelete}
                    variant={"link"}
                    className="text-red-600"
                >
                    Delete
                </Button>
            </div>
        </>
    );
};

export default CartItem;
