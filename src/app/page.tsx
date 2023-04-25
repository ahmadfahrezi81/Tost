import Image from "next/image";
import { Metadata } from "next";
import toast_pict from "/public/assets/toast_pict.jpg"

export const metadata: Metadata = {
    title: "Tost | Home",
    description: "The best toast in the world",
};

export default function Home() {

    function getStarted() {
        alert("yeay it works")
    }
    
    return <div>
        <div className="h-full w-screen flex flex-col justify-between md:flex-row">
            <div className="flex justify-center text-center items-center md:text-left md:justify-start">
                <div className="font-sans m-20">
                    <h1 className="text-7xl mb-3 font-bold text-custom-green">TOST.</h1>
                    <h3 className="text-2xl mb-10">The o-gee of them all</h3>
                    <button className="bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md">Get Started</button>
                </div>
            </div>
            <div className="flex justify-center relative">
                <Image
                 src={toast_pict}
                 alt="Picture of a toast"
                 height={750}
                 priority
                />
            </div>
        </div>
    </div>;
}
