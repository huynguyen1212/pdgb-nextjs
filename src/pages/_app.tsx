import type { AppProps } from "next/app";

import "sweetalert2/dist/sweetalert2.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "antd/dist/reset.css";
import "../styles/global.css";

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
import Layouts from "src/containers/Layouts";
import theme from "src/styles/theme";
import { GlobalStyle } from "src/styles/global-styles";
import AOS from "aos";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import localFont from "next/font/local";
import Script from "next/script";
import ProvidersWrapper from "src/containers/Layouts/ProvidersWrapper";
import Head from "next/head";

const myFont = localFont({ src: "../../public/fonts/google/regular.ttf" });

const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 10,
  },
  col: {
    padding: 15,
  },
  container: {
    padding: 0,
    maxWidth: {
      xxl: 1440,
      xl: 1200,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 800,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2QKMV17VX0"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2QKMV17VX0');
          `,
        }}
      /> */}

      <ProvidersWrapper>
        <QueryClientProvider client={queryClient}>
          <GridThemeProvider gridTheme={gridTheme}>
            <ThemeProvider theme={theme}>
              <Head>
                <title>BATTELS</title>
                <meta name="description" content="Chiến cùng BATTELS" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <main className={myFont.className}>
                <Layouts>
                  <Component {...pageProps} />
                </Layouts>
              </main>

              <GlobalStyle />
              <BaseCSS />
            </ThemeProvider>
          </GridThemeProvider>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ProvidersWrapper>
    </>
  );
}
