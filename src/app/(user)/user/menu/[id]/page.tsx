import Icons from "@/components/Icons";
import { UserMenuPage } from "@/components/UserMenuPage";
import { prisma } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

interface pageProps {
    params: {
        id: string;
    };
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
            <UserMenuPage key={menu?.id} {...menu} />
            {/* <div className="flex flex-row gap-20 mt-4">
                <div className="flex-1">
                    <Image
                        className="mx-auto rounded-2xl"
                        src={`${menu?.imageURL}`}
                        alt="Product"
                        width={600}
                        height={600}
                    />
                </div>

                <div className="flex-1 mt-16 flex flex-col gap-2">
                    <h3 className="font-medium text-lg">{menu?.type}</h3>
                    <h1 className="font-semibold text-2xl mb-2">
                        {menu?.name}
                    </h1>
                    <p>{menu?.description}</p>

                    <h2 className="font-semibold text-2xl mb-2">
                        RM{menu?.price}
                    </h2>

                    <div className="flex justify-between">
                        <div className="custom-number-input h-10 w-48">
                            <div className="flex flex-row h-14 rounded-lg relative bg-transparent mt-1">
                                <button className=" bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-14 rounded-l cursor-pointer">
                                    <span className="w-full text-2xl font-semibold text-custom-orange">
                                        −
                                    </span>
                                </button>
                                <span className="flex items-center justify-center w-16 bg-gray-200 font-semibold text-lg">
                                    0
                                </span>
                                <button className="bg-gray-200 text-gray-600 active:bg-gray-300 h-full w-14 rounded-r cursor-pointer">
                                    <span className="w-full h-fit text-2xl font-semibold text-custom-orange">
                                        +
                                    </span>
                                </button>
                            </div>
                        </div>

                        <Link
                            className="h-14 bg-custom-orange text-white w-52 py-2 rounded-md flex items-center justify-center gap-4"
                            href="#"
                        >
                            <Icons.ShoppingCart />
                            Add to Cart
                        </Link>
                    </div>

                    <p className="block mt-4">
                        Haven’t booked yet?{" "}
                        <Link className="underline" href="/user/reserve">
                            Book now
                        </Link>
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default Page;
