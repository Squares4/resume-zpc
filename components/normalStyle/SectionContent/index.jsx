import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./index.scss";

const SectionContent = props => {
  const { items } = props;
  return (
    <Fragment>
      {items.map((item, index) => (
        <article key={index}>
          <header className={style.artIntro}>
            <span className={style.artTime}>{item.time}</span>
            <span className={style.artName}>{item.name}</span>
            <span className={style.artTag}>{item.tag}</span>
          </header>
          {item.content.map((art, index) => (
            <p key={index} className={style.artContent} dangerouslySetInnerHTML={{__html: art}}></p>
          ))}
        </article>
      ))}
    </Fragment>
  );
};

SectionContent.propTypes = {
  items: PropTypes.array
};

export default SectionContent;
