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
import { useRouter } from "next/navigation";
const Page = ({}) => {
    //temporary measure to block user from entering
    const router = useRouter();
    router.push("/user/menu");

    const [showModal, setShowModal] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const currDate = moment(startDate).format("dddd, DD MMMM yyyy");

    const [toggleSearch, setToggleSearch] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col w-full h-full md:flex-row">
                <div className="w-1/2 bg-custom-green flex items-center">
                    <div className="font-sans mx-20 w-full flex-col">
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
                            <button
                                onClick={() => setToggleSearch(true)}
                                className="block w-full text-center bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {toggleSearch ? (
                    <div className="w-1/2 font-sans mx-20 my-20 flex-col flex justify-between">
                        <div>
                            <h3 className="mb-10 font-bold font-sans text-2xl text-custom-green">
                                Pick a time
                            </h3>
                            <div className="w-full grid grid-cols-3 border-gray-200 gap-2 items-center text-sm font-medium text-gray-900">
                                <Timepick specify={"11:00"} />
                                <Timepick specify={"12:00"} />
                                <Timepick specify={"13:00"} />
                                <Timepick specify={"14:00"} />
                                <Timepick specify={"15:00"} />
                                <Timepick specify={"16:00"} />
                                <Timepick specify={"17:00"} />
                                <Timepick specify={"18:00"} />
                                <Timepick specify={"19:00"} />
                            </div>
                        </div>

                        <button
                            className="file:w-full text-center bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md"
                            onClick={() => setShowModal(true)}
                        >
                            Confirm
                        </button>
                    </div>
                ) : (
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <h1 className="text-lg text-slate-500">
                            Select your date
                        </h1>
                    </div>
                )}
            </div>
            <Confirmed
                visible={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
};

export default Page;
