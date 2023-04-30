import { FC } from "react";
import Link from "next/link";
import { Form as LoginForm } from "@/components/loginform";

const page: FC = ({}) => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="shadow-xl px-10 pb-10 pt-12 bg-teal-800 rounded-xl space-y-12">
                <h1 className="font-bold text-4xl text-white text-center">
                    TOST{" "}
                </h1>
                <LoginForm/>
                <p className="text-center text-white">
                    Don&apos;t have an account yet?
                    <Link
                        className="text-blue-300 hover:underline"
                        href="/register"
                    >
                        {"  "}
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
