import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Burger from "../../../../../public/Burger-Small.png";
import Biscuits from "../../../../../public/Biscuits-Small.png";
import Croissant from "../../../../../public/Croissant-Small.png";
import Dessert from "../../../../../public/Dessert-Small.png";
import Hotdog from "../../../../../public/Hotdog-Small.png";
import Sandwich from "../../../../../public/Sandwich-Small.png";

const page: FC = ({}) => {
  return (
    <>
      <div className="relative mt-12 mx-60 mr-16 overflow-auto">
        <table className="w-full text-sm table-fixed text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
            <tr>
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
              <th scope="col" className="px-6 py-3 h-full">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <Image
                src={Burger}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">Burger</td>
              <td className="px-6 py-4">RM 18</td>
              <td className="px-6 py-4 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link href="admin/menu/id" className="font-medium text-blue-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="#" className="font-medium text-red-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <Image
                src={Biscuits}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Biscuits</td>
              <td className="px-6 py-4">RM 12</td>
              <td className="px-6 py-4 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link href="admin/menu/id" className="font-medium text-blue-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="#" className="font-medium text-red-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <Image
                src={Croissant}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Croissant</td>
              <td className="px-6 py-4">RM 7</td>
              <td className="px-6 py-4 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link href="admin/menu/id" className="font-medium text-blue-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="#" className="font-medium text-red-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <Image
                src={Dessert}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">Dessert</td>
              <td className="px-6 py-4">RM 6</td>
              <td className="px-6 py-4 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link href="admin/menu/id" className="font-medium text-blue-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="#" className="font-medium text-red-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <Image
                src={Hotdog}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">Hotdog</td>
              <td className="px-6 py-4">RM 3</td>
              <td className="px-6 py-4 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link href="admin/menu/id" className="font-medium text-blue-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="#" className="font-medium text-red-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="border-t-2 border-b-2 border-gray-200">
              <Image
                src={Sandwich}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">5</td>
              <td className="px-6 py-4">Sandwich</td>
              <td className="px-6 py-4">RM 5</td>
              <td className="px-6 py-4 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link href="admin/menu/id" className="font-medium text-blue-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="#" className="font-medium text-red-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </Link>
                </div>
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
            <Link
              href="#"
              className="px-3 py-2 ml-0 hover:font-semibold text-zinc-500"
            >
              Previous
            </Link>
          </li>
          <li className="px-1">
            <Link
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              1
            </Link>
          </li>
          <li className="px-1">
            <Link
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              2
            </Link>
          </li>
          <li className="px-1">
            <Link
              href="#"
              aria-current="page"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              3
            </Link>
          </li>
          <li className="px-1">
            <Link
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              4
            </Link>
          </li>
          <li className="px-1">
            <Link
              href="#"
              className="px-3 py-2 leading-tight rounded-lg text-white bg-red-400 border border-red-400 hover:bg-white hover:text-red-400"
            >
              5
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-3 py-2 leading-tight hover:font-semibold text-zinc-500"
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default page;
