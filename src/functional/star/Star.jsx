import React, { useState } from 'react';
import './star.css';
import { FaStar } from 'react-icons/fa';

const Star = ({selected = false}) => { 
    <FaStar color={selected ? 'red' : 'grey'} />
}

const createArray = length => [...Array(length)];

export default function StarRating ({totalStars = 10}) {
    const [selectedStars] = useState(3);
    return (
        <>
        {createArray(totalStars).map( (n, i) => (
            <Star key={i} selected={selectedStars > i}/>
        ))}

        <p>
            {selectedStars} of {totalStars}
        </p>
        </>
    )
}

// can we pass in objects as parameters? 