import '@styles/globals.css';
import { LivecycleSdk } from '@livecycle/sdk';
import { useEffect } from 'react';

function Application({ Component, pageProps }) {
  useEffect(() => {
    LivecycleSdk.init();
  });
  return <Component {...pageProps} />;
}

export default Application;
