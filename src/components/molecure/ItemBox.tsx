import Item from "components/atom/Item";
import React from "react";
import { GlobeIcon, ReceiptRefundIcon, ReceiptTaxIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectAll, selectUser } from "features/userSlice";
import { kokoroAllList } from "models";
const ItemBox = () => {
  const kokoroList = useSelector(selectAll);

  return (
    <div>
      <div className="flex  flex-wrap items-center justify-center">
        {(Object.keys(kokoroList) as (keyof kokoroAllList)[]).map(i => (
          <Item
            key={kokoroList[i].id}
            title={kokoroList[i].name}
            Pic={kokoroList[i].imgpath}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemBox;
