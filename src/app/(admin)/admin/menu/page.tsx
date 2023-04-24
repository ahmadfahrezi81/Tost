import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      <div className="relative mt-12 mx-60 mr-16 overflow-auto">
        <table className="w-full text-sm table-fixed text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
            <tr>
              <th scope="col" className="p-4 w-28">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 w-auto">
                Picture
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 w-56">
                Ingredients
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17&quot;
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4 truncate">adsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4 truncate"></td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">No</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple Watch
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Watches</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">No</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple iMac
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">PC</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">Yes</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple AirPods
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">Yes</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                iPad Pro
              </th>
              <td className="px-6 py-4">Gold</td>
              <td className="px-6 py-4">Tablet</td>
              <td className="px-6 py-4">No</td>
              <td className="px-6 py-4">Yes</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Magic Keyboard
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">Yes</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple TV 4K
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">TV</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">No</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-t-2 border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                AirTag
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">Yes</td>
              <td className="px-6 py-4">No</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600"
                >
                  Remove
                </a>
              </td>
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
    </>
  );
};

export default page;
