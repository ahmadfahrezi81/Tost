import Link from "next/link";

import Icons from "@/components/Icons";
import { UserMenuCard } from "@/components/User/UserMenuCard";
import { Menu } from "@prisma/client";
import { db, prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/dist/server/api-utils";

async function getMenu(): Promise<Menu[]> {
    "use server";

    return await db.menu.findMany();
}

async function isInCheckout(menuId: number, userId: string) {
    "use server";

    const checkoutItem = await db.checkoutItem.findFirst({
        where: {
            menuId,
            userId,
        },
    });

    return checkoutItem ? true : false;
}

const Page = async ({}) => {
    const user = await getCurrentUser();

    if (!user) {
        throw new Error("");
    }

    const menuArray = await getMenu();

    //menuFood section
    const menuFood = await Promise.all(
        menuArray
            .filter((menu) => menu.type === "Food")
            .map(async (menuFood) => (
                <UserMenuCard
                    key={menuFood.id}
                    menu={menuFood}
                    isAdded={await isInCheckout(menuFood.id, user.id)}
                />
            ))
    );

    //menuDessert section
    const menuDessert = await Promise.all(
        menuArray
            .filter((menu) => menu.type === "Dessert")
            .map(async (menuDessert) => (
                <UserMenuCard
                    key={menuDessert.id}
                    menu={menuDessert}
                    isAdded={await isInCheckout(menuDessert.id, user.id)}
                />
            ))
    );

    //menuDrink section
    const menuDrink = await Promise.all(
        menuArray
            .filter((menu) => menu.type === "Drink")
            .map(async (menuDrink) => (
                <UserMenuCard
                    key={menuDrink.id}
                    menu={menuDrink}
                    isAdded={await isInCheckout(menuDrink.id, user.id)}
                />
            ))
    );

    return (
        <div className="container mt-10 pb-20 pl-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:h-20">
                <div className="flex-1 h-20">
                    <h1 className="text-4xl font-bold">Menu</h1>
                    <h2 className="text-xl mt-1">Find the best foods 🥪</h2>
                </div>
                <div className="flex-1 flex gap-2.5 sm:justify-end">
                    <Link
                        href="#food"
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105 
                        hover:border-gray-300"
                    >
                        <Icons.Sandwich size={30} />
                        <span className="font-light text-sm">Food</span>
                    </Link>
                    <Link
                        href="#drink"
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105
                        hover:border-gray-300
                        "
                    >
                        <Icons.CupSoda size={30} />
                        <span className="font-light text-sm">Drink</span>
                    </Link>
                    <Link
                        href="#dessert"
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105
                        hover:border-gray-300
                        "
                    >
                        <Icons.IceCream2 size={30} />
                        <span className="font-light text-sm">Dessert</span>
                    </Link>
                </div>
            </div>

            {/* Food */}
            <section>
                {/* 👇 This is for centering while scrolling */}
                <span
                    id="food"
                    style={{
                        display: "block",
                        height: "80px",
                        marginTop: "-80px",
                        visibility: "hidden",
                    }}
                ></span>
                <h3 className="text-2xl font-bold mt-8 mb-4">Food</h3>

                <div className="h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-max gap-4 items-start justify-center">
                    {menuFood}
                </div>
            </section>

            {/* Drink */}
            <section>
                {/* 👇 This is for centering while scrolling */}
                <span
                    id="drink"
                    style={{
                        display: "block",
                        height: "80px",
                        marginTop: "-80px",
                        visibility: "hidden",
                    }}
                ></span>
                <h3 className="text-2xl font-bold mt-8 mb-4">Drink</h3>
                <div className="h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-max gap-4 items-start justify-center">
                    {menuDrink}
                </div>
            </section>

            {/* Dessert */}
            <section>
                {/* 👇 This is for centering while scrolling */}
                <span
                    id="dessert"
                    style={{
                        display: "block",
                        height: "80px",
                        marginTop: "-80px",
                        visibility: "hidden",
                    }}
                ></span>

                <h3 className="text-2xl font-bold mt-8 mb-4">Dessert</h3>
                <div className="h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-max gap-4 items-start justify-center">
                    {menuDessert}
                </div>
            </section>
        </div>
    );
};

export default Page;
