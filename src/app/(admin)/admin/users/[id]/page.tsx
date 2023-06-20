import { prisma } from "@/lib/db";
import { User } from "@prisma/client";
import { AdminUsersProfilePage } from "@/components/AdminUsersProfilePage";

interface pageProps {
    params: {
        id: string;
    };
}

async function updateData(id: string, user: User) {
    "use server";

    await prisma.user.update({ where: { id }, data: { ...user } });
}

async function deleteUser(id: string) {
    "use server";

    await prisma.user.delete({ where: { id } });
}

const page = async ({ params }: pageProps) => {
    const getUser = async () => {
        const res = await prisma.user.findUnique({
            where: {
                id: params.id,
            },
        });
        return res;
    };

    const user = await getUser();

    if (!user) {
        throw new Error("wtf");
    }

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Edit User
                    </h1>
                </header>

                <AdminUsersProfilePage
                    key={user.id}
                    {...user}
                    updateData={updateData}
                    deleteUser={deleteUser}
                />
            </div>
        </>
    );
};

export default page;
