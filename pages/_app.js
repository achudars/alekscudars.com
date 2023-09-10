import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>A.Č.</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
