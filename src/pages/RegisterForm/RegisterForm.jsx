import { TextField } from '@mui/material';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Button, Box } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="name"
          variant="outlined"
          size="small"
          fullWidth
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
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

        <Button>Sign Up</Button>
      </form>
    </Box>
  );
};
