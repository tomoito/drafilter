import React from "react";
import Slider from "react-slick";

import { useDispatch } from "react-redux";
import {
  filterKokoro1,
  filterKokoro2,
  filterKokoro3,
  optionChange,
} from "features/userSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "components/atom/Button";

const SliderNone = () => {
  const distPatch = useDispatch();
  const handleClick1 = () => {
    distPatch(optionChange("斬撃体技アップ"));
    distPatch(filterKokoro1());
  };
  const handleClick2 = () => {
    distPatch(optionChange("メラ特技アップ"));
    distPatch(filterKokoro1());
  };
  const handleClick3 = () => {
    distPatch(optionChange("麻痺"));
    distPatch(filterKokoro1());
  };
  const handleClick4 = () => {
    distPatch(filterKokoro1());
  };

  return (
    <div className="flex flex-row w-screen overflow-x-scroll  ">
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
      <div
        className="flex-shrink-0  items-center text-2xl text-center h-10 transform duration-300 hover:scale-125 hover:bg-gray-300"
        onClick={handleClick1}>
        <Button name="斬撃体技アップ" />
      </div>
    </div>
  );
};

export default SliderNone;
