import './map.css';

// embedding map in jsx

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

const ListItem = () => { 
    return (
        <>
            <p>
                How do we display the mapped numbers within this list item?
            </p>
        </>
    )
}

function Numbers(props) { 
    const numbers = props.numbers;
    const listItems = numbers.map( (number) => 
        <ListItem 
            key={number.toString()}
            value={number}
        />
    );

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default Numbers


// jsx allows the embedding of any expression so we can inline the map method as below 

/**
 *  function Numbers(props) { 
 *      const numbers = props.numbers;
 * 
 *      return (
 *          {numbers.map( (number) => 
 *               <ListItem 
 *                  key={number.toString()}
 *                  value={number}
 *                />
 *             )}
 *       )
 * }
 */