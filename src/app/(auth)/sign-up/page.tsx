import { FC } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const page: FC = ({}) => {
    return (
        <div className="absolute inset-0">
            <div className="h-full p-10 pt-8 rounded-lg mx-auto pb-28 flex flex-col items-center justify-center gap-8">
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "self-center mr-2"
                    )}
                >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Home
                </Link>

                <SignUp />
            </div>
        </div>
    );
};

export default page;
