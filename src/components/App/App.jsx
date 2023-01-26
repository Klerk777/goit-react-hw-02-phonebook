import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.scss';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      alert('This number already exists');
      return;
    }

    const contact = {
      id: nanoid(7),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={styles.appCpntainer}>
        <Section title="Phonebook" level="1">
          <ContactForm onSubmit={this.addNewContact} />
        </Section>
        <Section title="Contacts" level="2">
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onClickHandler={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
