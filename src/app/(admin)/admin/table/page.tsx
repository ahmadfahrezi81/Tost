import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div>
      <div className="relative mt-12 mx-60 mr-16 overflow-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Time Slot
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Customers name
              </th>
              <th scope="col" className="px-6 py-3">
                Table ID
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                03.30 PM
              </th>
              <td className="px-6 py-4">Booked</td>
              <td className="px-6 py-4">Dzaky</td>
              <td className="px-6 py-4">OBH2</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">3 hours</td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                04.30 PM
              </th>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">-</td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                05.00 PM
              </th>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">-</td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                05.30 PM
              </th>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">-</td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                06.00 PM
              </th>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">-</td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                06.30 PM
              </th>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">-</td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                07.00 PM
              </th>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">-</td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                07.30 PM
              </th>
              <td className="px-6 py-4">Available</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Lorem Ipsum</td>
              <td className="px-6 py-4">-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav
        className="flex justify-center mt-32 mb-32"
        aria-label="Page navigation example"
      >
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              className="px-3 py-2 ml-0 hover:font-semibold text-zinc-500"
            >
              Previous
            </a>
          </li>
          <li className="px-1">
            <a
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              1
            </a>
          </li>
          <li className="px-1">
            <a
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              2
            </a>
          </li>
          <li className="px-1">
            <a
              href="#"
              aria-current="page"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              3
            </a>
          </li>
          <li className="px-1">
            <a
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              4
            </a>
          </li>
          <li className="px-1">
            <a
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight hover:font-semibold text-zinc-500"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default page;
