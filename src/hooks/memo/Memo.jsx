import React, { useState } from 'react'
import { useMemo } from 'react';
import './memo.css'

const Memo = () => {
    const [numbers] = useState([10, 15, 20, 25]);

    let total = useMemo(() => numbers.reduce((cv, acc) => cv + acc, 0), [numbers]);

    const [names] = useState(['Saka', 'Jude', 'Phil', 'Mount'])

    const sortedNames = useMemo(() => [...names].sort(), [names]);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const countTotal = count1 + count2;

  return (
    <div className='memo'>
        <p>Total: {total}</p>
        <p>Names: {names.join(', ')}</p>
        <p>SortedNames: {sortedNames.join(', ')}</p>
        <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
        <p>Count Total: {countTotal}</p>
    </div>
  )
}

export default Memo