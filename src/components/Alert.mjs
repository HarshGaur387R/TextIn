import React from 'react'

export default function Alert(prop) {


    if (prop.msg != null) {

            return (
                <div className="bg-danger">
                    <div className="position-absolute m-4 text-white p-2 bg-success" style={{ top: 52, left: "45%" }} role="alert">
                        <div>
                            <strong className="me-auto p-3">{prop.msg}</strong>
                            <button type="button" onClick={() => {prop.func(null);}} className="btn-close btn-close-white" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            )
    }

}