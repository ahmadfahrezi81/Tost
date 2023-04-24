"use client";

import { getServerSession } from "next-auth";
import Link from "next/link";
import Button, { buttonVariants } from "@/ui/Button";
import Icons from "./Icons";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

const Navbar = () => {
    // const session = await getServerSession();
    const [isOpen, setIsOpen] = useState(false);
    const session = true;
    // const router = useRouter();

    // useEffect(() => {
    //     setIsOpen(false);
    //     setCurretnUrl(window.location.pathname);
    //     console.log(window.location.pathname);
    // }, [isOpen currentUrl]);

    return (
        <div
            className="fixed backdrop-blur-sm bg-white/75
            top-0 left-0 right-0 h-20 border-b border-slate-300 
            shadow-sm flex items-center justify-between"
        >
            <div className="container max-w-7xl mx-auto flex justify-between items-center">
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/"
                    className={buttonVariants({ variant: "ghost" })}
                >
                    <Icons.EggFried />
                    &nbsp; <strong>TOST</strong>
                </Link>

                <div className="hidden md:flex gap-4">
                    {/* <Link
                        href="/documentation"
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Documentation
                    </Link> */}
                    {session ? (
                        <>
                            <Link
                                onClick={() => setIsOpen(false)}
                                href="/menu"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Menu
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                href="/reserve"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Reservation
                            </Link>

                            <div className="flex items-center gap-2">
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    href="/notification"
                                    className={buttonVariants({
                                        variant: "ghost",
                                        size: "icon",
                                    })}
                                >
                                    <Icons.Bell />
                                </Link>
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    href="/cart"
                                    className={buttonVariants({
                                        variant: "ghost",
                                        size: "icon",
                                    })}
                                >
                                    <Icons.ShoppingCart />
                                </Link>

                                <Button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="ml-2 rounded-full h-10 w-10"
                                >
                                    UI
                                </Button>
                                {isOpen ? (
                                    <div className="absolute top-24 right-24 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul className="py-2 text-sm text-gray-700 ">
                                            <li>
                                                <Link
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                    href="/profile"
                                                    className="py-2 px-4 flex items-center text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    <Icons.User size={16} />
                                                    <span className="pl-2">
                                                        Profile
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                    href="/history"
                                                    className="py-2 px-4 flex items-center text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    <Icons.History size={16} />
                                                    <span className="pl-2">
                                                        History
                                                    </span>
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li> */}
                                        </ul>

                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            href="/"
                                            className="py-4 px-4 flex items-center text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            <Icons.LogOut size={16} />
                                            <span className="pl-2">
                                                Sign Out
                                            </span>
                                        </Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            {/* <Button>Sign Out</Button> */}
                            {/* <SignOutButton /> */}
                        </>
                    ) : (
                        // <SignInButton />
                        <Button>Sign In</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
