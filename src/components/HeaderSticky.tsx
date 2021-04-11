import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, changeFlg, changeName } from "features/userSlice";
import SimpleSlider from "./molecure/Slider";

const HeaderSticky = () => {
  const distPatch = useDispatch();
  const select = useSelector(selectUser);
  const handleClick = () => {
    distPatch(changeFlg());
  };
  return (
    <div
      className="w-full sticky top-0 flex border-b border p-5 items-center space-x-3 justify-center z-50 "
      onClick={handleClick}>
      {/* <div className="h-10 w-10 rounded-full bg-green-300" />
      <p>Search all 226 icons (Press "/" to focus)</p>
      <p>{select.id}</p>
      <p>{select.name}</p>
      <p>{select.flg == true ? "true" : "false"}</p> */}
      <SimpleSlider />
    </div>
  );
};

export default HeaderSticky;
