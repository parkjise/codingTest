import React from "react";
import Buttons from "./Buttons";

const Props = () => {
  const buttonProps = {
    text: "button",
    color: "black",
    a: 1,
    b: 2,
  };
  return (
    <>
      <Buttons {...buttonProps} text={"메일"} />
      <Buttons {...buttonProps} text={"카페"} />
      <Buttons {...buttonProps} text={"블로그"} color="blue">
        <p>11111</p>
      </Buttons>
    </>
  );
};

export default Props;
