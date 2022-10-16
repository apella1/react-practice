import React, { useState, useEffect } from 'react';

function NumberCounter () { 
    const [count, setCount] = useState(0);

    // similar to componentDidMount and componentDidUpdate

    useEffect( () => { 
        document.title = `You clicked ${count} times`
    })

    return (
        <section className="number-count">
            <p>You've clicked the button { count } times.</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </section>
    )
}

export default NumberCounter;

// the first value represents the state that we're in. We call the second part of the defined constants when an action such as a click happens 
// useState is called inside a functional component to manage the local state
// react preserves the states between re-renders 
// in useState, the state doesn't have to be an object although it can be made so if desired 