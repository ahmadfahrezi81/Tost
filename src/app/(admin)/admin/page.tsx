import Pending from "@/components/Pending";
import { FC } from "react";

const page: FC = ({}) => {
    return (
        <div className="m-10 font-sans">
            <div>
                <h2 className="mb-5">Date</h2>
            </div>
            <div className="flex flex-row mb-16">
                <div className="basis-3/5 flex-row">
                    <div className="flex w-full justify-between mb-2 items-center">
                        <h3 className="font-bold text-3xl text-custom-green">
                            Booked Table
                        </h3>
                        <div className="text-right">
                            <h5 className="font-semibold">Total Booked:</h5>
                            <p>4</p>
                        </div>
                    </div>
                    <div className="">
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
                </div>
                <div className="basis-2/5 w-full pl-16">
                    <div>
                        <h2 className="font-bold text-3xl text-custom-green mb-2">
                            Pending Order
                        </h2>
                    </div>
                    <div className="my-5 grid grid-cols-2 gap-2 items-center text-sm font-medium text-gray-900">
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
                <h2 className="font-bold text-3xl text-custom-green mb-2 ">
                    Daily Revenue
                </h2>
                <div className="w-full bg-gray-100 text-black text-right p-5 rounded-md shadow-md">
                    <h3 className="font-bold text-2xl">RM129.45</h3>
                </div>
            </div>
        </div>
    );
};

export default page;
