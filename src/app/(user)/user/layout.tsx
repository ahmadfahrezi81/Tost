import Navbar from "@/components/Navbar";
import { getAuthSession } from "@/lib/auth";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getAuthSession();

    return (
        <>
            {session ? (
                <>
                    <Navbar
                        name={session?.user.name}
                        image={session?.user.image}
                    />
                    <section className="pt-20 h-full">{children}</section>
                </>
            ) : (
                <h1>You need to log in</h1>
            )}
        </>
    );
}
