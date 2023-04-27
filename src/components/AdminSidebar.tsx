"use client";

import { Sidebar } from "flowbite-react";
import Icons from "./Icons";
import Logo from "@/public/Logo1.svg";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/Button";

const AdminSidebar = ({}) => {
    return (
        <div className="w-fit">
            <Sidebar>
                <Link
                    href="/"
                    className={
                        (buttonVariants({ variant: "none" }),
                        "flex items-center justify-center mb-16 pt-6")
                    }
                >
                    <Image
                        priority
                        src={Logo}
                        height={40}
                        width={40}
                        alt="Logo"
                    />
                    &nbsp;&nbsp;<strong className="text-xl">TOST</strong>
                </Link>

                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin">
                            <div className="flex items-center pl-8 pr-10 py-1 w-fit m-auto">
                                <Icons.Home size={20} /> &nbsp;&nbsp;{" "}
                                <span className="text-lg font-semibold">
                                    Home
                                </span>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/users">
                            <div className="flex items-center pl-8 pr-10 py-1 w-fit m-auto">
                                <Icons.Users size={20} /> &nbsp;&nbsp;{" "}
                                <span className="text-lg font-semibold">
                                    Users
                                </span>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/menu">
                            <div className="flex items-center pl-8 pr-10 py-1 w-fit m-auto">
                                <Icons.Image size={20} /> &nbsp;&nbsp;{" "}
                                <span className="text-lg font-semibold">
                                    Menu
                                </span>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/table">
                            <div className="flex items-center pl-8 pr-10 py-1 w-fit m-auto">
                                <Icons.Image size={20} /> &nbsp;&nbsp;{" "}
                                <span className="text-lg font-semibold">
                                    Table
                                </span>
                            </div>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    {/* <Sidebar.ItemGroup>
                        <Sidebar.Item href="#">Upgrade to Pro</Sidebar.Item>
                        <Sidebar.Item href="#">Documentation</Sidebar.Item>
                    </Sidebar.ItemGroup> */}
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default AdminSidebar;
