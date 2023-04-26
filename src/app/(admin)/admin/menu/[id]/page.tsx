import Link from "next/link";
import Image from "next/image";
import DisplayPic from "@/images/burger.png";
import { Form as MENUIDFORM } from "../../../../../components/menuidform";
import Button from "@/ui/Button";

export default function MenuIdPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            {/* Side Nav Bar */}
            <nav>{/* Content of side navigation bar */}</nav>

            <div style={{ justifyContent: "center" }}>
                {/* Picture */}
                <Image
                    className=" max-w-xs mx-auto"
                    src={DisplayPic}
                    alt="Product"
                />

                {/* Buttons */}
                <div
                    className="flex flex-col items-center justify-center "
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10px",
                    }}
                >
                    <Button
                        className="max-w-xs content-center"
                        style={{ marginBottom: "10px" }}
                    >
                        Change Picture
                    </Button>
                    <Button
                        className="max-w-xs content-center"
                        style={{ marginBottom: "10px" }}
                    >
                        Remove Picture
                    </Button>
                </div>
            </div>

            <div className="shadow-xl px-8 pb-8 pt-12 rounded-xl space-y-12">
                <h1 className="font-bold text-4xl text-black text-center"></h1>
                <MENUIDFORM />
            </div>
        </div>
    );
}
