import React from 'react';
import Link from 'next/link';

/**
 * Home page : 1 link for Account page
 *
 *
 * @example
 * <Component {...pageProps} />
 *
 * @see {@link https://nextjs.org/docs/api-reference/next/link} Next JS Link API
 */


const Home = () => {
  return (
    <div>
      <Link href="/Account">Log In</Link>
    </div>
  );
};

export default Home;
