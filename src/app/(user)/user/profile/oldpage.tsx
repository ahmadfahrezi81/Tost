"use client";

import { FC, useEffect, useState } from "react";

const Page = ({}) => {
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [activePhone, setActivePhone] = useState(false);
    const [activeName, setActiveName] = useState(false);
    const [deleteToggle, setDeleteToggle] = useState(false);
    const [loading, setLoading] = useState(false);

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

    // useEffect(() => {
    //     if (activeName) {
    //         setTimeout(() => {
    //             setLoading(true);
    //         }, 2000);
    //         setLoading(false);
    //     }
    // }, [activeName]);

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
                            className="
                            flex justify-center
                            h-fit w-1/5 text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                        >
                            {/* {!activeName ? (
                                loading ? (
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-200 animate-spin fill-blue-700"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                ) : (
                                    "edit"
                                )
                            ) : (
                                "confirm"
                            )} */}
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
