import React from "react";
import Head from "next/head";
import { SITE_DESCRIPTION, SITE_VERSION } from "app/config";

const Header: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AHS PRE CALC</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta content="Albany High School: PRE CALC" property="og:title" />
      <meta content="0.1.5" property="og:site_name" />
      <meta content="Convinience for you :D" property="og:description" />
      <meta name="description" content="Convinience for you :D" />
    </Head>
  );
};

export default Header;
