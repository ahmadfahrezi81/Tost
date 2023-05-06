import { FC } from "react";
import Link from "next/link";
import { RegisterForm } from "@/components/registerform";

const page = ({}) => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="shadow-xl px-10 pb-10 pt-12 bg-teal-800 rounded-xl space-y-12">
                <h1 className="font-bold text-3xl text-center text-white">
                    Create your Account
                </h1>
                <RegisterForm value={false}/>
                <p className="text-center text-white">
                    Already have an account?{" "}
                    <Link
                        className="text-blue-300 hover:underline"
                        href="/login"
                    >
                        {"  "}
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
