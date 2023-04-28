import Image from "next/image";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <div className="flex flex-col justify-between items-left">
        <caption className="p-5 text-3xl font-bold text-gray-900  text-left">
          ORDER #3403
        </caption>
        <caption className="p-5 text-lg font-bold text-gray-900  text-left pb-0 pt-0">
          Number of Diners : 4 Diners
        </caption>
        <caption className="p-5 text-lg font-bold text-gray-900 text-left pt-0">
          Status : Done
        </caption>
        <table className="relative mt-5 mx-24 overflow-auto text-sm text-left text-black-500 ">
          <thead className="text-xs text-gray-700 uppercase  border-b-2 border-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Unit Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" no-bg">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Bacon & Egg Tost
              </th>
              <td className="px-6 py-4">RM 20</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">RM 20</td>
            </tr>
            <tr className=" no-bg">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Lemon Ice Tost
              </th>
              <td className="px-6 py-4">RM 15</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">RM 15</td>
            </tr>
            <tr className=" no-bg">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                British Baked Bean Tost
              </th>
              <td className="px-6 py-4">RM 12</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">RM 24</td>
            </tr>
            <tr className=" no-bg">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Creamy Tandoori Paneer Sandwich
              </th>
              <td className="px-6 py-4">RM 18</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">RM 18</td>
            </tr>

            <tr className="border-t-2 border-gray-500">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              ></th>
              <td className="px-6 py-4 font-bold">SUBTOTAL</td>
              <td className="px-6 py-4 font-bold">5</td>
              <td className="px-6 py-4 font-bold">RM 77</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-9">
          <button
            type="button"
            className="font-medium focus:outline-none text-white bg-custom-orange hover:bg-custom-red-hov focus:ring-4 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
