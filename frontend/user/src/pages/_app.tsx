import type { AppProps } from 'next/app';
import '@styles/Home.module.css';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
