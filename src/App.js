import './App.css';
import { Content, Header, Greeting, Welcome, UseEffect, Clock } from './components';

function App() {
  return (
    <div className="App">
      <Clock />
      <Header />
      <Content />
      <Welcome />
      <Greeting name='Leonardo da Vinci'/>
      <UseEffect />
    </div>
  );
}

export default App;

// passing in the props values within the components. 
// A component can be rendered more than once