import React, {useContext} from "react";
import Toggle from "./toggle";
import { ThemeContext } from "./ThemeProvider";
 


const Header = ()=>{
    const {darkMode} = useContext(ThemeContext)
    return(
        <>
        <header className={darkMode?`header-dark`:`header-light`}>
            <div>
            <h1>Where in the World?</h1>
            </div>
            <Toggle/>
        

        </header>
       
        </>
    )
}

export default Header;