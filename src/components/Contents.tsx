import React from "react";
import ItemBox from "./molecure/ItemBox";

const Contents = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/2">
        {/* LEFT */}
        <ItemBox />
      </div>
      {/* RIGHT */}
      <div className="w-1/2">
        <ItemBox />
      </div>
    </div>
  );
};

export default Contents;
