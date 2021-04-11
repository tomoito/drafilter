import { StringDecoder } from "node:string_decoder";
import React from "react";

type Props = {
  name: string;
};

const Button: React.FC<Props> = ({ name }) => {
  return (
    <div className=" w-full h-full bg-yellow-200 border-2 rounded-lg">
      <div className="font-mono text-white text-3xl ">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Button;
