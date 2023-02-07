import logo from './logo.svg';
import './App.css';
import contacts from './Contacts.js';

function App() {
  let contactList = contacts.map( (contact) => {
    return (
      <tr className="contact">
        <td className="name">{contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</td>
        <td className="email"><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
        <td className="phone">{contact.phone}</td>
      </tr>
  )})

  return (
    <div className="App">
      <table className="contacts">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contactList}
        </tbody>
      </table>
      { contacts.length
        ? <div className="contactSummary">Total Number of Contacts: {contacts.length}</div>
        : <div>Sorry, no contacts found :(</div>
      }
    </div>
  )
}

export default App;
