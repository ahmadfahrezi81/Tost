/* eslint-disable no-unused-vars */
import { UserRole } from "@prisma/client";
import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
    interface JWT {
        id: User.id;
        role: UserRole;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: UserId;
            role: UserRole;
        };
    }
}
