"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import DisplayPic from "@/images/burger.png";
// import Burger from "@/images/Burger-Small.png";
import Bacon from "@/images/BaconEgg-Big.png";
import { Form as MENUIDFORM } from "../../../../../components/menuidform";
import Button from "@/ui/Button";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuPage {
    categories: String;
    title: String;
    description: String;
    image: StaticImageData;
    price: number;
    quantity: number;
    ingredients: String;
}

export default function MenuIdPage() {
    // const router = useRouter();
    // const { imageSource } = router.query;

    // const [page, setPage] = useState<MenuPage>({
    //     subtotal: 0,
    //     tax: 0,
    //     total: 0,
    // });

    return (
        <div>
            <h1 className="font-bold text-4xl text-black text-center mt-10 mb-12 py-3 pt-5">
                Update Menu
            </h1>
            <div className=" relative h-full flex justify-center gap-10">
                <div style={{ justifyContent: "center" }}>
                    {/* Picture */}
                    {/* <Image
                        className=" max-w-xs mx-auto"
                        src={Burger}
                        alt="Product"
                    /> */}
                    <Image
                        className=" max-w-xs mx-auto"
                        src={Bacon}
                        alt="Product"
                    />

                    {/* Buttons */}
                    <div className="flex flex-col items-center justify-center mt-4">
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

                <div className="shadow-xl px-8 py-12 rounded-xl h-fit">
                    <MENUIDFORM />
                </div>
            </div>
        </div>
    );
}
