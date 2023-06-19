import { CheckoutItem } from "@prisma/client";
import Link from "next/link";

export function OrderSummary({
    name,
    price,
    quantity,
    imageURL,
}: CheckoutItem) {
    return (
        <div className="flex mt-10 h-screen">
            <div className="w-full flex justify-end items-start">
                <div className="py-6 px-8 w-full rounded overflow-hidden border">
                    <div className="font-bold text-xl mb-2">Order Summary</div>
                    <p className="text-gray-700 text-base">
                        Here are the items you have selected:
                    </p>

                    <div className="flex justify-between mt-4">
                        <p className="text-gray-700 text-base">Subtotal</p>
                        <p className="text-gray-700 text-base">RM {price}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="text-gray-700 text-base">Tax Service</p>
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
    );
}
