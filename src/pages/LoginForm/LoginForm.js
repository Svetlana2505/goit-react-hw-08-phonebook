import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import { selectError } from 'redux/auth/auth-selectors';
import { Alert } from '@mui/material';
import { Box, Button } from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box>
        {error === 400 && (
          <Alert variant="filled" severity="warning">
            Incorrect email or password
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="email"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            label="password"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <Button>Login</Button>
        </form>
      </Box>
    </>
  );
};
export default LoginForm;
