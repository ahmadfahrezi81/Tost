import { ProfileField } from "@/components/User/ProfileField";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

async function updateData(id: string, name: string) {
    "use server";

    await db.user.update({ where: { id }, data: { name } });
}

async function deleteUser(id: string) {
    "use server";

    await db.user.delete({ where: { id } });
}

export default async function ProfilePage() {
    const user = await getCurrentUser();

    if (!user) {
        throw new Error("No user");
    }

    return (
        <>
            <header className="my-16 mx-auto items-center">
                <h1 className="text-3xl font-bold text-center">
                    Account Details
                </h1>
            </header>

            <ProfileField
                user={user}
                updateData={updateData}
                deleteUser={deleteUser}
            />
        </>
    );
}
