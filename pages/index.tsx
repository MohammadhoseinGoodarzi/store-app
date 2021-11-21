import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Link href="/Account">Log In</Link>
    </div>
  );
};

export default Home;
