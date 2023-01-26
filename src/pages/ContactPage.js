import ContactForm from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contact/contacts-operations';
import { FcBusinesswoman } from 'react-icons/fc';
import { selectError, selectIsLoading } from '../redux/contact/selectors';

const ContactPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ width: '500px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ color: 'white', marginBottom: '10px' }}>
        Phonebook <FcBusinesswoman />
      </h1>
      <ContactForm />

      <h2 style={{ color: 'white', marginBottom: '10px' }}>Contacts</h2>

      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
    </div>
  );
};
export default ContactPage;
