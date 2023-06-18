import { Icons } from "@/components/Icons";
import Image from "next/image";
// import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";
import Logo from "@/public/Logo1.svg";
import UserAuthForm from "./UserAuthForm";

const SignUp = () => {
    return (
        <div className="border-2 w-[28rem] h-[28rem] p-10 shadow-sm rounded-lg flex gap-6 container mx-auto flex-col justify-center space-y-6 ">
            <div className="flex flex-col space-y-2 text-center">
                {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
                <Image
                    priority
                    src={Logo}
                    height={60}
                    width={60}
                    alt="Logo"
                    className="mx-auto mb-5"
                />
                <h1 className="text-2xl font-semibold tracking-tight">
                    Hello There 👋
                </h1>
                <p className="text-sm max-w-xs mx-auto">
                    By continuing, you are setting up a Tost account and agree
                    to our User Agreement and Privacy Policy.
                </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
                Already a Toster?{" "}
                <Link
                    href="/sign-in"
                    className="hover:text-brand text-sm underline underline-offset-4"
                >
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default SignUp;
