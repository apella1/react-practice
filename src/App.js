import './App.css';
import { Blur, OuterClick } from './advanced';
import { Calculator, Greeting, LoginControl, NameForm, Welcome } from './components';
import { NumberCounter, ThemeApp } from './hooks';
import { StarRating } from './functional'; 
import { FormValidation } from './mini';
import { PostForm, Posts } from './redux';

function App() {
  return (
    <div className="App">
      <PostForm />
      <Posts />
      <Calculator />
    </div>
  );
}

export default App;

// passing in the props values within the components. 
// A component can be rendered more than once