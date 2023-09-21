import React from "react";
import { FunctionComponent } from "react";
import style from "./Button.module.scss";

type Props = {
  className?: string;
  text: string;
};

const Button: FunctionComponent<Props> = ({ className, text }) => {
  return <button className={`${style.button} ${className}`}>{text}</button>;
};

export default Button;
