import { useReducer } from "react";

function UserForm () {
	const [state, dispatch] = useReducer((state, action) => {
		return { ...state, ...action }
	}, {
    first: '',
    last: ''
  })

  return (
    <div>
      <input 
		type="text" 
		value={state.first}
		onChange={e => dispatch({ first: e.target.value })}
	  />
      <input 
		type="text" 
		value={state.last}
		onChange={e => dispatch({ last: e.target.value })}
	  />

	  <div>First Name: {state.first}</div>
	  <div>Last Name: {state.last}</div>
    </div>
  )
}

const NativeReducer = () => {
	const [state, dispatch] = useReducer((state, action) => {
		switch(action.type) {
			case 'SET_NAME':
				return { ...state, name: action.payload }
			case 'ADD_NAME':
				return { ...state, names: [state.names, state.name], name: '' }
		}
	}, {
		names: [],
		name: ''
	})

	return (
		<div>
			<UserForm />
			<div>
				{state.names.map((name, index) => (
					<div key={index}>{name}</div>
				))}
			</div>
			<input 
				type='text'
				value={state.name}
				onChange={ e => dispatch({type: 'SET_NAME', payload: e.target.value}) }
			/>

			<button onClick={e => dispatch({type: 'ADD_NAME'})}>Add Name</button>
		</div>
	)
}

export default NativeReducer;