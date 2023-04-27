import React, { useEffect } from 'react'
import tinycolor from 'tinycolor2';

export default function TextForm(props) {

    useEffect(() => {

        if (props.isDarkModeEnable) {

            document.getElementById('textForm').style.backgroundColor = props.theme.backgroundColor;
            document.getElementById('textForm').style.color = "white";

            document.getElementById('floatingTextarea2').style.backgroundColor = tinycolor(props.theme.backgroundColor).darken(5).toString()
            document.getElementById("floatingTextarea2").style.color = "white";

            document.getElementById('preview').style.color = "white";

            document.getElementById('selectFilter').style.backgroundColor = tinycolor(props.theme.backgroundColor).darken(5).toString();
            document.getElementById('selectFilter').style.color = "white";
            Array.from(document.getElementById('selectFilter').children).forEach(e=>{e.style.color="white"})
        }
        else{
            document.getElementById('textForm').style.backgroundColor = "white";
            document.getElementById('textForm').style.color = "black";

            document.getElementById('floatingTextarea2').style.backgroundColor = "white"
            document.getElementById("floatingTextarea2").style.color = "black";

            document.getElementById('preview').style.color = "black";

            document.getElementById('selectFilter').style.backgroundColor = "white";
            document.getElementById('selectFilter').style.color = "black";
            Array.from(document.getElementById('selectFilter').children).forEach(e=>{e.style.color="black"})
            
        }

    });
    function countWords(str) {
        str = str.trim();

        var words = str.split(/\s+/);


        if (words[0] === '') {
            return 0;
        }
        return words.length;
    }

    function removeWhitespace(str) {
        return str.replace(/\s+/g, '');
    }

    function removeExtraSpaces(str) {
        return str.replace(/\s+/g, ' ').trim();
    }

    function removeSpecialCharacters(str) {
        return str.replace(/[^\w\s]/gi, '');
    }

    const handleOnCopy = () => {
        let t = document.getElementById('floatingTextarea2').value;

        navigator.clipboard.writeText(t)
            .then(() => {
                props.showAlert("Copied!");
            })
            .catch((err) => {
                props.showAlert("Try Again");
            });

        setTimeout(() => {
            props.showAlert(null);
        }, 2000)
    }

    const handleOnChange = (event) => {
        props.setModifiedText(event.target.value);
    }

    const handleOnClick = () => {

        let filter = document.getElementById('selectFilter').value;

        switch (filter) {
            case '0':
                props.setModifiedText(props.modifiedText.toUpperCase());
                break;

            case '1':
                props.setModifiedText(props.modifiedText.toLowerCase());
                break;

            case '2':
                props.setModifiedText(removeWhitespace(props.modifiedText));
                break;

            case '3':
                props.setModifiedText(removeSpecialCharacters(props.modifiedText));
                break;

            case '4':
                props.setModifiedText(removeExtraSpaces(props.modifiedText));
                break;
            default:
        }
    }

    const handleOnClear = () => {
        props.setModifiedText("");
    }

    return (
        <>
            <div id="textForm" className={`textFormPage min-vh-100 w-100`}>
                <div className='container pt-4'>

                    <div className="d-md-flex mb-2 justify-content-md-end">
                        <button type="button" className="copyBtn btn btn-outline-primary rounded-0" onClick={handleOnCopy}>Copy</button>
                    </div>

                    <textarea className="form-control" value={props.modifiedText} onChange={handleOnChange} placeholder="Enter Your text here" id="floatingTextarea2" style={{ height: '200px' }}></textarea>

                    <div className="d-grid gap-2 d-md-flex mt-3 justify-content-md-end">

                        <select id="selectFilter" defaultValue={0} className="form-select me-md-2" style={{ maxWidth: "300px" }} aria-label="Default select example">
                            <option value={'0'}>To Uppercase</option>
                            <option value={'1'}>To Lowercase</option>
                            <option value={'2'}>Remove White Space</option>
                            <option value={'3'}>Remove Special Characters</option>
                            <option value={'4'}>Remove Extra Space</option>
                        </select>

                        <button className="btn btn-primary" onClick={handleOnClick} type="button">Apply</button>
                        <button className="btn btn-primary" onClick={handleOnClear} type="button">Clear</button>
                    </div>
                </div>

                <div className="container mt-4 text-end">
                    <h1>Text summary</h1>
                    <p>{countWords(props.modifiedText)} Words and Characters {props.modifiedText.length}</p>
                    <p>{0.008 * countWords(props.modifiedText)} Minutes Read</p>
                </div>

                <div className="container mt-4 text-start">
                    <h2>Preview</h2>
                    <p id="preview">{props.modifiedText}</p>
                </div>
            </div>
        </>
    )
}