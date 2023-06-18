import { prisma } from "@/lib/db";
import Link from "next/link";
import EditMenuForm from "@/components/EditMenuForm";
import { Menu } from "@prisma/client";
import { useRouter } from "next/router";

interface pageProps {
    params: {
        id: string;
    };
}

async function updateMenuItem(id: number, menu: Menu) {
    "use server";

    if (!menu) {
        throw new Error("Error Somewhere");
    }

    await prisma.menu.update({ where: { id }, data: { ...menu } });
}

const page = async ({ params }: pageProps) => {
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
        throw new Error("wtf");
    }

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Edit Menu
                    </h1>
                </header>

                <EditMenuForm {...menu} updateMenuItem={updateMenuItem} />
            </div>
        </>
    );
};

export default page;
