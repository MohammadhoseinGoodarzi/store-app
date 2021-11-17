import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';

interface IFormInputs {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required().min(5).max(64),
  password: yup.string().required().max(64).min(8),
});

const LogIn = () => {
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
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="User Name"
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
            label="Password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
          />
        )}
      />
      
      <Button fullWidth sx={{ marginBottom: '10px' }} type="submit" variant="contained">
        Log In
      </Button>
    </form>
  );
};

export default LogIn;
