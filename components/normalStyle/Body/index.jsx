import React, { Fragment } from 'react';
import style from './index.scss';
import BodySection from '../BodySection';

const {
  resumeData: { sectionDataLeft, sectionDataRight }
} = global;

const Body = () => {
  return (
    <main className={style.mBody}>
      <BodySection sectionData={sectionDataLeft}/>
      <BodySection sectionData={sectionDataRight}/>
    </main>
  )
}

export default Body