"use client";

import { Sidebar } from "flowbite-react";
import Icons from "./Icons";
import Logo from "@/public/Logo1.svg";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/Button";

const AdminSidebar = ({}) => {
  return (
    <div className="w-fit h-full fixed">
      <Sidebar>
        <Link
          href="/"
          className={
            (buttonVariants({ variant: "none" }),
            "flex items-center justify-center mb-16 pt-6")
          }
        >
          <Image priority src={Logo} height={40} width={40} alt="Logo" />
          &nbsp;&nbsp;<strong className="text-xl">TOST</strong>
        </Link>

                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        {/* <Sidebar.Item href="/admin">
                            <div className="flex items-center pl-8 pr-10 py-1 w-fit m-auto">
                                <Icons.LayoutDashboard size={20} /> &nbsp;&nbsp;{" "}
                                <span className="text-lg font-semibold">
                                    Home
                                </span>
                            </div>
                        </Sidebar.Item> */}
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
                                <Icons.BookOpen size={20} /> &nbsp;&nbsp;{" "}
                                <span className="text-lg font-semibold">
                                    Menus
                                </span>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/table">
                            <div className="flex items-center pl-8 pr-10 py-1 w-fit m-auto">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 128 128"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.6667 37.3333C10.6667 42.4 10.9334 42.6666 14.6667 42.6666C17.7334 42.6666 18.6667 43.2 18.6667 45.3333C18.6667 47.6 13.3334 85.0666 11.3334 96.9333C10.5334 101.333 10.5334 101.333 15.8667 101.333C20.4001 101.333 21.3334 100.8 22.0001 98.4C22.6667 94.8 26.6667 67.2 26.6667 65.3333C26.6667 64.5333 40.6667 64 63.7334 64H100.8L103.2 80.2666C106.4 102.4 105.867 101.333 112.133 101.333C117.333 101.333 117.467 101.333 116.667 96.9333C116.267 94.6666 114.4 82.8 112.667 70.6666C110.8 58.5333 109.067 47.3333 108.667 45.6C108 42.9333 108.4 42.6666 112.667 42.6666C117.2 42.6666 117.333 42.5333 117.333 37.3333V32H64.0001H10.6667V37.3333ZM97.8668 44.8C98.2668 46 98.6668 48.4 98.6668 50.1333V53.3333H64.0001H29.3334V48.9333C29.3334 46.4 29.7334 44 30.2667 43.6C30.6667 43.0666 46.0001 42.6666 64.1334 42.6666C92.9334 42.6666 97.2001 42.9333 97.8668 44.8Z"
                                        fill="black"
                                    />
                                </svg>{" "}
                                &nbsp;&nbsp;{" "}
                                <span className="text-lg font-semibold">
                                    Tables
                                </span>
                            </div>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>

        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminSidebar;
