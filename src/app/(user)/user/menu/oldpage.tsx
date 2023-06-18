"use client";

import { FC, useState } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Bacon from "@/images/BaconEgg-Big.png";
import Avocado from "@/images/AvocadoEgg-Big.png";
import Honey from "@/images/HoneyP-Big.png";
import SFrench from "@/images/SF-Big.png";
import British from "@/images/BritishBean-Big.png";
import Salmon from "@/images/SmokedSalmon-Big.png";
import Corn from "@/images/CornCheese-Big.png";

import Icons from "@/components/Icons";

const Page = ({}) => {
    const pathname = usePathname();
    const [toggleAddToCart, setToggleAddToCart] = useState(true);

    return (
        <div className="container mt-10 pb-20 pl-10">
            <div className="flex justify-between h-20">
                <div className="flex-1 h-20">
                    <h1 className="text-4xl font-bold">Menu</h1>
                    <h2 className="text-xl mt-1">Find the best foods 🥪</h2>
                </div>
                <div className="flex-1 flex gap-2.5 justify-end">
                    <Link
                        href={pathname + "#food"}
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105 
                        hover:border-gray-300"
                    >
                        <Icons.Sandwich size={30} />
                        <span className="font-light text-sm">Food</span>
                    </Link>
                    <Link
                        href={pathname + "#drink"}
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105
                        hover:border-gray-300
                        "
                    >
                        <Icons.CupSoda size={30} />
                        <span className="font-light text-sm">Drink</span>
                    </Link>
                    <Link
                        href={pathname + "#dessert"}
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105
                        hover:border-gray-300
                        "
                    >
                        <Icons.IceCream2 size={30} />
                        <span className="font-light text-sm">Dessert</span>
                    </Link>
                </div>
            </div>

            {/* Food */}
            <section>
                {/* 👇 This is for centering while scrolling */}
                <span
                    id="food"
                    style={{
                        display: "block",
                        height: "80px",
                        marginTop: "-80px",
                        visibility: "hidden",
                    }}
                ></span>
                <h3 className="text-2xl font-bold mt-8 mb-4">Food</h3>

                <div className="h-fit grid grid-cols-4 auto-cols-max gap-4 justify-items-center">
                    {/* Main */}
                    <div className="flex flex-col max-w-sm p-5 border-2 rounded-lg hover:border-gray-300">
                        <Image
                            className="rounded-md"
                            src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                            alt="Product"
                            width={300}
                            height={300}
                        />

                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost Main
                        </p>
                        <p className="mb-2">RM25</p>

                        <div className="flex gap-2">
                            {toggleAddToCart ? (
                                <span
                                    onClick={() => setToggleAddToCart(false)}
                                    className="cursor-pointer h-10 bg-custom-orange text-white w-full p-2 rounded 
                                flex items-center justify-center gap-2 hover:opacity-90 hover:rounded-none"
                                >
                                    <Icons.ShoppingCart size={18} />
                                    <span className="text-sm">Add to cart</span>
                                </span>
                            ) : (
                                <div className="flex flex-row h-10 w-full rounded relative bg-transparent">
                                    <button className=" bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-20 rounded-l cursor-pointer">
                                        <span className="w-full text-2xl font-semibold text-custom-orange">
                                            −
                                        </span>
                                    </button>
                                    <span className="flex items-center w-full justify-center bg-gray-200 font-semibold text-lg">
                                        0
                                    </span>
                                    <button className="bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-20 rounded-r cursor-pointer">
                                        <span className="w-full h-fit text-2xl font-semibold text-custom-orange">
                                            +
                                        </span>
                                    </button>
                                </div>
                            )}

                            <Link
                                className="h-10 bg-gray-800 text-white w-10 p-2 rounded 
                                flex items-center justify-center hover:opacity-90 hover:rounded-none"
                                href="/user/menu/id"
                            >
                                <Icons.Info />
                            </Link>
                        </div>
                    </div>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-5 border-2 rounded-lg hover:rounded-none hover:border-gray-300"
                    >
                        <Image
                            className="rounded-md"
                            src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                            alt="Product"
                            width={300}
                            height={300}
                        />

                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <p className="mb-2">RM25</p>

                        <div className="flex gap-2 h-10">
                            <Link
                                className="h-10 bg-custom-orange text-white w-full p-2 rounded 
                                flex items-center justify-center gap-2 hover:opacity-90 hover:rounded-none"
                                href="/user/cart"
                            >
                                <Icons.ShoppingCart size={18} />
                                <span className="text-sm">Add to cart</span>
                            </Link>
                            <Link
                                className="h-10 w-11 bg-gray-800 text-white p-2 rounded 
                                flex items-center justify-center hover:opacity-90 hover:rounded-none"
                                href="/user/menu/id"
                            >
                                <Icons.ChevronRight size={20} />
                            </Link>
                        </div>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-5 border-2 rounded-lg hover:rounded-none hover:border-gray-300"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />

                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <p className="mb-2">RM25</p>

                        <div className="flex gap-2">
                            <Link
                                className="h-10 bg-custom-orange text-white w-full p-2 rounded 
                                flex items-center justify-center gap-2 hover:opacity-90 hover:rounded-none"
                                href="/user/cart"
                            >
                                <Icons.ShoppingCart size={18} />
                                <span className="text-sm">Add to cart</span>
                            </Link>
                            <Link
                                className="h-10 bg-[#ffad29] text-white w-10 p-2 rounded 
                                flex items-center justify-center hover:opacity-90 hover:rounded-none"
                                href="/user/menu/id"
                            >
                                <Icons.ChevronRight />
                            </Link>
                        </div>
                    </Link>

                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-6 items-center border-2 rounded-xl"
                    >
                        <Image src={Avocado} alt="" width={300} height={300} />
                        <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                            Avocado & Egg Tost
                        </p>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-6 items-center"
                    >
                        <Image src={Honey} alt="" width={300} height={300} />
                        <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                            Honey Dipped Pistachios Tost
                        </p>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-6 items-center"
                    >
                        <Image src={SFrench} alt="" width={300} height={300} />
                        <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                            Sourdough Brioche French Tost
                        </p>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-6 items-center"
                    >
                        <Image src={British} alt="" width={300} height={300} />
                        <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                            British Baked Bean Tost
                        </p>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-6 items-center"
                    >
                        <Image src={Salmon} alt="" width={300} height={300} />
                        <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                            Smoked Salmon Tost
                        </p>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-6 items-center"
                    >
                        <Image src={Corn} alt="" width={300} height={300} />
                        <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                            Corn Cheese Sandwich
                        </p>
                    </Link>
                </div>
            </section>

            {/* Drink */}
            <section>
                {/* 👇 This is for centering while scrolling */}
                <span
                    id="drink"
                    style={{
                        display: "block",
                        height: "80px",
                        marginTop: "-80px",
                        visibility: "hidden",
                    }}
                ></span>
                <h3 className="text-2xl font-bold mt-8 mb-4">Drink</h3>
                <div className="h-fit grid grid-cols-4 auto-cols-max gap-4 justify-items-center">
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-4 border-2 rounded-xl"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />
                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <p className="my-1">RM 25</p>
                        <Link
                            className="h-10 bg-custom-orange text-white w-full py-2 rounded-md flex items-center justify-center"
                            href="/user/cart"
                        >
                            <Icons.ShoppingCart />
                        </Link>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-4 border-2 rounded-xl"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />
                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <div className="flex">
                            <p className="my-1 flex-1">RM 25</p>
                            <Link
                                className="h-10 bg-custom-orange text-white w-16 rounded-md flex items-center justify-center"
                                href="/user/cart"
                            >
                                <Icons.ShoppingCart />
                            </Link>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Dessert */}
            <section>
                {/* 👇 This is for centering while scrolling */}
                <span
                    id="dessert"
                    style={{
                        display: "block",
                        height: "80px",
                        marginTop: "-80px",
                        visibility: "hidden",
                    }}
                ></span>

                <h3 className="text-2xl font-bold mt-8 mb-4">Dessert</h3>
                <div className="h-fit grid grid-cols-4 auto-cols-max gap-4 justify-items-center">
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-4 border-2 rounded-xl"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />
                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <p className="my-1">RM 25</p>
                        <Link
                            className="h-10 bg-custom-orange text-white w-full py-2 rounded-md flex items-center justify-center"
                            href="/user/cart"
                        >
                            <Icons.ShoppingCart />
                        </Link>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-4 border-2 rounded-xl"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />
                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <div className="flex">
                            <p className="my-1 flex-1">RM 25</p>
                            <Link
                                className="h-10 bg-custom-orange text-white w-16 rounded-md flex items-center justify-center"
                                href="/user/cart"
                            >
                                <Icons.ShoppingCart />
                            </Link>
                        </div>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-4 border-2 rounded-xl"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />
                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <div className="flex">
                            <p className="my-1 flex-1">RM 25</p>
                            <Link
                                className="h-10 bg-custom-orange text-white w-16 rounded-md flex items-center justify-center"
                                href="/user/cart"
                            >
                                <Icons.ShoppingCart />
                            </Link>
                        </div>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-4 border-2 rounded-xl"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />
                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <div className="flex">
                            <p className="my-1 flex-1">RM 25</p>
                            <Link
                                className="h-10 bg-custom-orange text-white w-16 rounded-md flex items-center justify-center"
                                href="/user/cart"
                            >
                                <Icons.ShoppingCart />
                            </Link>
                        </div>
                    </Link>
                    <Link
                        href="/user/menu/id"
                        className="flex flex-col max-w-sm p-4 border-2 rounded-xl"
                    >
                        <Image src={Bacon} alt="" width={300} height={300} />
                        <p className="mt-3 font-semibold text-lg">
                            Bacon & Egg Tost
                        </p>
                        <div className="flex">
                            <p className="my-1 flex-1">RM 25</p>
                            <Link
                                className="h-10 bg-custom-orange text-white w-16 rounded-md flex items-center justify-center"
                                href="/user/cart"
                            >
                                <Icons.ShoppingCart />
                            </Link>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Page;
