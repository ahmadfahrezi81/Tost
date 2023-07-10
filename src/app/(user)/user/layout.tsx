import Navbar from "@/components/Navbar";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const session = await getAuthSession();

    // //redirect to sign-in if not in sessions
    // if (!session) {
    // }

    const user = await getCurrentUser();

    if (!user) {
        redirect("/sign-in");
    }

    //get all the checkoutItems
    const checkoutItems = await db.checkoutItem.findMany({
        where: {
            userId: user.id,
        },
    });

    let totalQuantityCart = 0;

    checkoutItems.forEach((item) => {
        totalQuantityCart += item.quantity;
    });

    return (
        <>
            <Navbar
                name={user?.name}
                image={user?.image}
                totalQuantityCart={totalQuantityCart}
            />
            <section className="pt-20 h-full">{children}</section>
        </>
    );
}
