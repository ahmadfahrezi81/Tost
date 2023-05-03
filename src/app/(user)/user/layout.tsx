import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar session={true} />
            <section className="pt-20 h-full">{children}</section>
        </>
    );
}
