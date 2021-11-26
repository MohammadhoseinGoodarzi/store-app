import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    boxShadow: '3',
    borderRadius: '10px',
    padding: '30px 10px',
    backgroundColor: '#fff',
    zIndex: '1',
  },
  button: {
    background: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 36%, rgba(0,212,255,1) 100%);',
    borderRadius: '30px !important',
    margin: '10px 0 !important',
    zIndex: '2',
    fontFamily:'vazir !important',
  },
  formtext: {
    color: '#000000',
    display: 'flex',
    fontSize: '13px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    direction: 'rtl',
  },
  login: {
    zIndex: '2',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
  },
  signin: {
    zIndex: '2',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
  },
  swichButton:{
    fontFamily:'vazir !important',
  },
  root:{
    '& .MuiFormLabel-root':{
      fontFamily:'vazir'
    },
    '& .MuiInputLabel-formControl':{
      top:'0',
      right:'0 !important',
      left:'auto',
    },
    '& .MuiInputLabel-outlined':{
      transform:'translate(-14px,20px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink':{
      transform:'translate(0,-8px) scale(0.75)'
    },
    '& .PrivateNotchedOutline-legendLabelled-3':{
      textAlign:'right'
    }
  }
});

export default useStyles;
