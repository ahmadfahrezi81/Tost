"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
// import {signIn } from "next-auth/react"
import { useState } from "react";

export const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onSubmit = (e: React.FormEvent) => {
        console.log("Login!");

        // e.preventDefault()
        // signIn ('credentials',{
        //     email,
        //     password
        // })
    };

    return (
        <form onSubmit={onSubmit} className="space-y-12 w-[400px] text-white">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="email">Email</label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="password">Password</label>
                <Input
                    className="w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                />
            </div>

            {/* {error && <Alert>{error}</Alert>} */}
            <div className="w-full">
                <Link
                    href="/user/menu"
                    className="w-full flex bg-custom-red hover:bg-custom-red-hov text-white py-3 justify-center rounded-md"
                >
                    Login
                </Link>
            </div>
        </form>
    );
};
