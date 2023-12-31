import React from "react";
import './title.css';

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

function Title({size, children}) {
  return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>;
 
}

export default Title;
