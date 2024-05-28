import React, { useState } from "react";
import "./index.css";
import Circle from "./components/Circle";

export default function App() {

  const [sliderValue, setSliderValue] = useState(1)
  
  const [sliderNumber, setSliderNumber] = useState(0)
  const [sliderText, setSliderText] = useState("495")

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value)

    switch (e.target.value) {
      case "1":
        setSliderNumber(0);
        setSliderText("495");
        break;
      case "2":
        setSliderNumber(64);
        setSliderText("126");
        break;
      case "3":
        setSliderNumber(252);
        setSliderText("252");
        break;
      default:
        break;
    }
  }

  return (
    <>
      {/* <img
        src="public/mobile-ref.png"
        style={{
          width: "100%",
          opacity: 0.4,
          position: "absolute",
          zIndex: 2,
        }}
        alt=""
      /> */}
      <section id="slider-section">
        <div className="flex flex-col-reverse items-center lg:flex-row">
          <div id="slider-illustration" className="order-2 lg:order-1 my-9">
            <Circle width="440" height="440" sliderNumber={sliderNumber}>
              <h3 className="ogg text-5xl mt-14">Z-Miles</h3>
              <p className="text-2xl w-[10rem] mt-6">You save <span className="z-bold">RM495</span>/year*</p>
              <img className="w-[16rem] mt-10" src="public/car.png" />
            </Circle>
            <div id="slider-container" className="w-full">
              <input className="slider w-full" onChange={handleSliderChange} type="range" min={1} defaultValue={1} max={3} />
            </div>
          </div>
          <div id="quote-btn" className="order-1 lg:order-3">
            <a href="https://www.google.com/">
                <button className="ml-[0.3rem] w-[16.1rem] text-[1.5rem] bg-[#23366F] p-4 rounded-full">
                  Get a quote now!
                </button>
            </a>
          </div>
          <div id="slider-headline" className="order-3 mt-[4.6rem] mx-7 lg:order-2">
            <div className="pr-16">
              <h2 className="text-[3.5rem] leading-[3.5rem]">Toggle the milage bar to see how you</h2>
              <h2 className="ogg text-[3.5rem] leading-[3.5rem]">pay less when you drive less!</h2>
            </div>
            <p className="mt-9 text-xl leading-6 pr-10">
              *Savings are calculated in comparison to Z-Driver Car Takaful annual contributions totalling RM965 based on a customer profile in 2024.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
