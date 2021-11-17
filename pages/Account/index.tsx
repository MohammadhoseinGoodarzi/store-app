// our-domain.com/Account
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LogIn from '@src/Components/LogIn';
import SignUp from '@src/Components/SignUp';
import { Button } from '@mui/material';

const Account = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        border: '1px solid blue',
        borderRadius: '10px',
        padding: '20px',
      }}
    >
      <img src="./public/Acoount-Logo.png" />

      {open ? <SignUp /> : <LogIn />}

      <Button fullWidth type="button" variant="outlined" onClick={handleClick}>
        {open ? 'Log In' : 'Sign Up'}
      </Button>
    </Box>
  );
};

export default Account;
