import Image from "next/image";
import Burgir from "@/images/Burgir.png";
export default function Home() {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <caption className="p-5 text-3xl font-bold text-left text-gray-900 bg-white ">
                        Checkout
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  ">
                            <td className="w-32 p-4">
                                <Image
                                    src={Burgir}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                />
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-900 ">
                                McBandung
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                    <button
                                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                                        type="button"
                                    >
                                        <span className="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div>
                                        <input
                                            type="number"
                                            id="first_product"
                                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 k:bg-gray-700 rk:ay-400"
                                            placeholder="1"
                                        />
                                    </div>
                                    <button
                                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                        type="button"
                                    >
                                        <span className="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 ">
                                RM 30
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                RM 30
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex mt-10 ml-8 h-screen">
                <div className="w-full mr-4">
                    <div className="mb-6 h-56">
                        <label
                            htmlFor="large-input"
                            className="block mb-2 text-sm font-bold text-gray-900"
                        >
                            Add Notes
                        </label>
                        <input
                            type="text"
                            id="large-input"
                            className="block align-text-top start-0 w-full h-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end items-start">
                    <div className="w-1/2 rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                Order Summary
                            </div>
                            <p className="text-gray-700 text-base">
                                Here are the items you have selected:
                            </p>
                            <div className="flex justify-between mt-4">
                                <p className="text-gray-700 text-base">Total</p>
                                <p className="text-gray-700 text-base">
                                    RM 30.00
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="text-gray-700 text-base">
                                    Tax Service
                                </p>
                                <p className="text-gray-700 text-base">
                                    RM 1.00
                                </p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p className="text-gray-700 text-base">
                                    Subtotal
                                </p>
                                <p className="text-gray-700 text-base">
                                    RM 31.00
                                </p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
