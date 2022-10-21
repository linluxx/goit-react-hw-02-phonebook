import {
  ContactName,
  ContactNumber,
  ContactsItem,
  ContactsList,
  DeleteButton,
} from './ContactList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ filtered, onDeleteContact }) => {
  return (
    <ContactsList>
      {filtered.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactName> {name}</ContactName>
          <ContactNumber> {number}</ContactNumber>
          <DeleteButton
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </DeleteButton>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
