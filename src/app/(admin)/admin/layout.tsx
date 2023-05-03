import Navbar from "@/components/Navbar";
import AdminSidebar from "@/components/AdminSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex h-screen">
                <AdminSidebar />
                <section
                    className="flex flex-col w-full"
                >
                    {children}
                </section>
            </div>
        </>
    );
}
