import React from "react";

const Circle = ({ width, height, children }) => {
  return (
    <>
      <div className="relative">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 639 637"
        >
          <ellipse
            id="Ellipse_281"
            data-name="Ellipse 281"
            cx="319.5"
            cy="318.5"
            rx="319.5"
            ry="318.5"
            fill="#2167ae"
          />
        </svg> */}
        <svg width={width} height={height} viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
            <circle r="40" cx="50" cy="50" fill="#2167ae" stroke="#2167ae" strokeWidth="12px" strokeDasharray={0} strokeDashoffset={1}></circle>
            <circle r="40" cx="50" cy="50" fill="transparent" stroke="#dad2bd" strokeWidth="12px"></circle>
        </svg>
      </div>
      <div className="absolute flex flex-col items-center text-center top-[32.5rem] left-[7rem]">{children}</div>
    </>
  );
};

export default Circle;
