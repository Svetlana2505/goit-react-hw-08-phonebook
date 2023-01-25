import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { deleteContact } from '../../redux/contact/contacts-operations';
import {
  selectContacts,
  selectFilterName,
} from '../../redux/contact/selectors';
import { Item, Text } from './ContactList.styled';

export const ContactList = () => {
  const contact = useSelector(selectContacts);
  const filterName = useSelector(selectFilterName);
  const dispatch = useDispatch();

  return (
    <ul style={{ marginTop: '10px' }}>
      {contact
        .filter(({ name }) =>
          name.toLowerCase().includes(filterName.toLowerCase())
        )
        .map(({ name, id, number }) => {
          return (
            <Item key={id}>
              <Text>{name}: </Text>

              <Text>{number} : </Text>
              <Button
                variant="contained"
                color="error"
                size="small"
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                delete
              </Button>
            </Item>
          );
        })}
    </ul>
  );
};
