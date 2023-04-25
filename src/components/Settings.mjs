import React from 'react'
import { useEffect } from 'react';
import tinycolor from 'tinycolor2';

export default function Settings(props) {
    const handleOnCLick = () => {
        props.setShowColorPalette(true);
    }

    useEffect(() => {

        if (props.isDarkModeEnable) {

            document.querySelector('.min-vh-100').style.backgroundColor = props.theme.backgroundColor;
            document.querySelector('.min-vh-100').style.color = props.theme.color;

            document.querySelector('.container').style.backgroundColor = tinycolor(props.theme.backgroundColor).darken(3).toString();
            document.querySelector('.container').style.color = props.theme.color;

        }
        else{

            document.querySelector('.min-vh-100').style.backgroundColor = "white";
            document.querySelector('.min-vh-100').style.color = "black";

            document.querySelector('.container').style.backgroundColor = "white";
            document.querySelector('.container').style.color = "black";
        
        }

        let list = document.getElementById('colorsList');
        list.innerHTML = ''
        props.listOfColors.forEach(color => {

            let listItem = document.createElement('li');

            let button = document.createElement('button')
            button.style.minWidth = "100px";
            button.style.height = "40px";
            button.style.backgroundColor = color;
            button.style.border = "2px solid white";
            button.style.borderRadius = "20px";
            button.style.cursor = "grab"
            
            button.addEventListener('click',()=>{
            props.setTheme({color:"white",backgroundColor:color});
                
            });

            listItem.appendChild(button);

            list.appendChild(listItem);
        });

    })


    return (
        <div >
            <div className="min-vh-100 position-relative">

                <div className="container mt-4 pt-2 position-absolute top-0 end-0 start-0 bottom-0" style={{zIndex:1}}>
                    <h1>
                        Settings
                    </h1>

                    <hr />

                    <div className="selectDarkTheme flex align-item-center mt-4 justify-content-center" style={{ gap: "10px" }}>
                        <h3>Select Dark Mode :</h3> 
                    </div>

                    <ul id="colorsList" className="darkThemes flex flex-wrap align-item-center mt-3 gap-3 justify-content-center list-unstyled">
                    </ul>


                    <div className='addNewThemeBtnContainer text-center'>
                        <span onClick={handleOnCLick} className="material-symbols-outlined" style={{ fontSize: "40px",cursor:"pointer" }}>
                            add
                        </span>
                    </div>
                    
                    <hr />
                </div>

            </div>
        </div>
    )
}
