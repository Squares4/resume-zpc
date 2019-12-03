import React from "react";
import style from "./index.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <section className={style.name}>
        <h1>
          赵朋承<small>Zhao PengCheng</small>
        </h1>
        <h2>求职意向：Web前端工程师</h2>
      </section>
      <section className={style.info}>
        <div className={style.school}>
          <ul>
            <li>男 ｜ 1999.10</li>
            <li>本科 ｜ 2021年毕业</li>
            <li>重庆邮电大学 ｜ 软件工程专业</li>
          </ul>
        </div>
        <div className={style.connect}>
          <ul>
            <li className={style.hLink}>
              <a href="#">
                <span>https://wwwwwww</span>
                <img className={style.hIcon} src='/static/home.svg' alt="home" />
              </a>
            </li>
            <li className={style.hLink}>
              <a href="square2mikuzi@gmail.com">
                <span>square2mikuzi@gmail.com</span>
                <img className={style.hIcon} src='/static/email.svg' alt="email" />
              </a>
            </li>
            <li className={style.hLink}>
              <a href="https://github.com/Squares4">
                <span>https://github.com/Squares4</span>
                <img className={style.hIcon} src='/static/github.svg' alt="github" />
              </a>
            </li>
            <li className={style.hLink}>
                <span>19999999999</span>
                <img className={style.hIcon} src='/static/phone.svg' alt="phone" />
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
