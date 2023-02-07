import logo from './logo.svg';
import './App.css';

function App() {
    
  let name = 'Robert';
  let dogs = ['Fido', 'Buffy', 'Rex'];
  
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <ul>
        {
          dogs.map(dog => (<li>{dog}</li>))
        }
      </ul>
    </div>
  );
}

export default App;
