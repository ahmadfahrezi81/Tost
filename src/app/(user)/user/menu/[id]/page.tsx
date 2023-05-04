import Link from "next/link";
import Image from "next/image";
import DisplayPic from "@/images/BaconEgg-Big.png";
import Button from "@/ui/Button";
import { MdArrowBack } from "react-icons/md";
import Icons from "@/components/Icons";

const page = ({}) => {
    return (
        <div className="bg-white h-full flex flex-col items-center">
            {/* Navigation Bar */}
            <nav>{/* Content of navigation bar */}</nav>

            {/* Back Button */}
            <Link
                className="my-6 w-fit pr-10 pl-6 py-1 rounded-md flex justify-center items-center cursor-pointer focus:border-2"
                href="/user/menu"
            >
                <Icons.ChevronLeft />
                <span className="text-lg pl-1"> Back</span>
            </Link>

            {/* Picture */}
            <Image
                className=" max-w-xs mx-auto mb-8"
                src={DisplayPic}
                alt="Product"
            />

            {/* Text */}
            <h1 className="font-bold text-3xl text-center mb-2">
                Bacon & Egg Toast
            </h1>
            <h2 className="font-semibold text-xl text-center">RM21.00</h2>

            {/* Buttons */}
            <div className="py-6 flex gap-2">
                <Link
                    className="bg-black text-white w-40 py-2 rounded-md flex items-center justify-center"
                    href="/user/cart"
                >
                    Add to Cart
                </Link>
                <Link
                    className="bg-black text-white w-40 py-2 rounded-md flex items-center justify-center"
                    href="/user/reserve"
                >
                    Reserve Table
                </Link>
            </div>

            <h1 className="font-medium text-2xl text-center mb-2 mt-4">
                Ingredients
            </h1>

            {/* Text Below */}
            <p style={{ textAlign: "center" }}>
                Bacon, egg, flour, black pepper, oil
            </p>
        </div>
    );
};

export default page;
