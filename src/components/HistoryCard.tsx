import React from "react";
import historyLogo from "@/public/images/history-logo.png";
import Image from "next/image";
import { Toast } from "./ui/Toast";

type reqProps = {
  reserveDate: String;
  reserveDiners: String;
  reserveStatus: String;
  totalPrice: String;
  // for now i put string for everything
};



const HistoryCard = ({
  reserveDate,
  reserveDiners,
  reserveStatus,
  totalPrice,
  ...props
}: reqProps) => {
  return (
    <div>
      <div className="bg-white hover:shadow-transparent hover:bg-slate-200 rounded-md shadow-md flex items-center py-4 px-7 gap-10">
        <div className="history-logo ">
          <Image
            src={historyLogo}
            alt="history logo"
          />
        </div>
        <div className="history-contents w-full flex justify-between">
          <div className="important-info basis-3/5 flex justify-between">
            <div className="reserve-date w-44">
              <span className="text-sm font-light">Reservation on</span>
              <h2>{reserveDate}</h2>
            </div>
            <div className="reserve-diners w-16">
              <span className="text-sm font-light">For</span>
              <h2>{reserveDiners} Diners</h2>
            </div>
            <div className="reserve-status w-28">
              <span className="text-sm font-light">Status</span>
              <div className="flex gap-2 align-middle items-center italic">
                <div className="w-2 h-2 rounded-full bg-yellow-300" />
                {/* {
                  if (reserveStatus ) 
                } */}
              
                <h2>{reserveStatus}</h2>
              </div>
            </div>
          </div>
          <div className="total-price w-32 flex text-end flex-col">
            <span className="text-sm font-light">Total spent:</span>
            <h2 className="text-xl font-bold">RM{totalPrice}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
