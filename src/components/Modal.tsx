import React from "react";
import { bougu } from "models";
import { selectModal } from "features/bouguSlice";
import { useSelector } from "react-redux";

type Props = {
  showInfo: bougu;
  name: string;
  handleChangeBase: (e: boolean) => void;
};

export default function Modal(props: Props) {
  const modalOpen = useSelector(selectModal);

  return (
    <>
      {modalOpen && props.showInfo ? (
        <>
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => props.handleChangeBase(false)}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">{props.showInfo?.name}</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-semibold">
                      <ul className=" bg-gray-700 rounded-lg text-white p-4">
                        {/* {props.showInfo?.option[2]} */}
                        {Object.keys(props.showInfo?.option).map(i => (
                          <li>
                            <span>{i}</span>
                            <span>{"  "} +</span>
                            <span>{props.showInfo.option[i]}</span>
                            <span></span>
                          </li>
                        ))}
                      </ul>
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="group cursor-pointer item-center flex w-full items-center bg-gray-300 justify-end p-6 border border-solid border-blueGray-200 rounded-b ">
                    <p className="transform group-hover:scale-125 text-red-500 text-center flex-grow font-bold uppercase  text-sm border-1  mr-1 mb-1 ease-linear transition-all duration-150">
                      Close
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
          </div>
        </>
      ) : null}
    </>
  );
}
