"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UploadImage from "./UploadImage";
import { Menu, Order } from "@prisma/client";
import { toast } from "./ui/Toast";

interface PreOrder {
    menuAmount: number;
    bookingId: string;
    id: string;
}

export default function TableInfoPreOrder({
    menuAmount,
    bookingId,
    id,
}: PreOrder) {
    //menu properties
    const [order, setOrder] = useState<Order>();

    useEffect(() => {
        setOrder({
            menuAmount,
            bookingId,
            id,
        });
    }, []);

    return (
        <>
            <h1>{id}</h1>
            <h1>{bookingId}</h1>
            <h1>{menuAmount}</h1>
        </>
    );
}
