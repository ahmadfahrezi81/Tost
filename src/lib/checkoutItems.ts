import { db } from "@/lib/db";
import { getCurrentUser } from "./session";

export async function getCheckoutItems() {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return new Response("Unauthorized", { status: 403 });
        }

        const checkoutItems = await db.checkoutItem.findMany({
            where: {
                userId: user.id,
            },
        });

        return new Response(JSON.stringify(checkoutItems));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}
