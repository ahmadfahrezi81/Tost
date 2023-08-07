import TableInfoPreOrder from "@/components/TableInfoPreOrder";
import { db } from "@/lib/db";
import { Booking } from "@prisma/client";
import Link from "next/link";

interface pageProps {
    params: {
        id: string;
    };
}

export default async function BookingPageID({
    params,
}: {
    params: { id: string; bookingID: string };
}) {
    const getBooking = async () => {
        const res = await db.order.findUnique({
            where: {
                id: params.bookingID,
            },
        });
        return res;
    };

    const data = await getBooking();

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Pre-order
                    </h1>
                </header>
                <div>{data?.menuAmount}</div>
            </div>
        </>
    );
}
