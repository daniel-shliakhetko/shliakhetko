import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Fylfot = (props) => {
  const { className, style, color } = props;

  return (
    <svg
      style={style}
      className={classNames(className, "Shape")}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 512 512"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsSvgjs="http://svgjs.dev/svgjs"
    >
      <path
        d="M0 .001h235.016v50.361H0zm0 92.327h235.016v50.36H0zm0 92.328v50.36h235.016v-50.36zM461.638.001h50.361v235.016h-50.361zm-92.328 0h50.36v235.016h-50.36zm-92.327 0v235.015h50.36V.001zm0 461.638h235.016V512H276.983zm0-92.328h235.016v50.36H276.983zm163.673-92.327H276.983v50.36H512v-50.36zM0 276.984h50.361V512H0zm92.328 0h50.36V512h-50.36zm92.327 0v235.015h50.361V276.984z"
        fill={color || "#FFFFFF"}
      ></path>
    </svg>
  );
};

Fylfot.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default Fylfot;
