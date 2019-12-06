import React from "react";
import style from "./index.scss";

const {
  resumeData: { headerData }
} = global;

const Header = () => {
  return (
    <header className={style.header}>
      <section className={style.name}>
        <h1>
          {headerData.name}
          {headerData.englishName ? (
            <small>{headerData.englishName}</small>
          ) : null}
        </h1>
        <h2>
          {headerData.job}
          {headerData.jobNote ? <small>{headerData.jobNote}</small> : null}
        </h2>
      </section>
      <section className={style.info}>
        <div className={style.school}>
          <ul>
            {headerData.school.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={style.connect}>
          <ul>
            <li className={style.hLink}>
              <a href={headerData.home}>
                <span>{headerData.home}</span>
                <img
                  className={style.hIcon}
                  src="/static/home.svg"
                  alt="home"
                />
              </a>
            </li>
            <li className={style.hLink}>
              <a
                href={"mailto:" + headerData.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{headerData.email}</span>
                <img
                  className={style.hIcon}
                  src="/static/email.svg"
                  alt="email"
                />
              </a>
            </li>
            <li className={style.hLink}>
              <a
                href={headerData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{headerData.github}</span>
                <img
                  className={style.hIcon}
                  src="/static/github.svg"
                  alt="github"
                />
              </a>
            </li>
            <li className={style.hLink}>
              <a href={'tel:' + headerData.phone} target="_blank" rel="noopener noreferrer">
                <span>{headerData.phone}</span>
                <img
                  className={style.hIcon}
                  src="/static/phone.svg"
                  alt="phone"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
