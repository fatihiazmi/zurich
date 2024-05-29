import React, { useState } from "react";
import "./index.css";
import Circle from "./components/Circle";

export default function App() {
  const [sliderValue, setSliderValue] = useState(1);

  const [sliderNumber, setSliderNumber] = useState(0);
  const [sliderText, setSliderText] = useState("495");
  const [sliderClass, setSliderClass] = useState("full");

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);

    switch (e.target.value) {
      case "1":
        setSliderNumber(0);
        setSliderText("495");
        setSliderClass("full");
        break;
      case "2":
        setSliderNumber(64);
        setSliderText("363");
        setSliderClass("three-quarter");
        break;
      case "3":
        setSliderNumber(252);
        setSliderText("99");
        setSliderClass("half");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section id="slider-section">
        <div className="flex flex-col-reverse items-center 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-2 2xl:gap-x-0 2xl:gap-y-0">
          <div
            id="slider-illustration"
            className="order-2 2xl:order-1 mt-6 mb-9 relative"
          >
            <Circle
              width="440"
              height="440"
              style="m-5 w-[27rem] h-[27rem] rounded-full 2xl:w-[41rem] 2xl:h-[41rem] 2xl:mt-[2rem] 2xl:ml-[15rem]"
              sliderNumber={sliderNumber}
              sliderClass={sliderClass}
            >
              <div className="relative flex flex-col items-center text-center">
                <h3 className="ogg text-5xl mt-14 2xl:text-[5rem] 2xl:mt-[5rem]">Z-Miles</h3>
                <p className="text-2xl w-[10rem] mt-6 2xl:text-4xl 2xl:w-[15rem] 2xl:mt-[3rem]">
                  You save <span className="z-bold">RM{ sliderText }</span>/year*
                </p>
                <img className="w-[16rem] mt-10 2xl:w-[25rem] 2xl:mt-[4rem]" src="car.png" />
              </div>
            </Circle>
            <div id="slider-container" className="w-full px-6 2xl:ml-[12rem] 2xl:pl-[4rem] 2xl:pr-[15rem]">
              <input
                className="slider mt-8 2xl:w-[65%] 2xl:h-[10px]"
                onChange={handleSliderChange}
                type="range"
                min={1}
                defaultValue={1}
                max={3}
              />
              <div className="flex relative z-10 justify-between top-14">
                <p className="2xl:text-[2rem] 2xl:mt-6">3,000KM</p>
                <p className="2xl:text-[2rem] 2xl:mt-6">6,000KM</p>
                <p className="2xl:text-[2rem] 2xl:mt-6">12,000KM</p>
              </div>
            </div>
            <div className="absolute bottom-[-1rem] left-[-4rem] 2xl:relative 2xl:bottom-[15rem] 2xl:left-[9rem]">
              <img src="semicircle.png"></img>
            </div>
          </div>
          <div id="quote-btn" className="order-1 2xl:order-3 mb-8 2xl:ml-[4.5rem] 2xl:mt-[-31rem]">
            <a href="https://www.google.com/">
              <button className="ml-[0.3rem] w-[16.1rem] text-[1.25rem] bg-[#23366F] p-3 rounded-full 2xl:text-[1.5rem] 2xl:p-[1rem]">
                Get a quote now!
              </button>
            </a>
          </div>
          <div
            id="slider-headline"
            className="order-3 mt-[4.6rem] mx-7 2xl:order-2 2xl:mx-[4.5rem] 2xl:mt-[14rem]"
          >
            <div className="pr-16 2xl:pr-[14rem]">
              <h2 className="text-[3.5rem] leading-[3.5rem] 2xl:text-[3rem]">
                Toggle the milage bar to see how you
              </h2>
              <h2 className="ogg text-[3.5rem] leading-[3.5rem] 2xl:text-[4.5rem] 2xl:leading-[6rem]">
                pay less when you drive less!
              </h2>
            </div>
            <p className="mt-9 text-2xl leading-6 pr-10 2xl:w-[38rem] 2xl:text-[1.45rem] 2xl:leading-[1.75rem]">
              *Savings are calculated in comparison to Z-Driver Car Takaful
              annual contributions totalling RM965 based on a customer profile
              in 2024.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
