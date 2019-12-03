import React, { Fragment } from 'react'
import Head from 'next/head'
import NormalStyle from '../components/normalStyle'
import '../app.scss'

const Index = () => (
  <Fragment>
    <Head>
      <title>赵朋承的简历</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <NormalStyle />
  </Fragment>
)

export default Index