import React from "react";
import Link from "next/link";
import { RegisterForm } from "./registerform";
import PreorderDetails from "./PreorderDetails";

type ModalProps = {
    visible: boolean;
    title: string;
    level: "edit_customer" | "preorder_details";
};

const GreenModal = ({ visible, title, level }: ModalProps) => {
    const content = {
        edit_customer: "Edit Customer's Details",
        preorder_details: "Pre-Order Details",
    };

    if (!visible) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-sans">
                <div className="relative rounded-md bg-custom-green shadow w-fit h-fit p-10">
                    <div className="">
                        <div className="grid justify-items-center">
                            <button className="px-2 text-xl rounded-md hover:bg-teal-900 text-white mb-5 justify-self-end">
                                x
                            </button>

                            <h1 className="font-bold text-3xl text-center text-white mb-7">
                                {content[level]}
                            </h1>
                        </div>
                        {level === "edit_customer" ? (
                            <RegisterForm value={true} />
                        ) : (
                            <PreorderDetails />
                        )}
                        {/* <RegisterForm value={true}/> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GreenModal;
