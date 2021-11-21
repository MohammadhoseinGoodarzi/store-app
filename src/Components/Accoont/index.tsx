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
  gradiabtbg: {
    background: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 36%, rgba(0,212,255,1) 100%);',
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
});

export default useStyles;
