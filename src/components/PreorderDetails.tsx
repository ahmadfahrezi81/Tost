"use client";
import React from "react";
import Link from "next/link";

const PreorderDetails = () => {
  return (
    <>
      <div className="w-[400px] text-white">
        <div className="order_details flex flex-col gap-3">
          <div>
            <span className="text-xs text-gray-400 font-medium">ORDER ID</span>
            <h3 className="font-semibold text-text">#2023505FRI00500020</h3>
          </div>
          <div>
            <span className="text-xs text-gray-400 font-medium">
              BOOKED MENU(s)
            </span>

            <div className="relative shadow-md sm:rounded-lg overflow-y-scroll h-96 mt-3">
              <table className="relative w-full text-sm text-left text-gray-500">
                <thead className="text-gray-700 uppercase text-md">
                  <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 bg-white">
                      Qty
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Bacon & Egg Tost
                    </th>
                    <td className="px-6 py-4 bg-white">1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Avocado & Egg Tost
                    </th>
                    <td className="px-6 py-4 bg-white">1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Honey Dipped Pistachios Tost
                    </th>
                    <td className="px-6 py-4 bg-white">2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Sourdough Brioche French Tost
                    </th>
                    <td className="px-6 py-4 bg-white">1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      British Baked Bean Tost
                    </th>
                    <td className="px-6 py-4 bg-white">3</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Smoked Salmon Tost
                    </th>
                    <td className="px-6 py-4 bg-white">2</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Corn Cheese Sandwich
                    </th>
                    <td className="px-6 py-4 bg-white">1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Lemon Ice Tost
                    </th>
                    <td className="px-6 py-4 bg-white">1</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      French Tost with Blueberries
                    </th>
                    <td className="px-6 py-4 bg-white">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreorderDetails;
