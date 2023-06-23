// "use client";
import GreenModal from "@/components/GreenModal";
import { FC } from "react";

import { Order, Booking } from "@prisma/client";
import { prisma } from "@/db";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

async function getData(): Promise<Booking[]> {
  return await prisma.booking.findMany();
}

const Page = async ({}) => {
  //   const [showGreenModal, setShowGreenModal] = useState<boolean>(false);
  const data = await getData();
  return (
    <>
      <div className="relative mt-12 mx-10 overflow-auto">
        <div className="flex flex-col justify-between items-center">
          <h1 className="p-5 text-3xl font-bold text-gray-900 mb-5">
            Table Info
          </h1>
          {/* table here */}
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      {/* <GreenModal
        visible={showGreenModal}
        title="test"
        level="preorder_details"
        onClose={() => setShowGreenModal(false)}
      /> */}
    </>
  );
};

export default Page;
