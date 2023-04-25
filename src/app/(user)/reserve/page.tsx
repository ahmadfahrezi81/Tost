import Button from "@/components/ui/Button";
import { Input } from "@mui/material";
import { FC } from "react";
// import { useEffect, useState } from 'react';

const page: FC = ({}) => {
    // const [slot, setSlot] = useState(3);

    // function handleSlotChange(event: any) {
    //     event.preventDefault();
    //     setSlot(event.target.value);
    // }

    return (
        <div>
            <div className="h-screen w-screen flex flex-col md:flex-row">
                <div className="basis-1/2 bg-custom-green flex items-center">
                    <div className="font-sans m-10">
                        <h2 className="text-white font-bold mb-8 text-4xl">
                            Make a Reservation
                        </h2>
                        <div className="text-white font-semibold">
                            <div className="flex flex-col">
                                <label>Number of Diners</label>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <label>Select Date</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 bg-white"></div>
            </div>
        </div>
    );
};

export default page;
