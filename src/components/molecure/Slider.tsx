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

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const style = {
    margin: 10,
    height: 150,
    color: "#fff",
    background: "#3ab60b",
  };
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
    <div className="w-full h-12  ">
      <Slider {...settings}>
        <div className="  items-center text-2xl text-center h-10" onClick={handleClick1}>
          <Button name="斬撃体技アップ" />
        </div>
        <div className="  items-center text-2xl text-center h-10" onClick={handleClick2}>
          <Button name="mera" />
        </div>
        <div className="  items-center text-2xl text-center h-10" onClick={handleClick3}>
          <Button name="麻痺" />
        </div>
        <div className="  items-center text-2xl text-center h-10" onClick={handleClick4}>
          <Button name="result" />
        </div>
        <div className="  items-center text-2xl text-center h-10">
          <Button name="メラ" />
        </div>
        <div className="  items-center text-2xl text-center h-10">
          <Button name="メラ" />
        </div>
        <div className="  items-center text-2xl text-center h-full">
          <Button name="ohge" />
        </div>
        <div onClick={handleClick1} className="h-full">
          <h3>12</h3>
        </div>
        <div onClick={handleClick1}>
          <h3>13</h3>
        </div>
        <div className="  items-center text-2xl text-center h-16">
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div onClick={handleClick2}>
          <h3>16</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div onClick={handleClick3}>
          <h3>19</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div onClick={handleClick2}>
          <h3>19</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
