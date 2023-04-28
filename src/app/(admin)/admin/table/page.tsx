import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      <div className="relative mt-12 mx-4 mr-4 overflow-auto">
        <div className="flex flex-col justify-between items-center">
          <caption className="p-5 text-3xl font-bold text-gray-900 ">
            Table Info
          </caption>
          <table className="w-full text-sm table-fixed text-left text-gray-700">
            <caption className="p-5 text-xl text-left font-bold text-gray-900 ">
              Apr 21
            </caption>

            <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 w-auto">
                  Table ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Time Slots
                </th>
                <th scope="col" className="px-6 py-3">
                  No. Seats
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
                  1
                </th>
                <td className="px-6 py-4">Booked</td>
                <td className="px-6 py-4">11-12</td>
                <td className="px-6 py-4">2</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  2
                </th>
                <td className="px-6 py-4">Available</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  3
                </th>
                <td className="px-6 py-4">Booked</td>
                <td className="px-6 py-4">3-4</td>
                <td className="px-6 py-4">4</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  4
                </th>
                <td className="px-6 py-4">Available</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
