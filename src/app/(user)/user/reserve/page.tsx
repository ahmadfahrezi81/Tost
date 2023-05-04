"use client";

import Button from "@/components/ui/Button";
import { Input } from "@mui/material";
import React, { FC, Fragment, useState } from "react";
import Link from "next/link";
import { Dropdown } from "flowbite";
import Timepick from "@/components/Timepick";
import Confirmed from "@/components/Confirmed";
import Counter from "@/components/Counter";
// import {useFormatter} from 'next-intl';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/datepicker-styles-reserve.css";
import moment from "moment";
const Page = ({}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const currDate = moment(startDate).format("dddd, DD MMMM yyyy");
    // const currDate = "" + startDate;

    return (
        <>
            <div className="flex flex-col h-full md:flex-row">
                <div className="basis-1/2 bg-custom-green flex items-center">
                    <div className="font-sans m-10 w-full flex-col">
                        <h2 className="text-white font-bold mb-8 text-4xl">
                            Make a Reservation
                        </h2>
                        <div className="text-white font-semibold">
                            <div className="flex flex-col mb-5">
                                <label>Number of Diners</label>
                                <div className="plsChoose italic text-gray-300 text-xs font-normal mb-3">
                                    *Please use the button below to choose the
                                    number of diners
                                </div>
                                <div>
                                    <Counter />
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <label>Select Date</label>
                                <div className="text-black mb-2">
                                    <DatePicker
                                        showIcon
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={new Date()}
                                        placeholderText="Click to pick a date"
                                        dropdownMode="select"
                                    />
                                </div>
                                <div className="text-sm font-medium align-middle text-right">
                                    Reserving for{" "}
                                    <span className="font-bold">
                                        {currDate}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                href="#"
                                className="block w-full text-center bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md"
                            >
                                Search
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="basis-1/2 font-sans m-10 my-20 flex-col flex justify-between">
                    <div>
                        <h3 className="font-bold font-sans text-2xl text-custom-green">
                            Pick a time
                        </h3>
                        <div className="m-5 grid grid-cols-3 border-gray-200 gap-2 items-center text-sm font-medium text-gray-900">
                            <Timepick specify={"11:00"} />
                            <Timepick specify={"12:00"} />
                            <Timepick specify={"13:00"} />
                            <Timepick specify={"14:00"} />
                            <Timepick specify={"15:00"} />
                            <Timepick specify={"16:00"} />
                            <Timepick specify={"17:00"} />
                        </div>
                    </div>
                    <div>
                        {/* <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Notes
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your additional requests here"
                            ></textarea>
                        </div> */}

                        <button
                            className="w-full text-center bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md"
                            onClick={() => setShowModal(true)}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
            <Confirmed
                visible={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
};

export default Page;
