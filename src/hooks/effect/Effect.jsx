import React, { useState, useEffect } from 'react';

const Effect = () => {
    const [names, setNames] = useState([]);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedNameDetails, setSelectedNameDetails] = useState(null);

    useEffect(() => {
        fetch('../data/names.json')
            .then((res) => res.json())
            .then((data) => setNames(data))
    }, []);

    useEffect(() => {
        fetch('../data/${selectedName}.json')
            .then((res) => res.json())
            .then((data) => setSelectedNameDetails(data))
    }, [selectedName]);

    return (
        <div>
            {names.map(name => (
                <button onClick={() => setSelectedName(name)}>
                    {name}
                </button>
            ))}

            <div className="p-2">
                Selected Name: {selectedName}
            </div>

            <div>
                {JSON.stringify(selectedNameDetails)}
            </div>
        </div>
  )
}

export default Effect;

// useEffect performs the same operations as the classes lifecycles componentDidMount, componentDidUpdate, componentWillUnmount
// all the operations are rather unified into a single API