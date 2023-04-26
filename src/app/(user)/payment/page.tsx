import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const page: FC = ({}) => {
    return (
        <div>
            
<div className="relative overflow-x-auto m-10 shadow-xl">
    <table className="w-full text-sm text-left text-gray-500 font-sans">
        <thead className="text-xs text-white uppercase bg-custom-green">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-tl-md">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3 rounded-tr-md">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Salami Beef Tost
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    RM19.00
                </td>
            </tr>
            <tr className="bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Avocado Tost
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    RM10.00
                </td>
            </tr>
            <tr className="bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Triple Cheese Tost
                </th>
                <td className="px-6 py-4">
                   1
                </td>
                <td className="px-6 py-4">
                    RM17.00
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="font-semibold text-white bg-custom-green">
                <th scope="row" className="px-6 py-3 text-base rounded-bl-md">Total</th>
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3 rounded-br-md">RM46.00</td>
            </tr>
        </tfoot>
    </table>
    </div>
    <div className="flex justify-end m-10">
        <Link href="/payment" className="bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md">Pay now
        </Link>
        {/* bro this path harusnya ke page payment yg directory app */}
    </div>
</div>
    );
};

export default page;
