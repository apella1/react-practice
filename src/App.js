import './App.css';
import { Blur, OuterClick } from './advanced';
import { Calculator, Greeting, LoginControl, NameForm, Welcome } from './components';
import { NumberCounter, ThemeApp } from './hooks';
import { StarRating } from './functional'; 
import { FormValidation } from './mini';

function App() {
  return (
    <div className="App">
      <NumberCounter />
    </div>
  );
}

export default App;

// passing in the props values within the components. 
// A component can be rendered more than once