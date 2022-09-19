import './content.css';

function NameList(props) { 
  const names = props.names;
  const nameItems = names.map( (name) => 
    <li key={name.toString()}>
      {name}
    </li>
  );

  return (
    <ul>
      {nameItems}
    </ul>
  )
}

const names = ['Peter', 'John', 'Paul', 'Faraday'];

// React Lists and Keys
const numbers = [1, 5, 4, 7, 8];

const listItems = numbers.map( (number) => 
  <li key={number.toString()}>
    {number}
  </li>
)

const Content = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.')
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
    </form>

    {/* rendering the items mapped through from the numbers array */}
    <ul>
      {listItems}
    </ul>

    <NameList />

    {/* passing arguments to event handlers */}
    {/* <button onClick={(e) => this.deleteColumn(id, e)}>
      Delete Column
    </button>

    <button onClick={this.deleteColumn.bind(this, id)}>
      Delete Column
    </button> */}
    </>
  )
}

export default Content

// you cannot return false to prevent default behavior in React 
// react events are synthetic events and are different from native events 
// ? passing arguments to event handlers

// * keys help React identify which items have been changed, added or removed
// keys should be given to elements inside the array to give them a stable identity 
// * elements inside a map call need a key 