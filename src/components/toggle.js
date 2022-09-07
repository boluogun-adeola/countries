import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";
import {FaMoon} from 'react-icons/fa'
 


const Toggle =()=>{
  
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);
    const changeTheme = ()=>{
        toggleDarkMode();
    }
    return(
        <>
        <button onClick={changeTheme} className={darkMode?`toggle-btn toggle-btn-dark`:'toggle-btn toggle-btn-light'}>
            {darkMode ?<p><FaMoon/> Dark Mode</p>  : <p><FaMoon/> Light Mode</p>}
        </button>

        </>

    )
}

export default Toggle;