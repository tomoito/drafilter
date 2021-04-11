import React from "react";
import Image from "next/image";
type Props = {
  title: string;
  Pic: string;
};

const Item: React.FC<Props> = ({ title, Pic }) => {
  // console.log(process.env.PUBLIC_URL);
  return (
    <div className="flex flex-col w-full  md:w-auto md:max-w-md items-center cursor-pointer transform duration-150 hover:scale-105 mx-3 my-2">
      <div className="border border-gray-800 rounded-lg items-center  justify-center grid place-items-center h-30 w-30 ">
        {/* <img src={`${process.env.PUBLIC_URL}/pic/${Pic}`} className=" h-10 w-10" /> */}
        <img src={`images/pic/${Pic}`} className="h-30 w-30" />
        {/* <Image src={`/public/images/pic/${Pic}`} width={100} height={100} /> */}
      </div>
      {/* src={`${process.env.PUBLIC_URL}/pic/${selectKokoroList[i].imgpath}`} */}
      <p className="text-xs font-mono items-center m-4"></p>
    </div>
  );
};

export default Item;
