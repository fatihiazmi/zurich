import React from "react";

const Circle = ({ style, children, sliderClass }) => {
  return (
    <>
      <div className={`${style} circle-${sliderClass}`}>{children}</div>
    </>
  );
};

export default Circle;
