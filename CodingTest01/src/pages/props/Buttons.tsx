import React, { type ReactNode } from "react";

type ButtonType = {
  text: string;
  color: string;
  children?: ReactNode;
  a: number;
  b: number;
};

const Buttons = ({ children, text, color }: ButtonType) => {
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button
      style={{ color: color }}
      onClick={onClickButton}
      onMouseEnter={onClickButton}
    >
      {text}
      {children}
    </button>
  );
};

export default Buttons;
