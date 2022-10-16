// import React from 'react';
// import './condition.css';
// import { FaArrowAltCircleDown } from 'react-icons/fa';

// class Condition extends React.Component { 
//     constructor({title, text}) { 
//         super({title, text});

//         this.state = '';
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() { 
//         this.setState({text})
//     }

//     render() { 
//         return (
//             <div className='condition'>
//                 <h4>{this.title}</h4>
//                 <p style={{color: 'white'}}>{this.text}</p>
//                 <div className="condition__more">
//                     <FaArrowAltCircleDown 
//                         color='var(--color-btn)' 
//                         style={{background: 'white', width: '10%', cursor: 'pointer'}}
//                         onClick={this.handleClick}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Condition;