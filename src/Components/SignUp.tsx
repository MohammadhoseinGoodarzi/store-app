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
 * A Signup(register) form that get username , password , confirm password and email (data) from user and return that data in cnsole log.
 *
 * @param {string} username its a name that user choose it for him/her self to use it in website
 * @param {string} password it is our user password to login in his/her account
 * @param {string} repassword it is the exact same as password, that user fill it to confirm his/her password
 * @param {string} email it is our user email for register
 *
 * @example
 * const data = [
 *      { user:  username: 'Mohammad', password: '12345678', repassword: '12345678', email: 'mohammad@gmail.com' },
 *      { user:  username: 'emili77', password: 'abcdefgh', repassword: 'abcdefgh', email: 'emili@email.com' }
 * ];
 * const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
 *    console.log(data);
 * };
 *
 * <SignUp />
 *
 * @see {@link https://react-hook-form.com/api/usecontroller/controller/} React Hook Form Controller API
 * @see {@link https://mui.com/api/text-field/} Material UI Textfield API
 * @see {@link https://mui.com/components/box/} Material UI Box Component
 * @see {@link https://mui.com/api/button/} Material UI Button API
 */

interface IFormInputs {
  username: string;
  password: string;
  repassword: string;
  email: string;
}

const schema = yup.object().shape({
  username: yup.string().required().min(5).max(64),
  password: yup.string().required().max(64).min(8),
  repassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required()
    .max(64)
    .min(8),
  email: yup.string().email().required(),
});

const SignUp = () => {
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
    <Box className={classes.signin}>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label={commonWords.username}
              className={classes.root}
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
              className={classes.root}
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="repassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label={commonWords.confirmPassword}
              className={classes.root}
              variant="outlined"
              fullWidth
              error={!!errors.repassword}
              helperText={errors.repassword ? errors.repassword?.message : ''}
            />
          )}
        />
        <br />
        <br />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label={commonWords.email}
              className={classes.root}
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
            />
          )}
        />
        <Button fullWidth className={classes.button} type="submit" variant="contained">
          {commonWords.signUp}
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
