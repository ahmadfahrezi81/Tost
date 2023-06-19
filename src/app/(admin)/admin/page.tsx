import Pending from "@/components/Pending";
import { FC } from "react";
import Link from "next/link";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/datepicker-style.css";
import { Button } from "flowbite-react";
import { getAuthSession } from "@/lib/auth";

export default async function Admin() {
    return (
        <>
            <h1>empty</h1>
            {/* <div className="relative font-sans m-10">
                <div className="flex justify-between mb-16 gap-8">
                    <div className="w-3/5">
                        <div className="flex w-full justify-between mb-2 items-center">
                            <h3 className="font-bold text-3xl text-custom-green">
                                Booked Table
                            </h3>
                            <div className="text-right">
                                <h5 className="font-semibold">Total Booked:</h5>
                                <p>4</p>
                            </div>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
                                        >
                                            Table ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 bg-gray-100 dark:bg-gray-800"
                                        >
                                            Time Slot
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800"
                                        >
                                            T201
                                        </th>
                                        <td className="px-6 py-4">
                                            Nisya Bintang Qanita
                                        </td>
                                        <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                            13:00
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800"
                                        >
                                            T201
                                        </th>
                                        <td className="px-6 py-4">
                                            Nisya Bintang Qanita
                                        </td>
                                        <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                            13:00
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800"
                                        >
                                            T201
                                        </th>
                                        <td className="px-6 py-4">
                                            Nisya Bintang Qanita
                                        </td>
                                        <td className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                                            13:00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="w-fit">
                        <div>
                            <h2 className="font-bold text-3xl text-custom-green mb-2">
                                Pending Order
                            </h2>
                        </div>
                        <div className="my-5 grid grid-cols-2 gap-2">
                            <Pending />
                            <Pending />
                            <Pending />
                            <Pending />
                            <Pending />
                            <Pending />
                            <Pending />
                        </div>
                    </div>
                </div>

                <div className="font-sans">
                    <h2 className="font-bold text-3xl text-custom-green mb-6">
                        Daily Revenue
                    </h2>
                    <div className="w-full bg-gray-100 text-black text-right p-5 rounded-md shadow-md">
                        <h3 className="font-bold text-2xl">RM129.45</h3>
                    </div>
                </div>
            </div> */}
        </>
    );
}
