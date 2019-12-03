import React from 'react'
import Body from './Body'
import Header from './Header'
import style from './index.scss'

const NormalStyle = () => {
  return (
    <div className={style.gWarp}>
      <Header />
      <Body />
    </div>
  )
}

export default NormalStyle