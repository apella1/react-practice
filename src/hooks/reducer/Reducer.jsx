import './reducer.css';

import React, { useReducer } from 'react';

const initialState = { count: 0 }; //initializing the state and passing it as a second argument within the reducer function 

function reducer (state, action) {
    switch(action.type) { 
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error();
    }
}

function Counter() { 
    const [state, dispatch] = useReducer(reducer, initialState); // the {count: 0} declaration can also be passed directly as a second argument

    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({type: 'decrement'})}
            >
                -
            </button>

            <button
                onClick={() => dispatch({type: 'increment'})}
            >
                +
            </button>
        </>
    )
}

export default Counter

// React guarantees that the dispatch function identity is stable and won't change on re-renders
// useReducer states must be initialized 