import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { toast } from "@/components/ui/Toast";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
    try {
        const session = await getServerSession(authOptions);

        return session?.user;
    } catch (e) {
        toast({
            title: "Error in server",
            message: `${e}`,
            type: "error",
        });

        redirect("/");
    }
}
