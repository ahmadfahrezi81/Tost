import { FC } from "react";

const page: FC = ({}) => {
    return (
        <div className="flex flex-col container my-20 mx-auto items-center px-36">
            <h1 className="flex pb-12 text-5xl font-bold justify-center leading-none tracking-tight text-gray-900">
                Account Details
            </h1>
            <div className="pb-6 w-full px-96">
                <label
                    htmlFor="default-input"
                    className="block mb-2 text-m font-medium text-zinc-700"
                >
                    Email
                </label>
                <input
                    type="text"
                    id="disabled-input"
                    aria-label="disabled input"
                    className="bg-zinc-300 text-zinc-600 text-sm rounded-lg block p-2.5 w-full font-semibold cursor-not-allowed"
                    value="example@gmail.com"
                    disabled
                />
                <div className="relative left-0 pt-3">
                    <button
                        type="button"
                        className="text-emerald-800 hover:text-white border border-emerald-800 hover:bg-emerald-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                    >
                        Change Email
                    </button>
                </div>
            </div>
            <div className="pb-6 w-full px-96">
                <label
                    htmlFor="default-input"
                    className="block mb-2 text-m font-medium text-zinc-700"
                >
                    Password
                </label>
                <input
                    type="text"
                    id="disabled-input-2"
                    aria-label="disabled input 2"
                    className="bg-zinc-400 text-zinc-600 text-sm rounded-lg block p-2.5 w-full font-semibold cursor-not-allowed"
                    value="•••••••••"
                    disabled
                />
                <div className="relative left-0 pt-3">
                    <button
                        type="button"
                        className="text-emerald-800 hover:text-white border border-emerald-900 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                    >
                        Change Password
                    </button>
                </div>
            </div>
            <div className="pb-6 w-full px-96">
                <label
                    htmlFor="default-input"
                    className="block mb-2 text-m font-medium text-gray-900"
                >
                    Phone Number
                </label>
                <input
                    type="text"
                    id="disabled-input-3"
                    aria-label="disabled input 3"
                    className="bg-zinc-400 text-zinc-600 text-sm rounded-lg block p-2.5 w-full font-semibold cursor-not-allowed"
                    value="+6012345678"
                    disabled
                />
                <div className="relative left-0 pt-3">
                    <button
                        type="button"
                        className="text-emerald-800 hover:text-white border border-emerald-900 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                    >
                        Change Phone Number
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;
