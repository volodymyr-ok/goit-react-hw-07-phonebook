import { ContactItem } from '../ContactItem/ContactItem';
import { StyledUL } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contactsOperations';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  const filteredContacts = () => {
    if (contacts?.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      );
    }
  };

  return (
    <>
      <StyledUL>
        {filteredContacts()?.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </StyledUL>
    </>
  );
};
