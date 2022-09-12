import React from 'react'
import { useState } from 'react'

function Theme() {
    const ThemeStyleDark = {
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid white',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        width: '100px',
        textAlign: 'center',
        cursor: 'pointer'
    }
    const ThemeStyleLight = {
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        width: '100px',
        textAlign: 'center',
        cursor: 'pointer'
    }

    const ThemeStyleBackgroundDark = {
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid white',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        width: '600px',
        textAlign: 'center',
        cursor: 'pointer'
    }
    const ThemeStyleBackgroundLight = {
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        width: '600px',
        textAlign: 'center',
        cursor: 'pointer'
    }


    const [theme, setTheme] = useState('light')


    return (
    <div className='flex items-center flex-col'>
  <div
    className=""
    style={
      theme === "light" ? ThemeStyleBackgroundLight : ThemeStyleBackgroundDark
    }
  >
    <div style={theme === "dark" ? ThemeStyleDark : ThemeStyleLight}>
      The current theme is set to {theme}
    </div>
    <div className=" flex justify-center">
      <button
        style={theme === "light" ? ThemeStyleDark : ThemeStyleLight}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        style={theme === "light" ? ThemeStyleLight : ThemeStyleDark}
        onClick={() => setTheme("light")}
      >
        Light
      </button>
    </div>
            </div>
        </div>
);
}

export default Theme