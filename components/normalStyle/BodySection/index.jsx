import React, { Fragment } from "react";
import style from "./index.scss";
import PropTypes from "prop-types";
import SectionHeader from "../SectionHeader";
import SectionContent from "../SectionContent";

const BodySection = props => {
  const { sectionData } = props;

  return (
    <section className={style.content}>
      {sectionData
        ? sectionData.map((item, index) => (
            <Fragment key={index}>
              <SectionHeader title={item.title} />
              <SectionContent items={item.items} />
            </Fragment>
          ))
        : null}
    </section>
  );
};

BodySection.propTypes = {
  sectionData: PropTypes.array
};

export default BodySection;
