import React from 'react'
import DOMPurify from 'dompurify';
export default function TextSearchWindow(prop) {


    if (prop.showTextSearchWindow) {

        let searchText = prop.searchBoxText;
        let regex;


        if(prop.selectedCheckBox === 'flexRadioDefault1'){
            regex = new RegExp(searchText, 'gi');
        }
        else if(prop.selectedCheckBox === 'flexRadioDefault2'){
            regex = new RegExp(`\\b${searchText}\\b`, 'gi');
        }
        else if(prop.selectedCheckBox === 'flexRadioDefault3'){
            regex = new RegExp(`\\b${searchText}\\b`);
        }

        const handleOnReplace = () =>{
            
            let replacingText = document.getElementById('replaceInput').value;

            if (replacingText.length > 0) {
                
                prop.setModifiedText(prop.modifiedText.replace(regex,replacingText));
            }

        }

        const handleOnCancel = () => {
            prop.setShowTextSearchWindow(false);
        }


        return (
            <div>
                <div className="position-fixed" style={{ backgroundColor: "white", border: "2px solid blue", width: "80%", top: "10%", left: "10%", zIndex: "10" }}>

                    <input className="form-control" id='replaceInput' type="search" placeholder="Replace With ...." aria-label="Search" style={{ borderRadius: "0px" }} />

                    <div className='flex justify-content-center gap-4 mt-3' >
                        <button className='btn btn-primary' onClick={handleOnReplace}>Replace</button>
                        <button className='btn btn-primary' onClick={handleOnCancel}>Cancel</button>
                    </div>

                    <div className="form-control mt-3 overflow-scroll"  style={{ height: '200px', borderRadius: "0px" }} readOnly={true} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(prop.modifiedText.replace(regex, `<b style="color:white; background-color:orange">${searchText}</b>`)) }}>

                    </div>
                </div>
            </div>
        )
    }
}
