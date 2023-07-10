import CartItem from "@/components/User/Cart/CartItem";
import { OrderSummary } from "@/components/OrderSummary";
import { authOptions, getAuthSession } from "@/lib/auth";
import { db, prisma } from "@/lib/db";
import { CheckoutItem } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

async function updateCartItem(id: string, quantity: number) {
    "use server";

    await prisma.checkoutItem.update({ where: { id }, data: { quantity } });
}

async function deleteCartItem(id: string) {
    "use server";

    await prisma.checkoutItem.delete({ where: { id } });
}

export default async function CheckoutPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/sign-in");
    }

    //get all the checkoutItems
    const checkoutItems = await db.checkoutItem.findMany({
        where: {
            userId: user.id,
        },
    });

    //testing
    let total = 0;

    checkoutItems.forEach((item) => {
        total += item.quantity * item.price;
        console.log("ej");
        console.log(item);
    });

    return (
        <>
            <div className="flex flex-col px-14 mt-10 ml-6">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Checkout
                    </h1>
                </header>
                <div className="flex gap-6">
                    <div className="w-full">
                        {checkoutItems.length == 0 ? (
                            <h3>No item in cart</h3>
                        ) : (
                            <>
                                {checkoutItems.map((checkoutItem, i) => (
                                    <CartItem
                                        key={i}
                                        checkoutItem={checkoutItem}
                                        deleteCartItem={deleteCartItem}
                                        updateCartItem={updateCartItem}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-lg w-[35rem] h-fit p-8 flex flex-col gap-2">
                        <h3 className="font-semibold text-lg mb-2">
                            Order Summary
                        </h3>

                        <div className="flex flex-col text-sm">
                            <div className="flex justify-between border-b py-2 text-slate-700">
                                <span>Subtotal</span>
                                <span>{`RM${total}`}</span>
                            </div>
                            <div className="flex justify-between border-b py-2  text-slate-700">
                                <span>Booking Fee</span>
                                <span>{`RM${total ? 20 : 0}`}</span>
                            </div>
                            <div className="flex justify-between font-semibold py-4 text-base">
                                <span>Order Total</span>
                                <span>{`RM${total + (total ? 20 : 0)}`}</span>
                            </div>
                        </div>

                        <button
                            className="w-full bg-custom-orange text-white
                        text-sm py-3 rounded-md mt-2"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
