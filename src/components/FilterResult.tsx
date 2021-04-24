import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useSelector } from "react-redux";
import { selectBouguAll } from "features/bouguSlice";
import Modal from "./Modal";

type Props = {
  title: string;
  title2: string[];
  pic_folder: string;
};

const FilterResult: React.FC<Props> = ({ title, title2, pic_folder }) => {
  const bouguSelector = useSelector(selectBouguAll);
  return (
    <div className=" w-full">
      {/* {title} */}
      <div className="flex flex-wrap">
        {title2.map((i: string) => (
          <div key={i} className="p-2">
            <img
              className=" h-16 w-auto"
              src={`images/${pic_folder}/${bouguSelector[i].pic}`}
              alt=""
            />
            <p className="text-xs w-20 line-clamp-1">{bouguSelector[i].name}</p> <Modal />
            <span className="relative inline-block">
              <svg className="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
                <path
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"></path>
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                99
              </span>
            </span>
            <span className="relative inline-block ml-8">
              <svg className="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
                <path
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"></path>
              </svg>
              <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
            </span>
            <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              NEW
            </span>
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
              NEW
            </span>
          </div>
        ))}
      </div>

      {/* <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default FilterResult;
