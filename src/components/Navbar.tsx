import { getServerSession } from "next-auth";
import Link from "next/link";
import Button, { buttonVariants } from "@/ui/Button";
import Icons from "./Icons";
// import { useState } from "react";

const Navbar = async () => {
    // const session = await getServerSession();
    // const [isOpen, setIsOpen] = useState(true);
    const session = true;

    return (
        <div
            className="fixed backdrop-blur-sm bg-white/75
            top-0 left-0 right-0 h-20 border-b border-slate-300 
            shadow-sm flex items-center justify-between"
        >
            <div className="container max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className={buttonVariants({ variant: "ghost" })}>
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
                                href="/menu"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Menu
                            </Link>
                            <Link
                                href="/reserve"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Reservation
                            </Link>
                            <Link
                                href="/profile"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Profile
                            </Link>

                            <div className="flex items-center">
                                <Link
                                    href="/cart"
                                    className={buttonVariants({
                                        variant: "ghost",
                                    })}
                                >
                                    <Icons.ShoppingCart />
                                </Link>
                                <Link
                                    href="/notification"
                                    className={buttonVariants({
                                        variant: "ghost",
                                    })}
                                >
                                    <Icons.Bell />
                                </Link>
                                <Button className="ml-4 rounded-full h-10 w-10">
                                    UI
                                </Button>
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
