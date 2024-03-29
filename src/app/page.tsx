import Image from "next/image";
import { Metadata } from "next";
import toast_pict from "@/images/toast_pict.jpg";
import { authOptions, getAuthSession } from "@/lib/auth";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/lib/session";
import { db } from "@/lib/db";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default async function Home() {
    const user = await getCurrentUser();

    let totalQuantityCart = 0;

    // const checkoutItems = await db.checkoutItem.findMany({
    //     where: {
    //         userId: user?.id,
    //     },
    // });

    // checkoutItems.forEach((item) => {
    //     totalQuantityCart += item.quantity;
    // });

    return (
        <>
            <Navbar
                name={user?.name}
                image={user?.image}
                email={user?.email}
                totalQuantityCart={totalQuantityCart}
            />
            <div className="h-screen pt-20 w-full flex flex-col justify-between md:flex-row">
                <div className="flex-1 flex justify-center text-center items-center md:text-left md:justify-start">
                    <div className="font-sans mx-auto my-20 lg:m-20">
                        <h1 className="text-7xl mb-3 font-extrabold text-custom-green">
                            TOST.
                        </h1>
                        <h3 className="text-2xl mb-10">
                            The o-gee of them all
                        </h3>
                        {/* <button className="bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md">
                            Get Started
                        </button> */}
                        {user ? (
                            <Link
                                href="/user/menu"
                                className={cn(
                                    buttonVariants({ variant: "none" }),
                                    "block-inline bg-custom-red hover:bg-custom-red-hov text-white py-4 px-20 rounded-md"
                                )}
                            >
                                Go to Menu 🤩
                            </Link>
                        ) : (
                            <Link
                                href="/sign-in"
                                className={cn(
                                    buttonVariants({ variant: "none" }),
                                    "block-inline bg-custom-red hover:bg-custom-red-hov text-white py-4 px-20 rounded-md"
                                )}
                            >
                                Get Started
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex-1 flex justify-center relative md:m-4">
                    <Image
                        className="md:rounded-xl lg:min-h-[600px] lg:min-w-[600px]"
                        src={toast_pict}
                        alt="Picture of a toast"
                        objectFit="cover"
                        fill
                        priority
                    />
                </div>
            </div>
        </>
    );
}
