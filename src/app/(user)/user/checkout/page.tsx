import CartItem from "@/components/(User)/(Cart)/CartItem";
import { OrderSummary } from "@/components/OrderSummary";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { CheckoutItem } from "@prisma/client";
import Link from "next/link";

// interface CartTotal {
//     subtotal: number;
//     tax: number;
//     total: number;
// }

async function getCheckoutItems(): Promise<CheckoutItem[]> {
    "use server";

    const session = await getAuthSession();

    if (!session?.user.id) {
        throw new Error("no user");
    }

    return await prisma.checkoutItem.findMany({
        where: {
            userId: session.user.id,
        },
    });
}

const Page = async ({}) => {
    const checkoutItems = await getCheckoutItems();

    return (
        <>
            <div className="relative mx-20 mr-20 overflow-auto">
                <div className="flex flex-col justify-between items-left">
                    <span className="p-5 text-3xl font-bold text-gray-900  text-left">
                        CHECKOUT
                    </span>
                    <table className="w-full text-sm text-left text-gray-500 px-5">
                        <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-500 bg-white ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {checkoutItems.map((checkoutItem, i) => (
                                <CartItem key={i} {...checkoutItem} />
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex mt-10 h-screen">
                    <div className="w-full flex justify-end items-start">
                        <div className="py-6 px-8 w-full rounded overflow-hidden border">
                            <div className="font-bold text-xl mb-2">
                                Order Summary
                            </div>
                            <p className="text-gray-700 text-base">
                                Here are the items you have selected:
                            </p>

                            <div className="flex justify-between mt-4">
                                <p className="text-gray-700 text-base">
                                    Subtotal
                                </p>
                                <p className="text-gray-700 text-base">RM</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="text-gray-700 text-base">
                                    Tax Service
                                </p>
                                <p className="text-gray-700 text-base">RM</p>
                            </div>
                            <div className="flex justify-between mt-4 font-bold">
                                <p className="text-gray-700 text-base">Total</p>
                                <p className="text-gray-700 text-base">RM</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <Link
                                    href={"/user/payment"}
                                    className="bg-custom-orange hover:bg-custom-red-hov text-white font-bold py-2 px-4 rounded"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
