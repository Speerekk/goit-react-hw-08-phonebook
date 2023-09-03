import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { deleteContact } from '../Redux/ContactsSlice';
import styles from './ContactList.module.css';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts.items);

  if (contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <span className={styles.name}>{contact.name}:</span>
          <span className={styles.number}>{contact.number}</span>
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
