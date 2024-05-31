import React, { useState } from "react";
import "./index.css";
import Circle from "./components/Circle";

export default function App() {
  const [sliderValue, setSliderValue] = useState(1);

  const [sliderText, setSliderText] = useState("99");
  const [sliderClass, setSliderClass] = useState("half");

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);

    switch (e.target.value) {
      case "1":
        setSliderText("99");
        setSliderClass("half");
        break;
        case "2":
          setSliderText("363");
          setSliderClass("three-quarter");
          break;
          case "3":
            setSliderText("495");
            setSliderClass("full");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section id="slider-section">
        <div className=" relative flex flex-col-reverse items-center xl:grid xl:grid-cols-4 xl:grid-rows-1 xl:pt-6">
          <div
            id="slider-illustration"
            className="order-2 xl:order-1 mt-6 mb-9 xl:mb-0 xl:mt-0 relative xl:relative xl:top-[9rem]"
          >
            <Circle
              style="m-auto w-[20rem] h-[20rem] sm:w-[27rem] sm:h-[27rem] rounded-full xl:w-[35rem] xl:h-[35rem] xl:mt-[0] xl:relative xl:top-[-8rem] xl:left-[4rem]"
              sliderClass={sliderClass}
            >
              <div className="relative flex flex-col items-center text-center">
                <h3 className="ogg text-[#ECEEEF] text-3xl mt-4 sm:text-5xl sm:mt-14 xl:text-[5rem] xl:mt-[5rem]">
                  Z-Miles
                </h3>
                <p className="text-[#DAD2BD] text-[1.25rem] mt-4 sm:text-2xl w-[10rem] sm:mt-6 xl:text-4xl xl:w-[15rem] xl:mt-[2rem]">
                  You save <span className="z-bold">RM{sliderText}</span>/year*
                </p>
                <img
                  className="w-[12rem] mt-8 sm:w-[16rem] sm:mt-10 xl:w-[18rem] xl:mt-[3rem]"
                  src="car.png"
                />
              </div>
            </Circle>
            <div
              id="slider-container"
              className="w-full px-6 xl:relative xl:px-0 xl:top-[-8rem] left-[10.5rem] xl:w-[68%] 2xl:w-[76%]"
            >
              <input
                className="slider w-[98%] h-[5px] mt-8 sm:h-[7px] xl:h-[8px] 2xl:h-[9.4px]"
                onChange={handleSliderChange}
                type="range"
                min={1}
                defaultValue={1}
                max={3}
              />
              <div className="flex relative z-10 justify-between top-2 xl:top-[0.5rem] xl:w-[97%]">
                <p className="xl:text-[1.3rem]">12,000KM</p>
                <p className="xl:text-[1.3rem]">6,000KM</p>
                <p className="xl:text-[1.3rem]">3,000KM</p>
              </div>
            </div>
            <div id="semi-circle" className="absolute bottom-[3.6rem] left-[-2rem] sm:bottom-[0.5rem] xl:bottom-[5.7rem] xl:left-[5rem] 2xl:bottom-[2rem]">
              <img src="semicircle.png"></img>
            </div>
          </div>
          <div
            id="quote-btn"
            className="order-1 xl:order-3 mb-8 xl:ml-[6.5rem] xl:mt-[-10rem] xl:p-[0.5rem] xl:mb-[11rem]"
          >
            <a href="https://www.google.com/">
              <button className="ml-[0.3rem] w-[16.1rem] text-[1.25rem] bg-[#23366F] p-3 rounded-full xl:text-[1rem] xl:p-[0.5rem] xl:w-[10rem] xl:py-3">
                Get a quote now
              </button>
            </a>
          </div>
          <div
            id="slider-headline"
            className="order-3 mt-4 sm:mt-[4.6rem] mx-7 w-[90%] sm:w-[30rem] md:w-[35rem] xl:order-2 xl:mx-[4.5rem] xl:mt-[2rem]"
          >
            <div className="w-[15rem] sm:w-[30rem] m-auto">
              <h2 className="text-[2rem] leading-[2.4rem] sm:text-[3.5rem] sm:leading-[3.5rem] xl:text-[2rem] xl:leading-[2.5rem] xl:w-[70%]">
                Toggle the mileage bar to see how you
              </h2>
              <h2 className="ogg text-[#ECEEEF] text-[2rem] leading-[2.4rem] sm:text-[3.5rem] sm:leading-[3.5rem] xl:text-[3.5rem] xl:leading-[4rem]">
                pay less when you drive less!
              </h2>
            </div>
            <p className="z-light w-[15rem] sm:w-[30rem] m-auto text-[0.8rem] sm:text-[1.2rem] mt-2 leading-5 sm:mt-9 sm:text-2xl sm:leading-6 xl:w-[23rem] xl:text-[1rem] xl:leading-[1.4rem] xl:mt-8 xl:mx-10">
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
