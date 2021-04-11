import React from "react";

type HeaderIconProps = {
  Icon: any;
  title: string;
};

const HeaderIcon: React.FC<HeaderIconProps> = ({ Icon, title }) => {
  return (
    <div className="flex items-center">
      <Icon className="h-10" />
      <p>{title}</p>
    </div>
  );
};

export default HeaderIcon;
