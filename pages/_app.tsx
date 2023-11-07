import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import ShowSnackbar from '../components/Snackbar';
import * as gtag from '../lib/gtag';

const excludedPaths = ['/lifetime', '/pricing', '/affiliates'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathname = route.pathname;
  const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
        <>
          <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <Script
            strategy="afterInteractive"
            id="matomo"
            dangerouslySetInnerHTML={{
              __html: `
            var _paq = (window._paq = window._paq || []);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function () {
              var u = 'https://inxt.matomo.cloud/';
              _paq.push(['setTrackerUrl', u + 'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d = document,
                g = d.createElement('script'),
                s = d.getElementsByTagName('script')[0];
              g.async = true;
              g.defer=true;
              g.src = u + 'matomo.js';
              s.parentNode.insertBefore(g, s);
            })();
            `,
            }}
          />
        </>

        <Component {...pageProps} />
        <ShowSnackbar />
        <Intercom />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
