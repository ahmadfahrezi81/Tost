import { FC } from "react";
import Burger from "@/images/Burger.png";
import Image from "next/image";

const page: FC = ({}) => {
    return (
        <>
            <div className="grid grid-cols-4 gap-10 gap-x-0 mx-10 my-10 justify-items-center">
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
                <a href="#" className="block max-w-sm p-6">
                    <Image src={Burger} alt="" width={300} height={300} />
                    <p className="flex justify-center py-3 text-3xl font-semibold">
                        Menu
                    </p>
                </a>
            </div>
        </>
    );
};

export default page;
