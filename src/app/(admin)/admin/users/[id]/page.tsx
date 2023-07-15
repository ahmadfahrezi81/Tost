import { db, prisma } from "@/lib/db";
import { AdminUsersProfilePage } from "@/components/Admin/AdminUsersProfilePage";

interface pageProps {
    params: {
        id: string;
    };
}

async function updateData(id: string, name: string) {
    "use server";

    await db.user.update({ where: { id }, data: { name } });
}

async function deleteUser(id: string) {
    "use server";

    await db.user.delete({ where: { id } });
}

export default async function AdminProfilePage({ params }: pageProps) {
    const user = await db.user.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!user) {
        throw new Error("No user!");
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
                    user={user}
                    updateData={updateData}
                    deleteUser={deleteUser}
                />
            </div>
        </>
    );
}
