import { ProfileField } from "@/components/ProfileField";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { User } from "@prisma/client";

async function updateData(id: string, user: User) {
    "use server";

    await prisma.user.update({ where: { id }, data: { ...user } });
}

async function deleteUser(id: string) {
    "use server";

    await prisma.user.delete({ where: { id } });
}

export default async function Page() {
    const session = await getAuthSession();
    const user = {} as User;

    if (session) {
        const data = await prisma.user.findUnique({
            where: {
                id: session.user.id,
            },
        });

        if (data) {
            user.id = data.id;
            user.name = data.name;
            user.email = data.email;
        }
    }

    return (
        <>
            <header className="my-16 mx-auto items-center">
                <h1 className="text-3xl font-bold text-center">
                    Account Details
                </h1>
            </header>
            <ProfileField
                key={user.id}
                {...user}
                updateData={updateData}
                deleteUser={deleteUser}
            />
        </>
    );
}
