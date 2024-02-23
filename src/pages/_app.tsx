import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import type { AppProps } from "next/app";
import Script from "next/script";
import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/emotionCache";
import "./global.css";

const Main = dynamic(() => import("../layout/Main"), { ssr: false });


interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();
const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.remove();
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <meta charSet="utf-8" />
        <title>PROMIEDO KENTIMBIANO</title>
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <link href="/favicon.png" rel="icon" type="image/x-icon" />
      </Head>
      <Script src="/__ENV.js" strategy="beforeInteractive" />
      
            <Main>
              
                  <Component {...pageProps} />
            </Main>
    </CacheProvider>
  );
};

export default App;
