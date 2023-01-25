import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from '../../redux/contact/selectors';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import { addContact } from 'redux/contact/contacts-operations.js';
import { Box, Button, Form } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const checkContacts = contact.some(contact => contact.name === name);

    if (checkContacts) {
      setChecked(true);
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );
    setChecked(false);
    setName('');
    setNumber('');
  };

  return (
    <Box>
      {checked && (
        <Alert variant="filled" severity="warning">
          Is already in contacts
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
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
          label="number"
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
        />

        <Button>Add contact</Button>
      </Form>
    </Box>
  );
}
