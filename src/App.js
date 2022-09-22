import './App.css';
import { Blog, Calculator, Greeting, LoginControl, NameForm } from './components';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Greeting name='Pedro'/>
      <LoginControl />
      <NameForm />
      <Blog />
    </div>
  );
}

export default App;

// passing in the props values within the components. 
// A component can be rendered more than once