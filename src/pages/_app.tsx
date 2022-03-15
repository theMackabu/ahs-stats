import { useEffect } from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider, QueryClient } from "react-query";

import Header from "components/Header";
import Layout from "components/Layout";

import "src/styles/theme.css";
import "public/manifest.json";
import "public/icon-225.png";

const queryClient = new QueryClient();
const siteTitle = `PRECALC`;

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/serviceWorker.js?6bad1cb478cb", {
          scope: "/",
        })
        .then(
          function (registration) {
            // Registration was successful
            console.log("👍", "serviceWorker", "registered", registration.scope);
          },
          function (err) {
            // registration failed :(
            console.log("👎", "serviceWorker", "failed", err);
          }
        );
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <Header />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
