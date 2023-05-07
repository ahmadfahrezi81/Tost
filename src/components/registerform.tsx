"use client";

import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Link from "next/link";
import { string } from "prop-types";
import React, { useState } from "react";

type RegisterValue = {
  value: boolean;
};

export const RegisterForm = ({ value }: RegisterValue) => {
  const [name, setName] = useState("");
  const [Pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Register!");
  };

  if (!value) {
    return (
      <form onSubmit={onSubmit} className="space-y-8 w-[400px] text-white">
        <div className="grid w-full items-center gap-1.0">
          <label htmlFor="name">Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="name"
          />
        </div>

        <div className="grid w-full items-center gap-1.0">
          <label htmlFor="Pnumber">Phone Number</label>
          <Input
            value={Pnumber}
            onChange={(e) => setPnumber(e.target.value)}
            id="Pnumber"
            type="Pnumber"
          />
        </div>

        <div className="grid w-full items-center gap-1.0">
          <label htmlFor="email">Email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
          />
        </div>

        <div className="grid w-full items-center gap-1.0">
          <label htmlFor="password">Password</label>
          <Input
            className="w-full"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
          />
        </div>

        {/* {error && <Alert>{error}</Alert>} */}
        <div className="w-full">
          <Link
            href="/login"
            className="w-full flex bg-custom-red hover:bg-custom-red-hov text-white py-3 justify-center rounded-md"
          >
            Register
          </Link>
        </div>
      </form>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} className="w-[400px] text-white">
        <div className="grid w-full items-center">
          <label htmlFor="name">Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="name"
            placeholder=""
          />
          <button id="resetButton" className="text-xs m-1 underline hover:text-custom-orange justify-self-end">
            reset
          </button>         
        </div>

        <div className="grid w-full items-center gap-1.0">
          <label htmlFor="Pnumber">Phone Number</label>
          <Input
            value={Pnumber}
            onChange={(e) => setPnumber(e.target.value)}
            id="Pnumber"
            type="Pnumber"
          />
          <button id="resetButton" className="text-xs m-1 underline hover:text-custom-orange justify-self-end">
            reset
          </button> 
        </div>

        <div className="grid w-full items-center gap-1.0">
          <label htmlFor="email">Email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
          />
          <button id="resetButton" className="text-xs m-1 underline hover:text-custom-orange justify-self-end">
            reset
          </button> 
        </div>

        <div className="grid w-full items-center gap-1.0">
          <label htmlFor="password">Password</label>
          <Input
            className="w-full"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
          />
          <button id="resetButton" className="text-xs m-1 underline hover:text-custom-orange justify-self-end">
            reset
          </button> 
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/login"
            className="bg-custom-red hover:bg-custom-red-hov text-white py-3 px-7 rounded-md"
          >
            Save Changes
          </Link>
        </div>
      </form>
    </>
  );
};
