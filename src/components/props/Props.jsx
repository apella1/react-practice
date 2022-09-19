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
                {props.user.name} is {props.user.age}
            </h1>

            <p>
                {props.user.text}
            </p>
        </>
        
    )
}

export default Welcome;

// such components are called function components because they are literally javascript functions