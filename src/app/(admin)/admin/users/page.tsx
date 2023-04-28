import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      <div className="relative mt-12 mx-4 mr-4 overflow-auto">
        <div className="flex flex-col justify-between items-center">
          <caption className="p-5 text-3xl font-bold text-gray-900 ">
            User Info
          </caption>
          <table className="w-full text-sm table-fixed text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 w-auto">
                  User Email
                </th>
                <th scope="col" className="px-6 py-3">
                  UID
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  jaki@gmail.com
                </th>
                <td className="px-6 py-4">MDA1</td>
                <td className="px-6 py-4">0167415936</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  nisya@gmail.com
                </th>
                <td className="px-6 py-4">NBQ2</td>
                <td className="px-6 py-4">0160653407</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  leo@gmail.com
                </th>
                <td className="px-6 py-4">MLH3</td>
                <td className="px-6 py-4">0160153564</td>
              </tr>
              <tr className="border-t-2 border-b-2 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  harits@gmail.com
                </th>
                <td className="px-6 py-4">HDM4</td>
                <td className="px-6 py-4">0169925849</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
