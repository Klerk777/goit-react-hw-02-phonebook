import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, onClickHandler }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
          <button type="button" onClick={() => onClickHandler(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClickHandler: PropTypes.func.isRequired,
};

export default ContactList;
