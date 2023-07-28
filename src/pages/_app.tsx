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
        <meta
          content="Andreani, almacenamiento, tecnologia, empresa, correo, distribucion, logistica"
          name="keywords"
        />
        <meta
          content="Esta plataforma logística, ubicada en Tigre, fue diseñada para el almacenamiento y distribución de mercaderías de todo tipo de negocios. ¡Apta inversiones!​"
          name="description"
        />
        <title>Pymes</title>
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <meta content="Pymes" name="Andreani Pymes" />
        <link href="/favicon.png" rel="icon" type="image/x-icon" />
      </Head>
      <Script id="googel-tag-manager" strategy="afterInteractive">
        {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
            
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-MWG9FN4");
          `}
      </Script>
      <Script src="/__ENV.js" strategy="beforeInteractive" />
      
            <Main>
              
                  <Component {...pageProps} />
            </Main>
    </CacheProvider>
  );
};

export default App;
