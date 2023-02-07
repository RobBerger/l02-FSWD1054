import logo from './logo.svg';
import './App.css';
import contacts from './Contacts.js';

function App() {
  let contact = contacts[0]
  return (
    <div className="App">
      <div>Name: {contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</div>
      <div>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      <div>Phone: {contact.phone}</div>

      <div>Total Number of Contacts: {contacts.length}</div>
    </div>
  );
}

export default App;
