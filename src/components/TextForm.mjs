import React, { useState } from 'react'

export default function TextForm(props) {

    const [textState, changeTextState] = useState('');

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

        setTimeout(()=>{
            props.showAlert(null);
        },2000)
    }

    const handleOnApply = (event) => {
        changeTextState(event.target.value);
    }

    const handleOnUppercase = () => {

        let filter = document.getElementById('selectFilter').value;

        switch (filter) {
            case '0':
                changeTextState(textState.toUpperCase());
                break;

            case '1':
                changeTextState(textState.toLowerCase());
                break;

            case '2':
                changeTextState(removeWhitespace(textState));
                break;

            case '3':
                changeTextState(removeSpecialCharacters(textState));
                break;

            case '4':
                changeTextState(removeExtraSpaces(textState));
                break;
            default:
        }
    }

    const handleOnClear = () => {
        changeTextState("");
    }

    return (
        <>
            <div id="textForm" className={`textFormPage min-vh-100 w-100`}>
                <div className='container pt-4'>

                    <div className="d-md-flex mb-2 justify-content-md-end">
                        <button type="button" className="copyBtn btn btn-outline-primary rounded-0" onClick={handleOnCopy}>Copy</button>
                    </div>

                    <textarea className="form-control" value={textState} onChange={handleOnApply} placeholder="Enter Your text here" id="floatingTextarea2" style={{ height: '200px' }}></textarea>

                    <div className="d-grid gap-2 d-md-flex mt-3 justify-content-md-end">

                        <select id="selectFilter" defaultValue={0} className="form-select me-md-2" style={{ maxWidth: "300px" }} aria-label="Default select example">
                            <option value={'0'}>To Uppercase</option>
                            <option value={'1'}>To Lowercase</option>
                            <option value={'2'}>Remove White Space</option>
                            <option value={'3'}>Remove Special Characters</option>
                            <option value={'4'}>Remove Extra Space</option>
                        </select>

                        <button className="btn btn-primary" onClick={handleOnUppercase} type="button">Apply</button>
                        <button className="btn btn-primary" onClick={handleOnClear} type="button">Clear</button>
                    </div>
                </div>

                <div className="container mt-4 text-end">
                    <h1>Text summary</h1>
                    <p>{countWords(textState)} Words and Characters {textState.length}</p>
                    <p>{0.008 * textState.split(" ").length} Minutes Read</p>
                </div>

                <div className="container mt-4 text-start">
                    <h2>Preview</h2>
                    <p id="preview">{textState}</p>
                </div>
            </div>
        </>
    )
}