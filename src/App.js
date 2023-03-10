import logo from './logo.svg';
import './App.css';
import contacts from './Contacts.js';
import './Contact.css';

function App() {
  let contactList = contacts.map( (contact, index) => {
    return (
      <tr className={`contact ${index % 2 ? "shaded" : ""}`} >
        <td className="name">{contact.first_name} {contact.last_name}</td>
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
