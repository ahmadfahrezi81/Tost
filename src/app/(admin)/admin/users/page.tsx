import { FC } from "react";
import Link from "next/link";
import WarningModal from "@/components/WarningModal";
import GreenModal from "@/components/GreenModal";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { prisma } from "@/lib/db";
import { User } from "@prisma/client";
import Icons from "@/components/Icons";

async function getData(): Promise<User[]> {
    // return await prisma.user.findMany();
    return await prisma.user.findMany();
}

export default async function page() {
    // const [showModal, setShowModal] = useState<boolean>(false);
    // const [showGreenModal, setShowGreenModal] = useState<boolean>(false);

    const data = await getData();

    return (
        <>
            <div className="flex flex-col px-14 py-10">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Users
                    </h1>
                </header>
                <DataTable columns={columns} data={data} />
            </div>

            {/* <div className="relative mt-12 mx-12 overflow-auto">
                <div className="flex items-center justify-between py-10">
                    <h1 className="text-3xl font-bold text-gray-900 self-center">
                        Users
                    </h1>
                </div>
                <table className="w-full text-sm table-fixed text-left text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-auto">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t-2 border-b-2 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                jaki@gmail.com
                            </th>
                            <td className="px-6 py-4">Dzaky</td>
                            <td className="px-6 py-4">0167346582</td>

                            <td className="py-4 px-6 space-x-3">
                                <div className="flex flex-row gap-3">
                                    <button
                                        onClick={() => setShowGreenModal(true)}
                                        className="font-medium text-blue-600"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        className="font-medium text-red-600"
                                        onClick={() => setShowModal(true)}
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-t-2 border-b-2 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                nisya@gmail.com
                            </th>
                            <td className="px-6 py-4">Nisya</td>
                            <td className="px-6 py-4">0142198730</td>

                            <td className="py-4 px-6 space-x-3">
                                <div className="flex flex-row gap-3">
                                    <button
                                        onClick={() => setShowGreenModal(true)}
                                        className="font-medium text-blue-600"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="font-medium text-red-600"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-t-2 border-b-2 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                leo@gmail.com
                            </th>
                            <td className="px-6 py-4">Leo</td>
                            <td className="px-6 py-4">0143450978</td>

                            <td className="py-4 px-6 space-x-3">
                                <div className="flex flex-row gap-3">
                                    <Link
                                        href="#"
                                        className="font-medium text-blue-600"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="font-medium text-red-600"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-t-2 border-b-2 border-gray-200">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                harits@gmail.com
                            </th>
                            <td className="px-6 py-4">Harits</td>
                            <td className="px-6 py-4">0165437890</td>

                            <td className="py-4 px-6 space-x-3">
                                <div className="flex flex-row gap-3">
                                    <Link
                                        href="#"
                                        className="font-medium text-blue-600"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="font-medium text-red-600"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <GreenModal
                visible={showGreenModal}
                title="test"
                level="edit_customer"
                onClose={() => setShowGreenModal(false)}
            />
            <WarningModal
                visible={showModal}
                title="Watch out!"
                level="account"
                onClose={() => setShowModal(false)}
            /> */}
        </>
    );
}
