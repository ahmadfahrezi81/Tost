import Link from "next/link";
import Image from "next/image";
import DisplayPic from "@/images/burger.png";
import Burger from "@/images/Burger-Small.png";
import { Form as MENUIDFORM } from "../../../../../components/menuidform";
import Button from "@/ui/Button";
import { useRouter } from "next/router";

export default function MenuIdPage() {
    // const router = useRouter();
    // const { imageSource } = router.query;

    return (
        <div>
            <h1 className="font-bold text-4xl text-black text-center mb-8 py-3 pt-5">
                Update Menu
            </h1>
            <div className=" relative h-full flex justify-center items-center">
                
                <div style={{ justifyContent: "center" }}>
                    {/* Picture */}
                    {/* <Image
                        className=" max-w-xs mx-auto"
                        src={Burger}
                        alt="Product"
                    /> */}
                    <Image
                        className=" max-w-xs mx-auto"
                        src= {Burger}
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
        </div>
    );
}
