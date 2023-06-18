"use client";

import { Order, Booking } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { prisma } from "@/db";
import { getOrder } from "../../../../../libs/order";

import GreenModal from "@/components/GreenModal";

export async function getOrderI() {
  return await getOrder();
}

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
    accessorKey: "order",
    header: "Pre-Ordered Menu",
    cell: async ({ row }) => {
      const currID = row.original;

      const i = await getOrder();

      if (i) {
        <button
          type="button"
          disabled={false}
          className="text-white text-xs bg-rose-400 hover:bg-rose-600 font-medium rounded-lg px-5 py-2"
          onClick={() => (showGreenModal = true)}
        >
          View Pre-Order
        </button>;
      } else {
        <button
          type="button"
          disabled={true}
          className="text-white text-xs bg-rose-400 hover:bg-rose-600 font-medium rounded-lg px-5 py-2"
        >
          View Pre-Order
        </button>;
      }

      <GreenModal
        visible={showGreenModal}
        title="test"
        level="preorder_details"
        onClose={() => (showGreenModal = false)}
      />;
    },
  },
];
