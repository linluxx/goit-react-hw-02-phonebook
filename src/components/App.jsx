import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, ContactsTitle } from './App.styled';
import { nanoid } from 'nanoid';
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

  addContact = contact => {
    contact.id = nanoid();
    // this.state.contacts.map(item =>
    //   {
    //     if (item.name === contact.name) {
    //       alert(`${contact.name} is already in contacts`);
    //     }
    //   }
    // );
    const names = this.state.contacts.map(item => item.name);
    if (names.includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
    this.filterContacts();
  };
  Title;
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filtered = this.filterContacts();
    return (
      <Container onClick={evt => {}}>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={this.state.filter} onFilter={this.onFilter} />
        <ContactList filtered={filtered} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
