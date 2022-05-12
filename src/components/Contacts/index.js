import {useState, useEffect} from 'react'

import './styles.css';

import List from './List';
import Form from "./Form";


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Batuhan',
      phone_number: "123123",
    },
    {
      fullname: 'Sema',
      phone_number: "1233123",
    },
    {
      fullname: 'Nur',
      phone_number: "1233123",
    }

  ]);

  useEffect(() => {
    console.log(contacts);
  },[contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List constacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;