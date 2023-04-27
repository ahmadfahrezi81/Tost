import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Burger from "@/images/Burger-Big.png";
import Biscuits from "@/images/Biscuits-Big.png";
import Croissant from "@/images/Croissant-Big.png";
import Dessert from "@/images/Dessert-Big.png";
import Hotdog from "@/images/Hotdog-Big.png";
import Sandwich from "@/images/Sandwich-Big.png";

const page: FC = ({}) => {
    return (
        <>
            <div className="h-screen grid grid-cols-3 gap-10 gap-x-0 mx-10 my-10 justify-items-center">
                <Link href="menu/id" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Burger
                    </p>
                </Link>
                <Link href="menu/id" className="block max-w-sm p-6">
                    <Image src={Biscuits} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Biscuits
                    </p>
                </Link>
                <Link href="menu/id" className="block max-w-sm p-6">
                    <Image src={Croissant} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Croissant
                    </p>
                </Link>
                <Link href="menu/id" className="block max-w-sm p-6">
                    <Image src={Dessert} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Dessert
                    </p>
                </Link>
                <Link href="menu/id" className="block max-w-sm p-6">
                    <Image src={Hotdog} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Hotdog
                    </p>
                </Link>
                <Link href="menu/id" className="block max-w-sm p-6">
                    <Image src={Sandwich} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Sandwich
                    </p>
                </Link>
            </div>
        </>
    );
};

export default page;
