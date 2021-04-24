import React from "react";
import { selectBouguAll } from "features/bouguSlice";
import { useSelector } from "react-redux";

type Props = {
  info: string;
};

const ModalWindow = ({ info }) => {
  const bouguSelector = useSelector(selectBouguAll);

  return (
    <div>
      <p>
        Reality:
        {bouguSelector[info].reality}
      </p>
      <p>
        Pic:
        {bouguSelector[info].pic}
      </p>
    </div>
  );
};

export default ModalWindow;
