import './content.css';

import React, { useContext } from 'react';

const themes = { 
    light: { 
        foreground: 'white',
        background: 'blue'
    }, 
    dark: { 
        foreground: 'white',
        background: 'black'
    }
}

const ThemeContext = React.createContext(themes.light);

function ThemeApp() { 
    return (
        <ThemeContext.Provider value={themes.dark}>
            <ToolBar />
        </ThemeContext.Provider>
    )
}

function ToolBar(props) { 
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() { 
    const theme = useContext(ThemeContext);

    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            Styled by theme context!
        </button>
    )
}

export default ThemeApp

// a component calling useContext will always re-render when the context value changes.
// argument to useContext must be the context object itself