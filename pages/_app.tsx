// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { AppProps } from 'next/app';
import Box from '@mui/material/Box';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent:'center',
        justifyContent: 'center',
      }}
    >
      <Component {...pageProps} />
    </Box>
  );
};

export default MyApp;
