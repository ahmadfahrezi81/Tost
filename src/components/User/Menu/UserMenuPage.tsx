"use client";

import { CheckoutItem, Menu } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Icons from "../../Icons";
import { use, useEffect, useState } from "react";

import { toast } from "@/ui/Toast";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

interface UserMenuProps extends Menu {
    quantity: number;
    isAdded: boolean;
    checkoutItem: CheckoutItem;
    createCheckout: (checkout: any) => void;
    deleteCartItem: (id: string) => void;
}

export function UserMenuPage({
    id,
    name,
    price,
    description,
    ingredients,
    calories,
    fats,
    imageURL,
    type,
    createCheckout,
    deleteCartItem,
    checkoutItem,
    quantity,
    isAdded,
}: UserMenuProps) {
    const [toggle, setToggle] = useState(true);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(quantity);
    }, []);

    const router = useRouter();

    const tryToast = () => {
        toast({
            title: "Added to cart",
            message: `You've added ${amount} x ${name}`,
            type: "success",
        });
    };

    const handleDelete = () => {
        if (confirm("Do you want to remove this item?")) {
            deleteCartItem(checkoutItem.id);

            // This forces a cache invalidation.
            router.refresh();

            toast({
                title: "Item is Removed",
                message: `You've removed ${name}.`,
                type: "error",
            });
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-4">
            <div className="flex-1">
                <Image
                    className="mx-auto rounded-2xl"
                    src={imageURL}
                    alt="Product"
                    width={600}
                    height={600}
                />
            </div>

            <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-medium text-lg">{type}</h3>
                <h1 className="font-semibold text-2xl mb-2">{name}</h1>
                <p>{description}</p>

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
                            <h3 className="font-semibold text-lg">Overview</h3>
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
                                        {ingredients.split(",").length}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center gap-2">
                                <Icons.Flame className="bg-orange-500 w-10 h-10 rounded-full p-1.5" />
                                <div>
                                    <p className="text-sm">Calories</p>
                                    <p className="text-xl font-semibold">
                                        {calories}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center gap-2">
                                <Icons.Droplets className="bg-[#ffc954] w-10 h-10 rounded-full p-1.5" />
                                <div>
                                    <p className="text-sm">Fat</p>
                                    <p className="text-xl font-semibold">
                                        {fats}g
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>{ingredients}</p>
                    )}
                </div>

                <h2 className="font-semibold text-2xl mb-2">
                    RM{amount == 0 ? price : price * amount}
                </h2>

                <div className="flex flex-col gap-2 items-center justify-between lg:flex-row">
                    {/* <div className="custom-number-input h-fit w-full md:w-fit"> */}
                    <div className="w-full flex flex-row justify-between bg-gray-200 h-14 lg:w-48 rounded-lg relative ">
                        <button
                            disabled={isAdded}
                            onClick={() => {
                                if (amount > 0) setAmount(amount - 1);
                            }}
                            className=" text-gray-600 active:bg-gray-300 h-full w-14 rounded-l cursor-pointer"
                        >
                            <span className="w-full text-2xl font-semibold text-custom-orange">
                                −
                            </span>
                        </button>
                        <span className="flex items-center justify-center w-16  font-semibold text-lg">
                            {amount}
                        </span>
                        <button
                            disabled={isAdded}
                            onClick={() => {
                                setAmount(amount + 1);
                            }}
                            className="text-gray-600 active:bg-gray-300 h-full w-14 rounded-r cursor-pointer"
                        >
                            <span className="w-full h-fit text-2xl font-semibold text-custom-orange">
                                +
                            </span>
                        </button>
                    </div>
                    {/* </div> */}

                    <button
                        className="h-14 bg-custom-orange text-white w-full px-10 py-2 rounded-md flex items-center justify-center gap-4"
                        onClick={() => {
                            if (!isAdded) {
                                createCheckout({
                                    name,
                                    price,
                                    quantity: amount,
                                    imageURL,
                                    menuId: id,
                                });

                                tryToast();

                                router.refresh();
                            } else {
                                toast({
                                    title: `${quantity} of ${name} already in Cart`,
                                    message: `Redirecting to Cart Page`,
                                    type: "warning",
                                });

                                router.push("/user/cart");
                            }
                        }}
                    >
                        {isAdded ? (
                            <>
                                <span className="bg-white text-custom-orange w-5 h-5 flex justify-center items-center rounded-full">
                                    {quantity}
                                </span>
                                Already in Cart
                            </>
                        ) : (
                            <>
                                <Icons.ShoppingCart /> Add to Cart
                            </>
                        )}
                    </button>
                </div>

                {isAdded ? (
                    <p
                        className="mt-4 underline cursor-pointer"
                        onClick={handleDelete}
                    >
                        Remove
                    </p>
                ) : null}
            </div>
        </div>
    );
}
