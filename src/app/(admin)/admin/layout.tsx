import Navbar from "@/components/Navbar";
import AdminSidebar from "@/components/AdminSidebar";
import { getAuthSession } from "@/lib/auth";
import PermissionWarning from "@/components/PermissionWarning";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getAuthSession();

    return (
        <>
            {session?.user.role !== "ADMIN" ? (
                <PermissionWarning />
            ) : (
                <div className="flex h-screen overflow-x-hidden">
                    <AdminSidebar />
                    <section
                        className="flex flex-col w-full
                    ml-64 
                "
                    >
                        {children}
                    </section>
                </div>
            )}
        </>
    );
}
