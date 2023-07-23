"use client";

import { getServerSession } from "next-auth";
import Link from "next/link";
import Button, { buttonVariants } from "@/ui/Button";
import Icons from "./Icons";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/Logo1.svg";
import { Session, User } from "@prisma/client";
import { any, string } from "prop-types";
import { signOut } from "next-auth/react";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

// import { useRouter } from "next/router";

interface NavbarProps {
    name: string | undefined | null;
    image: string | undefined | null;
    email: string | undefined | null;
    totalQuantityCart: number | undefined | null;
}

const Navbar = ({ name, image, email, totalQuantityCart }: NavbarProps) => {
    // const session = await getServerSession();
    const [isOpen, setIsOpen] = useState(false);

    // const user = await getCurrentUser();

    // if (!user) {
    //     redirect("/sign-in");
    // }

    //get all the checkoutItems
    // const checkoutItems = await db.checkoutItem.findMany({
    //     where: {
    //         userId: "",
    //     },
    // });

    // checkoutItems.forEach((item) => {
    //     totalQuantityCart += item.quantity;
    // });

    // const session = session;
    // const router = useRouter();

    // useEffect(() => {
    //     setIsOpen(false);
    //     setCurretnUrl(window.location.pathname);
    //     console.log(window.location.pathname);
    // }, [isOpen currentUrl]);

    return (
        <div
            className="fixed backdrop-blur-sm bg-white
            top-0 left-0 right-0 h-20 border-b border-slate-300 
            shadow-sm flex items-center justify-between z-10"
        >
            {/* max-w-7xl */}
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/"
                    className={buttonVariants({ variant: "none" })}
                >
                    <Image
                        priority
                        src={Logo}
                        height={40}
                        width={40}
                        alt="Logo"
                    />
                    &nbsp;<strong className="text-xl">TOST</strong>
                </Link>

                <div className="flex gap-2 md:gap-4">
                    {name ? (
                        <>
                            <Link
                                onClick={() => setIsOpen(false)}
                                href="/user/menu"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Menu
                            </Link>
                            {/* <Link
                                onClick={() => setIsOpen(false)}
                                href="/user/reserve"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Reservation
                            </Link> */}

                            <div className="flex items-center gap-2">
                                {/* <Link
                                    onClick={() => setIsOpen(false)}
                                    href="/user/history"
                                    className={
                                        buttonVariants({
                                            variant: "ghost",
                                            size: "icon",
                                        }) + " relative"
                                    }
                                >
                                    <Icons.History />
                                    <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full -top-0 -right-0"></div>
                                </Link> */}
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    href="/user/cart"
                                    className={
                                        buttonVariants({
                                            variant: "ghost",
                                            size: "icon",
                                        }) + " relative"
                                    }
                                >
                                    <Icons.ShoppingCart />
                                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full -top-1 -right-1">
                                        {totalQuantityCart}
                                    </div>
                                </Link>

                                {/* <Button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="ml-2 rounded-full h-10 w-10"
                                > */}
                                <Image
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="border-2 rounded-full ml-2 h-10 w-10 cursor-pointer"
                                    src={`${image}`}
                                    width={30}
                                    height={30}
                                    alt="Profile Button"
                                />
                                {/* </Button> */}
                                {isOpen ? (
                                    <div className="absolute top-16 right-4 xl:right-16 z-10 bg-white rounded shadow w-60 p-2">
                                        <span className="inline-block p-2">
                                            <p className="text-sm font-semibold">
                                                {name}
                                            </p>
                                            <p className="text-sm font-light mt-0.5">
                                                {email}
                                            </p>
                                        </span>

                                        <hr />

                                        <ul className="py-2 text-sm text-gray-700 ">
                                            <li>
                                                <Link
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                    href="/user/profile"
                                                    className="py-2 pl-2 rounded flex items-center text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    <Icons.User size={16} />
                                                    <span className="pl-2">
                                                        Profile
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>

                                        <hr />

                                        <span
                                            className="cursor-pointer mt-2 rounded py-2 pl-2 flex items-center text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                signOut();
                                            }}
                                        >
                                            <Icons.LogOut size={16} />
                                            <span className="pl-2">
                                                Sign Out
                                            </span>
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
