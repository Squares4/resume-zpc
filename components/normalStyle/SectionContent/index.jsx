import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./index.scss";

const SectionContent = props => {
  const { items } = props;
  return (
    <Fragment>
      {items.map((item, index) => (
        <article key={index}>
          {(item.time && item.name && item.tag) ? <header className={style.artIntro}>
            {item.time ? <span className={style.artTime}>{item.time}</span> : null}
            {item.name ? <span className={style.artName}>{item.name}</span> : null}
            {item.tag ? <span className={style.artTag}>{item.tag}</span> : null}
          </header> : null}
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
