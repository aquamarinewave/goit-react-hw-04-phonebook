import { Component } from 'react';
import { Container } from './App.styled';

import Section from './Section/Section';
import ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  }

  formSubmitHandler = newContact => {
    const normName = newContact.name.toLowerCase();
    this.state.contacts.find(({ name }) => name.toLowerCase() === normName)
      ? alert(newContact.name + "is already in contscts")
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  deleteRecipe = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const localContacts = JSON.parse(contacts);
    if (localContacts) {
      this.setState({
        contacts: localContacts,
      })
    }
   
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm addNewContact={this.formSubmitHandler} />
        </Section>
        <Filter value={this.state.filter} onChange={this.changeFilter} /> 
        <Section title="Contacts">
          <ContactList options={visibleContacts} onDelete={this.deleteRecipe} />
        </Section>
      </Container>
  );
  }
  
};


export default App;