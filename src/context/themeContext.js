import React, {createContext, useState, useEffect} from 'react';

export const ThemeContext= createContext();

const ThemeContextProvider = (props)=>{

    const [theme, setTheme] = useState(true);

    const toggleTheme =() => {
        setTheme(!theme);
        if(theme===true) {
            document.documentElement.style.setProperty('--ecriture', '#262626');
            document.documentElement.style.setProperty('--background', '#f1f5f1');
            document.documentElement.style.setProperty('--sectionBackground', '#fff');
            document.documentElement.style.setProperty('--borderColor', '#dedede');
            document.documentElement.style.setProperty('--ThTable', '#d6ead9');
            document.documentElement.style.setProperty('--color1', '#3a7942');
            document.documentElement.style.setProperty('--btnColor1', '#fcf1e9');
            document.documentElement.style.setProperty('--btnColor2', '#dee8df');
            document.documentElement.style.setProperty('--btnColor3', '#d4e2d6');
            document.documentElement.style.setProperty('--pColor', '#848283');
            document.documentElement.style.setProperty('--Color2', '#7dae83');

            let btn1 = document.querySelectorAll('.dark');
            for ( var i = 0; i < btn1.length; i++) {
                btn1[i].style.display="none";
            }
            let btn2 = document.querySelectorAll('.light');
            for ( var i = 0; i < btn2.length; i++) {
                btn2[i].style.display="inline-block";
            }
        }
        
        else if (theme===false){
            document.documentElement.style.setProperty('--ecriture', '#fff');
            document.documentElement.style.setProperty('--background', '#202948');
            document.documentElement.style.setProperty('--sectionBackground', '#2c365e');
            document.documentElement.style.setProperty('--borderColor', '#585f76');
            document.documentElement.style.setProperty('--ThTable', '#141b32');
            document.documentElement.style.setProperty('--color1', '#fff');
            document.documentElement.style.setProperty('--btnColor1', '#463842');
            document.documentElement.style.setProperty('--btnColor2', '#253947');
            document.documentElement.style.setProperty('--btnColor3', '#2d3e4e');
            document.documentElement.style.setProperty('--pColor', '#a2a7b8');
            document.documentElement.style.setProperty('--Color2', '#fff');


            let btn1 = document.querySelectorAll('.dark');
            for ( var i = 0; i < btn1.length; i++) {
                btn1[i].style.display="inline-block"; 
            }
            let btn2 = document.querySelectorAll('.light');
            for ( var i = 0; i < btn2.length; i++) {
                btn2[i].style.display="none";
            }
        }


    }
    useEffect(() => {
        console.log('theme', theme)
    })
        


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;