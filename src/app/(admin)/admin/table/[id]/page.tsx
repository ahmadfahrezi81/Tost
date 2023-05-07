"use client";
import GreenModal from "@/components/GreenModal";
import { FC, useState } from "react";

const Page = ({}) => {
    const [showGreenModal, setShowGreenModal] = useState<boolean>(false);
    return (
        <>
            <div className="relative mt-12 mx-10 overflow-auto">
                <div className="flex flex-col justify-between items-center">
                    <h1 className="p-5 text-3xl font-bold text-gray-900 mb-5">
                        Table Info
                    </h1>
                    <table className="w-full text-sm table-fixed text-left text-gray-700">
                        <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-auto">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Customer Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Booking ID
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
                                    11.00 - 12.00
                                </th>
                                <td className="px-6 py-4">Dzaky</td>
                                <td className="px-6 py-4">TBA5</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => setShowGreenModal(true)}
                                        type="button"
                                        className="text-white text-xs bg-custom-orange hover:bg-custom-red-hov font-medium rounded-lg px-5 py-2 mr-2 mb-2"
                                    >
                                        View Pre-Order
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-b-2 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    12.00 - 13.00
                                </th>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>

                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className="border-t-2 border-b-2 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    13.00 - 14.00
                                </th>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className="border-t-2 border-b-2 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    14.00 - 15.00
                                </th>
                                <td className="px-6 py-4">Leo</td>
                                <td className="px-6 py-4">HKL4</td>
                                <td className="px-6 py-4">
                                    <button
                                        type="button"
                                        className="text-white text-xs bg-custom-orange hover:bg-custom-red-hov  font-medium rounded-lg px-5 py-2 mr-2 mb-2"
                                    >
                                        View Pre-Order
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-b-2 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    15.00 - 16.00
                                </th>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>

                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className="border-t-2 border-b-2 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    16.00 - 17.00
                                </th>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className="border-t-2 border-b-2 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    17.00 - 18.00
                                </th>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                            <tr className="border-t-2 border-b-2 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    19.00 - 20.00
                                </th>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                                <td className="px-6 py-4">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <GreenModal
                visible={showGreenModal}
                title="test"
                level="preorder_details"
                onClose={() => setShowGreenModal(false)}
            />
        </>
    );
};

export default Page;
