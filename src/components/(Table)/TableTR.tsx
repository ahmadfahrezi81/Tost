"use client";

import Link from "next/link";
import { FC, useState } from "react";

interface TableTRProps {
    id: String;
    time: String;
    numSeats: String;
}

const TableTR = ({ id, time, numSeats }: TableTRProps) => {
    const [deleteToggle, setDeleteToggle] = useState(false);

    return (
        <>
            <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                    {id}
                </th>
                <td className="px-6 py-4">
                    <select
                        id="test"
                        className="bg-black text-center border-0 text-white"
                    >
                        <option className="bg-none">Available</option>
                        <option>Unavailable</option>
                        <option>Booked</option>
                    </select>
                </td>
                <td className="px-6 py-4">{time}</td>
                <td className="px-6 py-4">{numSeats}</td>
                <td className="py-4 px-6 space-x-3">
                    <div className="flex flex-row gap-3">
                        <Link
                            href="admin/table/id"
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
                        <span
                            onClick={() => setDeleteToggle(true)}
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
                        </span>
                    </div>
                </td>
            </tr>
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
                                Are you sure you want to delete this table?
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

export default TableTR;
