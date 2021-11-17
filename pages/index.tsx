import { Fragment } from "react";
import Link from "next/link";

const Home = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href='/Account'>Log In</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Home;