import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      <div className="relative mt-12 mx-4 mr-4 overflow-auto">
        <div className="flex flex-col justify-between items-center">
          <caption className="p-5 text-3xl font-bold text-gray-900 bg-white">
            Table Info
          </caption>
          <table className="w-full text-sm table-fixed text-left text-gray-700">
            <caption className="p-5 text-xl text-left font-bold text-gray-900 bg-white">
              Apr 21
            </caption>

            <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 w-auto">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  11.00
                </th>
                <td className="px-6 py-4">Dzaky</td>
                <td className="px-6 py-4">
                  I want a smoking room with window view
                </td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  12.00
                </th>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  13.00
                </th>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  14.00
                </th>
                <td className="px-6 py-4">Leo</td>
                <td className="px-6 py-4">
                  I want a table that are near to the kitchen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
