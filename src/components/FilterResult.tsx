import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useSelector } from "react-redux";
import { selectBouguAll } from "features/bouguSlice";

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
              className="h-20 w-auto"
              src={`images/${pic_folder}/${bouguSelector[i].pic}`}
              alt=""
            />
            <p>{bouguSelector[i].pic}</p>{" "}
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
