import React, { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';

function SortedList({ list, sortFunc}) {
    console.log('Sorted List Render');

    const sortedList = useMemo(() => {
        console.log('Running sort');
        return [...list].sort(sortFunc);
    }, [list, sortFunc]);

    return (
        <div className='bg-red-300'>
            <p>List: {sortedList.join(', ')}</p>
        </div>
    )
}

const Callback = () => {
    const [names] = useState(['John', 'Paul', 'George', 'Ringo']);
    const[cars] = useState(['Ford', 'Chevy', 'Toyota', 'Honda']);
    const sortedNames = useMemo(() => [...names].sort(), [names]);
    const [count, setCount] = useState(0)
    const sortFunc = useCallback((a, b) => a.localCompare(b), []);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
        <p>Names: {names.join(', ')}</p>
        <SortedList list={names} sortFunc={sortFunc} />
        <SortedList list={cars}  sortFunc={sortFunc} />
        <p>Sorted Names: {sortedNames.join(', ')}</p>
    </div>
  )
}

export default Callback;