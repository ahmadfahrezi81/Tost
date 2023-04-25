import Image from "next/image";
import { FC } from "react";
import cc from "../../../../public/assets/cc.png";
import fpx from "../../../../public/assets/fpx.png";

const page = ({}) => {
    return (
        <div className="h-screen w-screen flex">
            <div className="card h-1/2 w-1/2 bg-white flex rounded-lg align-middle items-center">
                <div className="container px-7 py-7">
                    <h5 className="text-gray-500">Select payment method</h5>
                    <hr className="mb-2 bg-gray-500" />
                    <div className="flex flex-row gap-x-20">
                        <div className="flex items-center mb-4">
                            <input
                                id="payment-option-1"
                                type="radio"
                                name="countries"
                                value="CCorDC"
                                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 mr-2"
                                aria-labelledby="country-option-1"
                                aria-describedby="country-option-1"
                            />
                            <Image
                                src={cc}
                                alt="CC or Debit"
                                height={16}
                                width={21}
                                style={{ opacity: 0.8 }}
                            />
                            <label className="text-sm font-regular text-gray-500 ml-2 block ">
                                Credit or Debit Card
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input
                                id="payment-option-2"
                                type="radio"
                                name="countries"
                                value="FPX"
                                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 mr-2"
                                aria-labelledby="country-option-1"
                                aria-describedby="country-option-1"
                            />
                            <Image src={fpx} alt="FPX" height={32} width={42} />
                            <label className="text-sm font-regular text-gray-500 ml-2 block"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
