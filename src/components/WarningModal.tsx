"use client";
import React, { useEffect, useRef, useState, createContext } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/navigation";

type ModalProps = {
  visible: boolean;
  title: string;
  level: "account" | "menu" | "table";
  onClose(): void;
};

const WarningModal = ({ visible, title, level, onClose }: ModalProps) => {
  const content = {
    account: "customer's account",
    menu: "food menu",
    table: "table",
  };
  const router = useRouter();
  if (!visible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-sans">
        <div className="relative rounded-md bg-custom-orange shadow w-1/3 h-fit p-5">
          <div className="flex flex-col rounded-t text-white">
            <div className="flex justify-end">
              <button
                className="px-2 text-xl rounded-md hover:bg-custom-red-hov"
                onClick={() => onClose()}
              >
                x
              </button>
            </div>
            <div className="text-center text-4xl font-bold py-3">{title}</div>
          </div>
          <div className="text-center text-white p-5">
            <span>
              You are deleting a{" "}
              <span className="font-bold">{content[level]}</span>.
            </span>
            <br />
            <span>Do you wish to continue?</span>
          </div>
          <div className="flex m-5 text-sm flex-col sm:flex-row items-center lg:justify-evenly justify-evenly gap-5">
            <button className="w-1/3 h-11 text-white border border-white rounded-md text-center hover:border-0 hover:bg-white hover:text-black">
              Yes
            </button>
            <button
              className="w-1/3 h-11 text-black bg-white rounded-md text-center hover:bg-transparent hover:border hover:border-white hover:text-white"
              onClick={() => onClose()}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarningModal;
