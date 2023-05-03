"use client";

import { FC, useEffect, useState } from "react";

const Page = ({}) => {
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [activePhone, setActivePhone] = useState(false);
    const [activeName, setActiveName] = useState(false);
    const [deleteToggle, setDeleteToggle] = useState(false);

    const [profile, setProfile] = useState<{
        name: string;
        email: string;
        password: string;
        phone: string;
    }>({
        name: "Udin Lapi",
        email: "example@gmail.com",
        password: "test",
        phone: "012345678",
    });

    return (
        <>
            <div className="flex flex-col container my-20 mx-auto items-center w-[27rem]">
                <h1 className="flex pb-12 text-5xl font-bold justify-center leading-none tracking-tight text-gray-900">
                    Account Details
                </h1>
                <div className="flex flex-col w-full pb-6">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-m font-medium text-zinc-700"
                    >
                        Name
                    </label>
                    <div className="flex flex-row w-full gap-3">
                        <input
                            type="text"
                            id="name"
                            className={`
                      ${activeName ? "bg-white" : "bg-zinc-300"}
                      text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold h-fit
                    `}
                            value={profile.name}
                            disabled={!activeName}
                            onChange={(e) =>
                                setProfile({ ...profile, name: e.target.value })
                            }
                        />

                        <button
                            onClick={() => {
                                setActiveName(!activeName);
                            }}
                            type="button"
                            className="h-fit w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                        >
                            {!activeName ? "edit" : "confirm"}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full pb-6">
                    <label
                        htmlFor="email"
                        className="justify-items-start block mb-2 text-m font-medium text-zinc-700"
                    >
                        Email
                    </label>
                    <div className="flex flex-row gap-3">
                        <input
                            type="text"
                            id="email"
                            className={`
                      ${activeEmail ? "bg-white" : "bg-zinc-300"}
                      items-center text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold
                    `}
                            value={profile.email}
                            disabled={!activeEmail}
                            onChange={(e) =>
                                setProfile({
                                    ...profile,
                                    email: e.target.value,
                                })
                            }
                        />
                        <button
                            onClick={() => {
                                setActiveEmail(!activeEmail);
                            }}
                            type="button"
                            className="h-fit w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                        >
                            {!activeEmail ? "edit" : "confirm"}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full pb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-m font-medium text-zinc-700"
                    >
                        Password
                    </label>
                    <div className="flex flex-row gap-3">
                        <input
                            type="password"
                            id="password"
                            className={`
                      ${activePassword ? "bg-white" : "bg-zinc-300"}
                      items-center text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold
                    `}
                            value={profile.password}
                            disabled={!activePassword}
                            onChange={(e) =>
                                setProfile({
                                    ...profile,
                                    password: e.target.value,
                                })
                            }
                        />

                        <button
                            onClick={() => {
                                setActivePassword(!activePassword);
                            }}
                            type="button"
                            className="w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                        >
                            {!activePassword ? "edit" : "confirm"}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full pb-6">
                    <label
                        htmlFor="phone"
                        className="block mb-2 text-m font-medium text-zinc-700"
                    >
                        Phone Number
                    </label>
                    <div className="flex flex-row gap-3 w-full">
                        <input
                            type="tel"
                            id="phone"
                            className={`
                      ${activePhone ? "bg-white" : "bg-zinc-300"}
                      items-center text-zinc-600 text-sm rounded-lg block p-2.5 w-4/5 font-semibold
                    `}
                            value={profile.phone}
                            disabled={!activePhone}
                            onChange={(e) =>
                                setProfile({
                                    ...profile,
                                    phone: e.target.value,
                                })
                            }
                        />

                        <button
                            onClick={() => {
                                setActivePhone(!activePhone);
                            }}
                            type="button"
                            className="w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                        >
                            {!activePhone ? "edit" : "confirm"}
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => setDeleteToggle(true)}
                    type="button"
                    className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                    Delete Account
                </button>
            </div>
            {deleteToggle ? (
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-sans">
                    <div className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow">
                        <div className="p-4 text-center">
                            <svg
                                aria-hidden="true"
                                className="mx-auto mb-4 text-red-600 w-14 h-14"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                                Are you sure you want to delete your account?
                            </h3>

                            <button
                                onClick={() => setDeleteToggle(false)}
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 mr-3"
                            >
                                No, cancel
                            </button>
                            <button
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                            >
                                Yes, I&apos;m sure
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Page;
