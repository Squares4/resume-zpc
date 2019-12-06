import React, { Fragment } from "react";
import Head from "next/head";
import "../resumeData";
import "../app.scss";
import NormalStyle from "../components/normalStyle";

const { resumeData } = global;

const Index = () => (
  <Fragment>
    <Head>
      <title>{resumeData.name}的简历</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NormalStyle />
  </Fragment>
);

export default Index;
