"use client";

import { FC, useState } from "react";
import Link from "next/link";
import "@/styles/datepicker-style.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import TableTR from "@/components/(Table)/TableTR";
const Page = ({}) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return (
        <>
            <div className="flex items-center justify-between px-14 py-10">
                <h1 className="text-3xl font-bold text-gray-900 self-center">
                    Table Info
                </h1>

                <div className="flex w-fit">
                    <button className="block text-center font-medium text-2xl">
                        &#8249;
                    </button>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MMM dd, yyyy"
                        maxDate={new Date()}
                        className="cursor-pointer z-10"
                    />
                    <button className="block text-center font-medium text-2xl">
                        &#8250;
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center px-14">
                <table className="w-full text-sm table-fixed text-left text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase border-t-2 border-b-2 border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-auto">
                                Table ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time Slots
                            </th>
                            <th scope="col" className="px-6 py-3">
                                No. Seats
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableTR
                            id={"1"}
                            time={"11 - 12, 14 - 15"}
                            numSeats={"2"}
                        />
                        <TableTR id={"2"} time={"-"} numSeats={"-"} />
                        <TableTR id={"3"} time={"-"} numSeats={"-"} />
                        <TableTR id={"4"} time={"-"} numSeats={"-"} />
                        <TableTR id={"5"} time={"-"} numSeats={"-"} />
                        <TableTR id={"6"} time={"-"} numSeats={"-"} />
                        <TableTR id={"7"} time={"-"} numSeats={"-"} />
                        <TableTR id={"8"} time={"-"} numSeats={"-"} />
                        <TableTR id={"9"} time={"-"} numSeats={"-"} />
                        <TableTR id={"10"} time={"11 - 12"} numSeats={"4"} />
                        <TableTR id={"11"} time={"11 - 12"} numSeats={"2"} />
                        <TableTR id={"12"} time={"11 - 12"} numSeats={"2"} />
                        <TableTR id={"13"} time={"11 - 12"} numSeats={"2"} />
                        <TableTR id={"14"} time={"11 - 12"} numSeats={"2"} />
                        <TableTR id={"15"} time={"11 - 12"} numSeats={"2"} />
                        <TableTR id={"16"} time={"11 - 12"} numSeats={"2"} />
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Page;
