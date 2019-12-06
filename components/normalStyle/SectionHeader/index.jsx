import React from "react";
import PropTypes from "prop-types";
import style from "./index.scss";

const SectionHeader = props => {
  const { title } = props;
  return (
    <header className={style.sectionHeader}>
      <span></span>
      <h3>{title}</h3>
      <span></span>
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string
};

export default SectionHeader;
