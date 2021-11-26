// our-domain.com/Account
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LogIn from '@src/Components/LogIn';
import SignUp from '@src/Components/SignUp';
import { Button } from '@mui/material';
import Image from 'next/image';
import commonWords from 'strings/index';
import useStyles from '@src/Components/Accoont';


/**
 * Account page : users Login or Register to theire account
 *
 *
 * @example
 *
 * <Link href="/Account">Log In</Link>
 *
 * @see {@link https://nextjs.org/docs/api-reference/next/image} Next JS Image API
 * @see {@link https://mui.com/components/box/} Material UI Box Component
 * @see {@link https://mui.com/api/button/} Material UI Button API
 * @see {@link https://mui.com/styles/basics/} Material UI basics Styles
 */

const Account = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box className={classes.form}>
      <Image src="/Account-Logo.png" alt="Login-logo" width="150px" height="150px" />

      {open ? <SignUp /> : <LogIn />}

      <Box className={classes.formtext}>
        {open ? [commonWords.i_have_account] : [commonWords.dont_have_any_account]}
        <Button type="button" className={classes.swichButton} variant="text" onClick={handleClick}>
          {open ? [commonWords.logIn] : [commonWords.signUp]}
        </Button>
      </Box>
    </Box>
  );
};

export default Account;
