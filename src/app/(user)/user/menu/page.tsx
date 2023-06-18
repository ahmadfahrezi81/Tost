import Link from "next/link";
import { usePathname } from "next/navigation";

import Icons from "@/components/Icons";
import { UserMenuCard } from "@/components/UserMenuCard";
import { Menu } from "@prisma/client";
import { prisma } from "@/lib/db";

async function getMenu(): Promise<Menu[]> {
    "use server";

    return await prisma.menu.findMany();
}

const Page = async ({}) => {
    const menuArray = await getMenu();

    return (
        <div className="container mt-10 pb-20 pl-10">
            <div className="flex justify-between h-20">
                <div className="flex-1 h-20">
                    <h1 className="text-4xl font-bold">Menu</h1>
                    <h2 className="text-xl mt-1">Find the best foods 🥪</h2>
                </div>
                <div className="flex-1 flex gap-2.5 justify-end">
                    {/* <Link
                        href={pathname + "#food"}
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105 
                        hover:border-gray-300"
                    >
                        <Icons.Sandwich size={30} />
                        <span className="font-light text-sm">Food</span>
                    </Link>
                    <Link
                        href={pathname + "#drink"}
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105
                        hover:border-gray-300
                        "
                    >
                        <Icons.CupSoda size={30} />
                        <span className="font-light text-sm">Drink</span>
                    </Link>
                    <Link
                        href={pathname + "#dessert"}
                        className="flex flex-col gap-1 justify-center items-center rounded-lg border-2 w-20 h-20 cursor-pointer hover:rounded-none hover:scale-105
                        hover:border-gray-300
                        "
                    >
                        <Icons.IceCream2 size={30} />
                        <span className="font-light text-sm">Dessert</span>
                    </Link> */}
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

                <div className="h-fit grid grid-cols-4 auto-cols-max gap-4 justify-items-center">
                    {menuArray
                        .filter((menu) => menu.type === "Food")
                        .map((menuFood) => (
                            <UserMenuCard key={menuFood.id} {...menuFood} />
                        ))}
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
                <div className="h-fit grid grid-cols-4 auto-cols-max gap-4 justify-items-center">
                    {menuArray
                        .filter((menu) => menu.type === "Drink")
                        .map((menuDrink) => (
                            <UserMenuCard key={menuDrink.id} {...menuDrink} />
                        ))}
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
                <div className="h-fit grid grid-cols-4 auto-cols-max gap-4 justify-items-center">
                    {menuArray
                        .filter((menu) => menu.type === "Dessert")
                        .map((menuDessert) => (
                            <UserMenuCard
                                key={menuDessert.id}
                                {...menuDessert}
                            />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Page;
