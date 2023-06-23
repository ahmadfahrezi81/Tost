import Icons from "@/components/Icons";
import { UserMenuPage } from "@/components/UserMenuPage";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { CheckoutItem } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface pageProps {
    params: {
        id: string;
    };
}

export interface checkoutItemTest extends Omit<CheckoutItem, "id"> {}

async function createCheckout(checkout: any) {
    "use server";

    console.log(checkout);

    if (!checkout) {
        throw new Error("no checkout");
    }

    const session = await getAuthSession();

    if (!session?.user.id) {
        throw new Error("no user");
    }

    await prisma.checkoutItem.create({
        data: {
            ...checkout,
            userId: session.user.id,
        },
    });
}

const Page = async ({ params }: pageProps) => {
    const getMenu = async () => {
        const res = await prisma.menu.findUnique({
            where: {
                id: parseInt(params.id),
            },
        });
        return res;
    };

    const menu = await getMenu();

    if (!menu) {
        throw new Error("Menu data is empty");
    }

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
                {...menu}
                createCheckout={createCheckout}
            />
        </div>
    );
};

export default Page;
