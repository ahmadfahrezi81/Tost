import Icons from "@/components/Icons";
import { UserMenuPage } from "@/components/User/Menu/UserMenuPage";
import { getAuthSession } from "@/lib/auth";
import { db, prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { CheckoutItem } from "@prisma/client";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

interface pageProps {
    params: {
        id: string;
    };
}

async function createCheckout(checkout: CheckoutItem) {
    "use server";

    const user = await getCurrentUser();

    if (!user) {
        throw new Error("no user");
    }

    // await prisma.checkoutItem.create({
    //     data: {
    //         name: "Test",
    //         imageURL:
    //             "https://res.cloudinary.com/wpmenuimage/image/upload/v1688932866/menuropang/li2udppnziiyh1ci3mqq.png",
    //         price: 111,
    //         quantity: 2,
    //         userId: "cljvuzunk0004qtova0mztigl",
    //         menuId: 1,
    //     },
    // });

    await prisma.checkoutItem.create({
        data: {
            ...checkout,
            userId: user.id,
            menuId: checkout.menuId,
        },
    });
}

async function deleteCartItem(id: string) {
    "use server";

    await prisma.checkoutItem.delete({ where: { id } });
}

const Page = async ({ params }: pageProps) => {
    const menu = await prisma.menu.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });

    if (!menu) {
        throw new Error("Menu data is empty");
    }

    const user = await getCurrentUser();

    if (!user) {
        throw new Error("no user");
    }

    //this is temporary because I didn't connect with the menu ID
    //so the only that have a relation is the imageURL, but they're not unique
    const checkoutItem = await db.checkoutItem.findFirst({
        where: {
            menuId: menu.id,
            userId: user.id,
        },
    });

    return (
        <div className="px-14 mt-10 ml-4">
            <Link
                href={"/user/menu"}
                className="flex gap-2 items-center cursor-pointer hover:gap-3 w-fit p-2"
            >
                <Icons.ArrowLeft size={18} color="#000" />
                <span className="font-light text-sm">Back to Menu</span>
            </Link>
            <UserMenuPage
                key={menu?.id}
                quantity={checkoutItem ? checkoutItem.quantity : 0}
                isAdded={!!checkoutItem}
                checkoutItem={checkoutItem!}
                {...menu}
                createCheckout={createCheckout}
                deleteCartItem={deleteCartItem}
            />
        </div>
    );
};

export default Page;
