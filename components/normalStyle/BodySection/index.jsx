import React from "react";
import style from "./index.scss";
import SectionHeader from "../SectionHeader";
import SectionContent from "../SectionContent";

const {
  resumeData: { sectionData }
} = global;

const data = sectionData[0];

const BodySection = () => {
  return (
    <section className={style.content}>
      <SectionHeader title={data.title} />
      <SectionContent items={data.items} />
    </section>
  );
};

export default BodySection;
