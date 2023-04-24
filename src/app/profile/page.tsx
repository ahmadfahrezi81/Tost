"use client";

import Icons from "@/components/Icons";
import Button from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [count, setCount] = useState(0);

    const tryToast = () => {
        toast({
            title: "Error signing in",
            message: "Please Try Again late",
            type: "success",
        });
    };

    return (
        <div>
            <h1>heloo</h1>
            <p>Hello from profile</p>

            <Button onClick={tryToast}>Say Toast</Button>

            <p>Count: {count}</p>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 rounded-full h-10 w-10"
            >
                UI
            </Button>

            {/* <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="py-2 text-sm text-gray-700 ">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Earnings
                        </a>
                    </li>
                </ul>

                <Link
                    href="/"
                    className="py-4 px-4 flex items-center text-sm text-gray-700 hover:bg-gray-100"
                >
                    <Icons.LogOut size={16} />
                    <span className="pl-2">Sign Out</span>
                </Link> */}

            {/* <div className="py-4 px-4 flex items-center">
                    <Icons.LogOut size={16} />
                    <Link href="/" className="block pl-2 text-sm text-gray-700">
                        Sign Out
                    </Link>
                </div> */}
            {/* </div> */}

            {isOpen ? (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700 ">
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Earnings
                            </a>
                        </li>
                    </ul>

                    <Link
                        href="/"
                        className="py-4 px-4 flex items-center text-sm text-gray-700 hover:bg-gray-100"
                    >
                        <Icons.LogOut size={16} />
                        <span className="pl-2">Sign Out</span>
                    </Link>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Page;
