import React from 'react'
import { useEffect } from 'react';


export default function Settings(props) {
    const handleOnCLick = () => {
        props.setShowColorPalette(true);
    }

    useEffect(() => {
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
            <div className="min-vh-100">

                <div className="container pt-4">
                    <h1>
                        Settings
                    </h1>

                    <hr />

                    <div className="selectDarkTheme flex align-item-center mt-4 justify-content-center" style={{ gap: "10px" }}>
                        <h3>Selected Theme :</h3> <div style={{ minWidth: "100px", minHeight: "40px", backgroundColor: "#031633", border: "2px solid white", borderRadius: "20px" }}></div>
                    </div>

                    <ul id="colorsList" className="darkThemes flex flex-wrap align-item-center mt-3 gap-3 justify-content-center list-unstyled">

                    </ul>

                    <div className='addNewThemeBtnContainer text-center'>
                        <span onClick={handleOnCLick} className="material-symbols-outlined" style={{ fontSize: "40px",cursor:"pointer" }}>
                            add
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
