import Image from "next/image";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="relative mt-12 mx-60 mr-16 overflow-auto">
      <table className="w-full text-sm text-left text-black-500 ">
        <caption className="p-5 text-3xl font-bold text- text-gray-900 bg-white ">
          Your Order
        </caption>
        <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-500">
          <tr>
            <th scope="col" className="px-6 py-3">
              Dish
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Price
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              McBandung
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">RM 10</td>
            <td className="px-6 py-4">RM 10</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              McJakarta
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">RM 10</td>
            <td className="px-6 py-4">RM 10</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              McDepok
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">RM 10</td>
            <td className="px-6 py-4">RM 10</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              McJambi
            </th>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">RM 10</td>
            <td className="px-6 py-4">RM 20</td>
          </tr>

          <tr className="border-t-2 border-gray-500">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            ></th>
            <td className="px-6 py-4 font-bold">SUBTOTAL</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 font-bold">RM 50</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-9">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
};

export default page;
