import './keys.css';

const posts = [
    {
        id: 1,
        title: 'World Economy', 
        content: 'The world is made of several economies that work in tandem to make the economy stable'
    }, 
    {
        id: 2, 
        title: 'Mastery',
        content: 'The evolution of our brain for over thousands of years led us to this moment. To be the Masters we were meant to be'
    }
];

function Blog(props) { 
    const sidebar = (
        <ul>
            {props.posts.map( (post) => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = (
        <ul>
            {props.posts.map( (post) => 
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            )}
        </ul>
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export default Blog 

// * keys only have to be unique among siblings. They don't need to be globally unique
// keys serve as a hint to react but they don't get passed to the components
// if the map body is too nested, it might be a good time to extract a component