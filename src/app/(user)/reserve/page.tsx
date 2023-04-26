"use client";

import Button from "@/components/ui/Button";
import { Input } from "@mui/material";
import { FC, Fragment, useState } from "react";
import Link from "next/link";
import { Dropdown } from "flowbite";
import Timepick from "@/components/Timepick";
import Confirmed from "@/components/Confirmed";

const page: FC = ({}) => {
    const [showModal, setShowModal] = useState(false);
    return ( 
    <Fragment>
    <div>
        <div className="h-screen w-screen flex flex-col md:flex-row">
            <div className="basis-1/2 bg-custom-green flex items-center">
                <div className="font-sans m-10 w-full flex-col">
                    <h2 className="text-white font-bold mb-8 text-4xl">Make a Reservation</h2>
                    <div className="text-white font-semibold">
                        <div className="flex flex-col mb-5">
                            <label className="mb-2">Number of Diners</label>
                            <div className="w-full">
                                <select id="countries" className="font-sans bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Number of Diners</option>
                                    <option value="oneD">1 Diner</option>
                                    <option value="twoD">2 Diners</option>
                                    <option value="threeD">4 Diners</option>
                                    <option value="fourD">6 Diners</option>
                                </select>
                            </div>
                        </div>                      
                        <div className="flex flex-col mb-5">
                            <label>Select Date</label>
                            <div>
                                {/* <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/> */}
                            </div>
                            </div>
                        </div>
                        <div className="flex justify-center m-10">
                            <Link href="" className="w-full text-center bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md">Search
                            </Link>
                        </div>
                    </div>    
                </div>


                <div className="basis-1/2 w-full h-57 font-sans m-10 flex-col flex justify-between">
                    <div className="mb-1/2">
                        <h3 className="font-bold font-sans text-2xl text-custom-green">Pick a time</h3>
                        <div className="m-5 grid grid-cols-3 border-gray-200 gap-2 items-center text-sm font-medium text-gray-900">
                            <Timepick/>
                            <Timepick/>
                            <Timepick/>
                            <Timepick/>
                            <Timepick/>
                            <Timepick/>
                            <Timepick/>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5">
                            <label /*for="message"*/ className="block mb-2 text-sm font-medium text-gray-900">Notes</label>
                            <textarea id="message" /*rows="4"*/ className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your additional requests here"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-1/2 text-center bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md" onClick={() => setShowModal(true)}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Confirmed visible={showModal} onClose={() => setShowModal(false)}/>
        </Fragment>
    )
};

export default page;
