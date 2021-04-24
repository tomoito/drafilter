import React from "react";
import Image from "next/image";
import { GlobeIcon, ReceiptRefundIcon, ReceiptTaxIcon } from "@heroicons/react/solid";

import { selectBougu } from "features/bouguSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const selector = useSelector(selectBougu);
  return (
    <div className=" bg-green-300 w-full">
      <div className="flex flex-row justify-between">
        {/* LEFT HEADER */}
        <div className="flex mx-4 my-5 items-center">
          <div className="h-10 w-10 rounded-full bg-gray-100 border border-white"></div>
          <p className=" font-sans md:text-2xl text-white text-xs">
            ドラクエウォーク検索システム
          </p>
        </div>
        {/* END LEFT HEADER */}

        {/* RIGHT HEADER */}
        <div className="flex">
          <ul className="flex items-center space-x-3 mx-5 text-white font-semibold">
            <li>
              <p>お問い合わせ</p>
            </li>
            <li>
              <p>お知らせ</p>
            </li>
          </ul>
        </div>
        {/* END RIGHT HEADER */}
      </div>
    </div>
  );
};

export default Header;
