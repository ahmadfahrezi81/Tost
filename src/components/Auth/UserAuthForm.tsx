"use client";

import { signIn } from "next-auth/react";
import * as React from "react";
import { FC } from "react";

import Icons from "@/components/Icons";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/utils";
import { toast } from "@/ui/Toast";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const router = useRouter();

    const loginWithGoogle = async () => {
        setIsLoading(true);

        try {
            await signIn("google");

            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                message: `${error}`,
                type: "error",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn("flex justify-center", className)} {...props}>
            <Button
                isLoading={isLoading}
                type="button"
                size="lg"
                className="w-full"
                onClick={loginWithGoogle}
                disabled={isLoading}
            >
                {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
                Google
            </Button>
        </div>
    );
};

export default UserAuthForm;
