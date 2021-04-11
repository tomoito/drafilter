import React from "react";
import Slider from "react-slick";

import { useDispatch } from "react-redux";
import { filterKokoro1, filterKokoro2, filterKokoro3 } from "features/userSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const style = {
    margin: 10,
    height: 50,
    color: "#fff",
    background: "#3ab60b",
  };
  const distPatch = useDispatch();
  const handleClick1 = () => {
    distPatch(filterKokoro1());
  };
  const handleClick2 = () => {
    distPatch(filterKokoro2());
  };
  const handleClick3 = () => {
    distPatch(filterKokoro3());
  };
  return (
    <div className="w-full bg-gray-200">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div onClick={handleClick1}>
          <h3>12</h3>
        </div>
        <div onClick={handleClick1}>
          <h3>13</h3>
        </div>
        <div>
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
