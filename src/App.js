import './App.css';
import { Blur, OuterClick } from './advanced';
import { Calculator, Greeting, LoginControl, NameForm, Welcome } from './components';
import { NumberCounter } from './hooks';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Greeting name='Pedro'/>
      <LoginControl />
      <NameForm />
      <OuterClick />
      <Blur />
      <NumberCounter />
      <Welcome />
    </div>
  );
}

export default App;

// passing in the props values within the components. 
// A component can be rendered more than once