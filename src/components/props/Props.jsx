import './props.css';

function Welcome (props) { 

    const user = {
        name: 'Peter Parker',
        age: 34,
        hobbies: ['basketball', 'chess', 'bike riding', 'swimming'], 
        text: 'Software developer'
    }

    return (
        <>
            <h1>
                {user.name} is {user.age}
            </h1>

            <p>
                {user.text}
            </p>

            <p>
                {user.name} loves {user.hobbies[1]} compared to other hobbies.
            </p>
        </>
        
    )
}

export default Welcome;

// such components are called function components because they are literally javascript functions