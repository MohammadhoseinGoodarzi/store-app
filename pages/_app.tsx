// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
