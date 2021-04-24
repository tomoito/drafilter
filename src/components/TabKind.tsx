import React from "react";
import FilterResult from "./FilterResult";

import {
  selectBougu,
  selectBouguAll,
  filterBouguAll,
  filterAtama,
  filtertate,
  filterYoroiSita,
  filterYoroiUe,
  filterAcuse,
} from "features/bouguSlice";
import { useSelector } from "react-redux";

const FilterItem = ["頭", "上着", "下", "盾", "アクセサリー", "こころ"];

const TabKind = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const color = "black";

  const dispAcuseSelector = useSelector(filterAcuse);
  const dispAtamaSelector = useSelector(filterAtama);
  const dispTateSelector = useSelector(filtertate);
  const dispYoroiUeSelector = useSelector(filterYoroiUe);
  const dispYoroiSitaSelector = useSelector(filterYoroiSita);

  return (
    <>
      <div className="flex w-full">
        <div className=" flex-col flex md:flex-row ">
          <ul
            className="flex flex-row md:flex-col w-max  flex-nowrap  md:h-screen md:space-y-4 space-y-0"
            role="tablist">
            <li className=" min-w-max p-3 font-bold text-base  hover:border-b-4 text-gray-700 hover:text-green-800 cursor-pointer">
              <a
                className={
                  "p-3 font-bold text-base cursor-pointer " +
                  (openTab === 1 ? "text-white bg-green-400" : "text-black bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                頭
              </a>
            </li>
            <li className=" min-w-max p-3 font-bold text-base  hover:border-b-4 text-gray-700 hover:text-green-800 cursor-pointer">
              <a
                className={
                  "p-3 font-bold text-base cursor-pointer" +
                  (openTab === 2 ? "text-white bg-green-400" : " text-black bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                たて
              </a>
            </li>
            <li className=" min-w-max p-3 font-bold text-base  hover:border-b-4 text-gray-700 hover:text-green-800 cursor-pointer">
              <a
                className={
                  "p-3 font-bold text-base cursor-pointer" +
                  (openTab === 5 ? "text-white bg-green-400" : " text-black bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist">
                鎧下
              </a>
            </li>
            <li className=" min-w-max p-3 font-bold text-base  hover:border-b-4 text-gray-700 hover:text-green-800 cursor-pointer">
              <a
                className={
                  "p-3 font-bold text-base   " +
                  (openTab === 4 ? "text-white bg-gray-500" : " text-green-400 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist">
                鎧上
              </a>
            </li>
            <li className=" min-w-max p-3 font-bold text-base  hover:border-b-4 text-gray-700 hover:text-green-800 cursor-pointer">
              <a
                className={
                  "p-3 font-bold text-base cursor-pointer" +
                  (openTab === 6 ? "text-white bg-green-400" : " text-black bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist">
                アクセサリー
              </a>
            </li>
          </ul>

          <div className=" flex flex-col bg-yellow-200  mb-6 shadow-lg rounded">
            <div className="px-2 py-5">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? " inline-flex w-full" : "hidden"}
                  id="link1">
                  <FilterResult
                    title={"hoge"}
                    title2={dispAtamaSelector}
                    pic_folder={"pic_bougu"}
                  />
                </div>
                <div className={openTab === 2 ? " inline-flex" : "hidden"} id="link2">
                  <FilterResult
                    title={"hoge"}
                    title2={dispTateSelector}
                    pic_folder={"pic_bougu"}
                  />
                </div>
                <div className={openTab === 4 ? " inline-flex" : "hidden"} id="link4">
                  <FilterResult
                    title={"hoge"}
                    title2={dispYoroiUeSelector}
                    pic_folder={"pic_bougu"}
                  />
                </div>
                <div className={openTab === 5 ? " inline-flex" : "hidden"} id="link5">
                  <FilterResult
                    title={"hoge"}
                    title2={dispYoroiSitaSelector}
                    pic_folder={"pic_bougu"}
                  />
                </div>
                <div className={openTab === 6 ? " inline-flex" : "hidden"} id="link6">
                  <FilterResult
                    title={"hoge"}
                    title2={dispAcuseSelector}
                    pic_folder={"pic_acuse"}
                  />
                </div>
                <div className={openTab === 3 ? " inline-flex" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without cross-media value.
                    Quickly maximize timely deliverables for real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabKind;
