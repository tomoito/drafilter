import React from "react";
import { bougu, bouguKind } from "models";

type Props = {
  id: bouguKind;
  handleChangeBase: (e: bouguKind) => void;
};

const Badge: React.FC<Props> = ({ id, handleChangeBase }) => {
  return (
    <div onClick={() => handleChangeBase(id)}>
      <div className="relative inline-block ml-2 bg-red-600 rounded-full px-3 py-2 mr-2 text-xs font-bold leading-none text-red-100 hover:bg-gray-300 cursor-pointer">
        {id}
        <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
      </div>
    </div>
  );
};

export default Badge;
