import React from 'react'

export default function colorPalette(show) {

  if (show.showColorPalette) {

    const handelWhenAddClicked = () => {
      let color = document.getElementById('colorSelector').value;

      show.listOfColors.push(color);

      show.setShowColorPalette(false);
    }
    
    const handleWhenCancelClicked = ()=>{
      show.setShowColorPalette(false);

    }

    return (
      <div>
        <div className="container pt-4 position-fixed" style={{ maxWidth: "250px", maxHeight: "250px", backgroundColor: "white", border: "2px solid blue", top: "50%", left: "50%", marginTop: "-125px", marginLeft: "-125px" }}>
          <div className='flex flex-column align-item-center gap-4 pb-3 text-center'>
            <h4>Click Box To Select</h4>
            <input id="colorSelector" type='color' style={{ width: "100px", height: "50px", border: "2px solid blue" }} />
            <div className='flex justify-content-center gap-4' >
              <button className='btn btn-primary' onClick={handelWhenAddClicked}>Add</button>
              <button className='btn btn-primary' onClick={handleWhenCancelClicked}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
