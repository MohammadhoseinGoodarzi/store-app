import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import commonWords from 'strings/index';
import useStyles from '@src/Components/Accoont';

/**
 * A login form that get username and password (data) from user and return that data in cnsole log.
 *
 * @param {string} username its a name that user choose it for him/her self to use it in website
 * @param {string} password it is our user password to login in his/her account
 *
 * @example
 * const data = [
 *      { user:  username: 'Mohammad', password: '12345678' },
 *      { user:  username: 'emili77', password: 'abcdefgh' }
 * ];
 * const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
 *    console.log(data);
 * };
 *
 * <LogIn />
 *
 * @see {@link https://react-hook-form.com/api/usecontroller/controller/} React Hook Form Controller API
 * @see {@link https://mui.com/api/text-field/} Material UI Textfield API
 * @see {@link https://mui.com/components/box/} Material UI Box Component
 * @see {@link https://mui.com/api/button/} Material UI Button API
 * @see {@link https://mui.com/styles/basics/} Material UI basics Styles
 */

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
              className={classes.root}
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
              className={classes.root}
              label={commonWords.password}
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
            />
          )}
        />

        <Button className={classes.button} fullWidth  type="submit" variant="contained">
          {commonWords.logIn}
        </Button>
      </form>
    </Box>
  );
};

export default LogIn;
