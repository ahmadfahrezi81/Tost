import Link from "next/link";
import Image from "next/image";
import DisplayPic from "@/images/burger.png";
import Button from "@/ui/Button";
import { MdArrowBack } from "react-icons/md";


const page = ({}) => {
    return (
        <div className = "bg-white h-screen" >
            {/* Navigation Bar */}
            <nav>{/* Content of navigation bar */}</nav>

            {/* Back Button */}
            <Link 
                className="py-8 flex justify-center items-center" 
                href="/user/menu">
                <div className="flex items-center">
                    <MdArrowBack/>
                    Back
                </div>
            
            </Link>

            {/* Picture */}
            <Image
                className=" max-w-xs mx-auto"
                src={DisplayPic}
                alt="Product"
            />

            {/* Text */}
            <h1 className="font-bold text-4xl text-center">Ini Burger (350 Kcal) </h1>
            <h2 className="font-semibold text-2xl text-center">RM 21.00</h2>

            {/* Buttons */}
            <div
                className="py-6"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Link
                    className="hover: bg-black text-white px-3 py-2.5 flex rounded-md" style={{ marginRight: "10px" }}
                    href="/user/cart">
                    Add to Cart
                </Link>
                {/* <Button className="rounded-md" style={{ marginRight: "10px" }}>
                    <Link href="/user/cart">
                    Add to Cart
                    </Link>
                </Button> */}
                <Link
                    className="hover: bg-black text-white px-3 py-2.5 flex rounded-md" style={{ marginRight: "10px" }}
                    href="/user/reserve">
                    Reserve Table
                </Link>
                {/* <Button>
                    <Link href="/user/reserve">
                    Reserve Table
                    </Link>
                </Button> */}
            </div>

            <h1 className="font-medium text-3xl text-center">Ingredients</h1>

            {/* Text Below */}
            <p style={{ textAlign: "center" }}>Bread <br /> Lettuce <br /> Corriander <br />Meat</p>
        </div>
    );
};

export default page;
