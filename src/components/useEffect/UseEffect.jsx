import './useEffect.css';
import React, {useState, useEffect} from 'react';

const UseEffect = () => {
    const [game, setGame] = useState('Select a Game');

    useEffect(() => {
        console.log('Hello')
    }, )

  return (
    <>
    <div>
        <button onClick={ () => setGame('Football')}>Football</button>
        <button onClick={ () => setGame('Hockey')}>Hockey</button>
        <button onClick={ () => setGame('Basketball')}>Basketball</button>
        <button onClick={ () => setGame('Rugby')}>Rugby</button>
    </div>
    
    <h1>{game}</h1>
    </>
  )
}

export default UseEffect

//* the useEffect hook runs every time the state of the application changes, i.e whenever the applications rerenders