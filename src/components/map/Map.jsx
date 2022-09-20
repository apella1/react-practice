import './map.css';

// embedding map in jsx

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

const ListItem = () => { 
    return (
        <>
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