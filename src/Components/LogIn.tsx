import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import commonWords from 'strings/index';
import useStyles from '@src/Components/Accoont';

interface IFormInputs {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required().min(5).max(64),
  password: yup.string().required().max(64).min(8),
});

const LogIn = () => {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <Box className={classes.login}>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label={commonWords.username}
              variant="outlined"
              fullWidth
              error={!!errors.username}
              helperText={errors.username ? errors.username?.message : ''}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label={commonWords.password}
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
            />
          )}
        />

        <Button
          fullWidth
          className={classes.gradiabtbg}
          sx={{ marginBottom: '10px', marginTop: '10px', zIndex: '2' }}
          type="submit"
          variant="contained"
        >
          {commonWords.logIn}
        </Button>
      </form>
    </Box>
  );
};

export default LogIn;
