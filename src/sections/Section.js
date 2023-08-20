import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Section = (props) => {
  return (
    <section style={{padding:"2rem 0"}} className={classNames(props.className, "Section")}>
      <div style={{margin:"auto"}} className={props.isRow ? "Row" : ""}>{props.children}</div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  isRow: PropTypes.bool,
};

export default Section;