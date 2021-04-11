import React from "react";
import Image from "next/image";
import HeaderIcon from "./atom/HeaderIcon";
import { GlobeIcon, ReceiptRefundIcon, ReceiptTaxIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="  w-full bg-purple-500 flex flex-col ">
      {/* LEFT */}
      <div className="flex justify-between border-b items-center p-2">
        <div className="flex items-center space-x-2">
          <div className="h-20 w-20 shadow-lg border-white border-2 bg-purple-400 rounded-full"></div>
          <p className="text-white font-semibold text-lg">heroicoins</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          <div className="flex">
            <p className="text-white font-bold text-sm">Share</p>
            <p></p>
            <p className="text-white font-bold text-sm hidden sm:inline-flex">
              {" "}
              On Twitter
            </p>
          </div>
        </div>
      </div>
      {/* MIDDLE */}
      <div>
        <div className="items-center px-3 md:flex md:flex-col py-5  text-center">
          <span className=" text-white font-bold text-4xl">
            Beautiful hand-crafted SVG icons,
          </span>
          <span className="text-blue-200 font-bold text-4xl">
            by the makers of Tailwind CSS.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center text-center md:flex-row">
          <div className="flex">
            <HeaderIcon Icon={GlobeIcon} title="226 Icons" />
            <HeaderIcon Icon={ReceiptTaxIcon} title="MIT Licensed" />
          </div>
          <HeaderIcon Icon={ReceiptRefundIcon} title="React + Vue Libraries" />
        </div>
      </div>
      {/* RIGHT */}
      <div>
        <div className="  items-center mx-5 my-3 space-y-2 md:space-x-5 md:space-y-0 justify-center flex flex-col md:flex-row">
          <div className="flex w-full md:w-1/3 items-center  rounded-full  bg-blue-100 justify-center py-3 text-white font-semibold space-x-3 cursor-pointer hover:shadow-lg my-4">
            <div className="h-10 w-10 rounded-full bg-white" />
            <span>Get Figma File</span>
          </div>
          <div className="flex w-full md:w-1/3 items-center rounded-full bg-blue-100 justify-center py-3 text-white font-semibold space-x-3 cursor-pointer hover:shadow-lg my-4">
            <div className="h-10 w-10 rounded-full bg-white" />
            <span>Get Figma File</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
