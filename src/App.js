import { Blur, OuterClick } from './advanced';
import './App.css';
import { Calculator, Greeting, LoginControl, NameForm } from './components';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Greeting name='Pedro'/>
      <LoginControl />
      <NameForm />
      <OuterClick />
      <Blur />
    </div>
  );
}

export default App;

// passing in the props values within the components. 
// A component can be rendered more than once