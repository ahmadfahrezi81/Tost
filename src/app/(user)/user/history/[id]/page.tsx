import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

type reqProps = {
  // for now i put string for everything
};

const page: FC = ({}) => {
  return (
    <div className="m-10 relative overflow-x-auto sm:rounded-lg">
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-custom-green">
          Order Summary
        </h1>{" "}
        {/**i think it should be a common style for every page header text */}
      </div>
      <div className="order_details flex flex-col gap-3 mb-10">
        <div>
          <span className="text-xs text-gray-400 font-medium">ORDER ID</span>
          <h3 className="font-semibold text-black">#2023505FRI00500020</h3>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium">
            NUMBER OF DINERS
          </span>
          <h3 className="font-semibold text-black">5 Diners</h3>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium">STATUS</span>
          <div className="flex gap-2 align-middle items-center italic font-semibold text-black">
            <div className="w-2 h-2 rounded-full bg-yellow-300" />
            <h2>Done</h2>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 shadow-md rounded-md">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-md text-gray-500 uppercase border-t border-b border-gray-300">
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
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
              >
                McBandung
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">RM 10</td>
              <td className="px-6 py-4">RM 10</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
              >
                McJakarta
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">RM 10</td>
              <td className="px-6 py-4">RM 10</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
              >
                McDepok
              </th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">RM 10</td>
              <td className="px-6 py-4">RM 10</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap "
              >
                McJambi
              </th>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">RM 10</td>
              <td className="px-6 py-4">RM 20</td>
            </tr>

            <tr className="border-t border-gray-300">
              <th scope="row" className="px-6 pt-4 font-medium"></th>
              <td className="px-6 pt-4"></td>
              <td className="px-6 pt-4 font-extrabold text-xl text-custom-green">
                SUBTOTAL
              </td>
              <td className="px-6 pt-4 text-xl text-black">RM 50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-10 mb-36">
        <Link
          href="#"
          type="button"
          className="bg-custom-red hover:bg-custom-red-hov focus:outline-none focus:ring-4 text-white py-4 px-20 rounded-md"
        >
          Print Receipt
        </Link>
      </div>
    </div>
  );
};

export default page;
