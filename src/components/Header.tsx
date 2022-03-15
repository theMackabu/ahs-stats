import React from "react";
import Head from "next/head";
import { SITE_DESCRIPTION, SITE_VERSION } from "app/config";

const Header: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>libQuest</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta content="libQuest Quizzes" property="og:title" />
      <meta content={SITE_VERSION} property="og:site_name" />
      <meta content={SITE_DESCRIPTION} property="og:description" />
      <meta name="description" content={SITE_DESCRIPTION} />
    </Head>
  );
};

export default Header;
