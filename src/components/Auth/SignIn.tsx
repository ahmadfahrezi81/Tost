import { Icons } from "@/components/Icons";
import Image from "next/image";
// import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";
import Logo from "@/public/Logo1.svg";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
    return (
        <div className="w-full sm:border-2 sm:w-[28rem] sm:h-[28rem] p-10 sm:shadow-sm sm:rounded-lg flex gap-6 container mx-auto flex-col justify-center space-y-6 ">
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
                    Welcome back
                </h1>
                <p className="text-sm max-w-xs mx-auto">
                    By continuing, you are setting up a Tost account and agree
                    to our User Agreement and Privacy Policy.
                </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
                New to Tost?{" "}
                <Link
                    href="/sign-up"
                    className="hover:text-brand text-sm underline underline-offset-4"
                >
                    Sign Up
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
