import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import { selectBouguAll } from "features/bouguSlice";
import Modal from "./Modal";
import { setModal, selectModal } from "features/bouguSlice";

type Props = {
  title: string;
  title2: string[];
  pic_folder: string;
};

const FilterResult: React.FC<Props> = ({ title, title2, pic_folder }) => {
  const bouguSelector = useSelector(selectBouguAll);
  const [showModal, setShowModal] = React.useState(false);
  const [ModalArg, setModalArg] = React.useState("水のアミュレット");
  const disPatch = useDispatch();
  const modalIsOpen = useSelector(selectModal);

  const handleClick = (e: string) => {
    setModalArg(e);
    disPatch(setModal());
  };

  return (
    <div className=" w-full">
      {/* {title} */}
      <div className="flex flex-wrap">
        {title2.map((i: string) => (
          <>
            <div key={i} className="p-2" onClick={() => handleClick(i)}>
              <img
                className=" h-16 w-auto"
                src={`images/${pic_folder}/${bouguSelector[i].pic}`}
                alt=""
              />
              <p className="text-xs w-20 line-clamp-1">{bouguSelector[i].name}</p>
            </div>
          </>
        ))}
        <Modal
          showInfo={bouguSelector[ModalArg]}
          name={bouguSelector[ModalArg]?.name}
          handleChangeBase={() => disPatch(setModal())}
        />
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
