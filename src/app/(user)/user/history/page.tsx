"use client";

import Icons from "@/components/Icons";
import Button from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";
import Link from "next/link";
import { useState } from "react";

import HistoryCard from "@/components/HistoryCard";
import { useRouter } from "next/navigation";

const Page = () => {
    //temporary measure to block user from entering
    const router = useRouter();
    router.push("/user/menu");

    const [isOpen, setIsOpen] = useState(true);
    const [count, setCount] = useState(0);

    const tryToast = () => {
        toast({
            title: "Error signing in",
            message: "Please Try Again late",
            type: "success",
        });
    };

    return (
        <div className="m-10">
            <div className="my-8">
                <h1 className="text-5xl font-extrabold text-custom-green">
                    History
                </h1>{" "}
                {/**i think it should be a common style for every page header text */}
            </div>
            <div className="flex flex-col gap-5">
                <Link href="/user/history/id">
                    <HistoryCard
                        reserveDate={"Friday, 5 May 2023"}
                        reserveDiners={"5"}
                        reserveStatus={"Incoming"}
                        totalPrice={"101.25"}
                    ></HistoryCard>
                </Link>
                <HistoryCard
                    reserveDate={"Tuesday, 2 May 2023"}
                    reserveDiners={"3"}
                    reserveStatus={"Done"}
                    totalPrice={"62.75"}
                ></HistoryCard>
                <HistoryCard
                    reserveDate={"Sunday, 30 April 2023"}
                    reserveDiners={"1"}
                    reserveStatus={"Cancelled"}
                    totalPrice={"25.15"}
                ></HistoryCard>
            </div>
        </div>
    );
};

export default Page;
