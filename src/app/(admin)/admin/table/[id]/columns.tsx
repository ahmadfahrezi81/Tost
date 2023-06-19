"use client";

import { Order, Booking } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
// import { getOrderAction } from "../../../../_actions";

import GreenModal from "@/components/GreenModal";
import { getOrder } from "@/libs/order";

var showGreenModal = false;

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "id",
    header: "Booking ID",
  },
  {
    accessorKey: "name",
    header: "Customer Name",
  },
  {
    header: "Pre-Ordered Menus",
    cell: () => {
      const [showGreenModal, setShowGreenModal] = useState<boolean>(false);
      return (
        <>
          <button
            className="text-white text-xs bg-custom-orange hover:bg-custom-red-hov font-medium rounded-lg px-5 py-2"
            onClick={() => setShowGreenModal(true)}
          >
            View Pre-Order
          </button>
          <GreenModal
            visible={showGreenModal}
            title=""
            level="preorder_details"
            onClose={() => setShowGreenModal(false)}
          />
        </>
      );
    },
  },
];

// async function test() {
//   "use server";
//   const i = getOrder(myBID);
//   return i;
// }

// const values = Object.values(i);
// const keys = Object.keys(i);
// console.log(values);
// console.log(i);
// return <span>{keys}</span>;

// const myObjKey = currID;
// const myOrd: {};
// // myObj[myObjKey as keyof typeof myObj]
// // i[myObjKey as keyof typeof i]

// // const myObj = {
// //   Hello: "world"
// // };
// // const myObjKey = "Hello";
