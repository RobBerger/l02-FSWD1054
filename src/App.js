import logo from './logo.svg';
import './App.css';
import contacts from './Contacts.js';

function App() {
  let contactList = contacts.map( (contact) => {
    return (
      <tr>
        <td>{contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</td>
        <td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
        <td>{contact.phone}</td>
      </tr>
  )})

  return (
    <div className="App">
      <table>
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
        ? <div >Total Number of Contacts: {contacts.length}</div>
        : <div>Sorry, no contacts found :(</div>
      }
    </div>
  )
}

export default App;
