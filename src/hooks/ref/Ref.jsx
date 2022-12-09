import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

const Ref = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const [names, setNames] = useState([]);

    // * uncontrolled inputs
    const onAddName = () => {
        setNames([...names, inputRef.current.value]);
        inputRef.current.value = '';
    }

  return (
    <div>
        <ul>
            {names.map((name, id) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
        <input type="text" ref={inputRef}/>
        <button onClick={onAddName}>Add Name</button>
    </div>
  )
}

export default Ref