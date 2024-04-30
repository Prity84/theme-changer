import React,{ useContext} from "react";
import ThemeContext from "../context/Themecontext";

const ThemeToggler = () =>{
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <div onClick={ ()=>{
            setThemeMode(themeMode === "light" ? "dark" : "light");
        }}>
           <span>{themeMode === "light" ? "Turn off" : "Light on"}</span> 
        </div>
    )
}

export default ThemeToggler;