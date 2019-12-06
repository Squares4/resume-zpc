import React, { Fragment } from 'react';
import style from './index.scss';
import BodySection from '../BodySection';

const Body = () => {
  return (
    <main className={style.mBody}>
      <BodySection />
      {/* <BodySection /> */}
    </main>
  )
}

export default Body