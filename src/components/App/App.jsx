// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../data/initialContacts.json";
import './App.module.css';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([initialContacts]);
  return (
<div>
  <h1>Phonebook</h1>
  
  <ContactList contacts={initialContacts} />
</div>
  )
}

export default App
