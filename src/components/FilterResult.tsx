import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tablist from "./Tablist";

type Props = {
  title: string;
  title2: string[];
  pic_folder: string;
};

const FilterResult: React.FC<Props> = ({ title, title2, pic_folder }) => {
  return (
    <div className=" w-full">
      {/* {title} */}
      <div className="flex flex-wrap">
        {title2.map((i: any) => (
          <div key={i.title} className="p-2">
            {/* <img src={i.pic} alt="" /> */}
            <img className="h-20 w-auto" src={`images/${pic_folder}/${i.pic}`} alt="" />
            <p>{i.title}</p>
          </div>
        ))}
      </div>
      <p>FilterResult</p>

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
