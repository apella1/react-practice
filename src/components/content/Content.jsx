import './content.css';

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