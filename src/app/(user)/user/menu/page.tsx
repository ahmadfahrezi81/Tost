import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Bacon from "@/images/BaconEgg-Big.png";
import Avocado from "@/images/AvocadoEgg-Big.png";
import Honey from "@/images/HoneyP-Big.png";
import SFrench from "@/images/SF-Big.png";
import British from "@/images/BritishBean-Big.png";
import Salmon from "@/images/SmokedSalmon-Big.png";
import Corn from "@/images/CornCheese-Big.png";
import Lemon from "@/images/LemonIce-Big.png";
import FrenchBlue from "@/images/FrenchBlue-Big.png";
import CheeseG from "@/images/CheesyGarlic-Big.png";
import CheeseT from "@/images/CheesyTomato-Big.png";
import Tandoori from "@/images/CreamyTandoori-Big.png";
import Mushroom from "@/images/CheesyMushroom-Big.png";
import Tuna from "@/images/SmokedTuna-Big.png";

const Page = ({}) => {
    return (
        <div className="container">
            <h1 className="flex my-14 text-5xl font-bold justify-center leading-none tracking-tight text-gray-900">
                Menu
            </h1>
            <div className="h-screen grid grid-cols-4 auto-cols-max gap-10 gap-x-0 justify-items-center">
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={Bacon} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        Bacon & Egg Tost
                    </p>
                </Link>
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
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
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={Lemon} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        Lemon Ice Tost
                    </p>
                </Link>
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={FrenchBlue} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        French Tost with Blueberries
                    </p>
                </Link>
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={CheeseG} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        Cheesy Garlic Bread Tost
                    </p>
                </Link>
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={CheeseT} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        Cheesy Tomato Tost
                    </p>
                </Link>
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={Tandoori} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        Creamy Tandoori Paneer Sandwich
                    </p>
                </Link>
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={Mushroom} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        Cheesy Mushroom Sandwich
                    </p>
                </Link>
                <Link
                    href="/user/menu/id"
                    className="flex flex-col max-w-sm p-6 items-center"
                >
                    <Image src={Tuna} alt="" width={300} height={300} />
                    <p className="relative text-center mt-6 text-[1.35rem] font-semibold">
                        Smoked Tuna Tost
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Page;
