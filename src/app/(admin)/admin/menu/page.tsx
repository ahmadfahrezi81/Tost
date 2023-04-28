import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Bacon from "@/images/BaconEgg-Small.png";
import Avocado from "@/images/AvocadoEgg-Small.png";
import Honey from "@/images/HoneyP-Small.png";
import SFrench from "@/images/SF-Small.png";
import British from "@/images/BritishBean-Small.png";
import Salmon from "@/images/SmokedSalmon-Small.png";
import Corn from "@/images/CornCheese-Small.png";
import Lemon from "@/images/LemonIce-Small.png";
import FrenchBlue from "@/images/FrenchBlue-Small.png";
import CheeseG from "@/images/CheesyGarlic-Small.png";
import CheeseT from "@/images/CheesyTomato-Small.png";
import Tandoori from "@/images/CreamyTandoori-Small.png";
import Mushroom from "@/images/CheesyMushroom-Small.png";
import Tuna from "@/images/SmokedTuna-Small.png";


const page = ({}) => {
  return (
    <>
      <h1 className="flex mt-8 text-5xl font-bold justify-center leading-none tracking-tight text-gray-900">
        Menu
      </h1>
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
                src={Bacon}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">Bacon & Egg Tost</td>
              <td className="px-6 py-4">RM 20</td>
              <td className="px-6 py-4 truncate">
              Bacon, sunny side egg, bread,pepper, oil
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Avocado}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Avocado & Egg Tost</td>
              <td className="px-6 py-4">RM 21</td>
              <td className="px-6 py-4 truncate">
              Bread, boiled egg, sliced avocado, pepper, mix herb, oil
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Honey}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Honey Dipped Pistachios Tost</td>
              <td className="px-6 py-4">RM 18</td>
              <td className="px-6 py-4 truncate">
              Bread, honey, pistachio, white cheese, butter
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={SFrench}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">Sourdough Brioche French Tost</td>
              <td className="px-6 py-4">RM 19</td>
              <td className="px-6 py-4 truncate">
              Bread, butter, blueberry jam, egg
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={British}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">British Baked Bean Tost</td>
              <td className="px-6 py-4">RM 12</td>
              <td className="px-6 py-4 truncate">
              Bread, beans, oregano leaves, oil
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Salmon}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">5</td>
              <td className="px-6 py-4">Smoked Salmon Tost</td>
              <td className="px-6 py-4">RM 22</td>
              <td className="px-6 py-4 truncate">
              Bread, salmon, boiled egg, oregano, pepper, walnuts 
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Corn}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">6</td>
              <td className="px-6 py-4">Corn Cheese Sandwich</td>
              <td className="px-6 py-4">RM 15</td>
              <td className="px-6 py-4 truncate">
              Bread, sweet corn, cheddar cheese
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Lemon}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">7</td>
              <td className="px-6 py-4">Lemon Ice Tost</td>
              <td className="px-6 py-4">RM 15</td>
              <td className="px-6 py-4 truncate">
              Bread, ice cream, whipped cream, lemon, chocolate powder
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={FrenchBlue}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">8</td>
              <td className="px-6 py-4">French Tost with Blueberries</td>
              <td className="px-6 py-4">RM 19</td>
              <td className="px-6 py-4 truncate">
              Sourdough bread, honey, blueberry, butter
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={CheeseG}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">9</td>
              <td className="px-6 py-4">Cheesy Garlic Bread Tost</td>
              <td className="px-6 py-4">RM 18</td>
              <td className="px-6 py-4 truncate">
              Bread, mixed herbs, mozzarella cheese
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={CheeseT}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">Cheesy Tomato Tost</td>
              <td className="px-6 py-4">RM 16</td>
              <td className="px-6 py-4 truncate">
              Bread, cheese, egg, basil
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Tandoori}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">11</td>
              <td className="px-6 py-4">Creamy Tandoori Paneer Sandwich</td>
              <td className="px-6 py-4">RM 18</td>
              <td className="px-6 py-4 truncate">
              Bread, cheese, tandoori seasoning
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Mushroom}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">12</td>
              <td className="px-6 py-4">Cheesy Mushroom Sandwichh</td>
              <td className="px-6 py-4">RM 20</td>
              <td className="px-6 py-4 truncate">
              Bread, cheese, mushrooms
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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
                src={Tuna}
                width={100}
                height={100}
                alt=""
                className="pt-3 pb-3"
              />
              <td className="px-6 py-4">13</td>
              <td className="px-6 py-4">Smoked Tuna Tost</td>
              <td className="px-6 py-4">RM 21</td>
              <td className="px-6 py-4 truncate">
              Bread, smoked tuna, mix herbs
              </td>
              <td className="py-4 px-6 space-x-3">
                <div className="flex flex-row gap-3">
                  <Link
                    href="admin/menu/id"
                    className="font-medium text-blue-600"
                  >
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

      {/* <nav
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
            </nav> */}
    </>
  );
};

export default page;
