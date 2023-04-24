import React, { useEffect } from 'react'


export default function About(props) {

  useEffect(()=>{
    if(props.isDarkModeEnable){ 
      document.querySelector('.aboutPage').style.backgroundColor = props.theme.backgroundColor;
      document.querySelector('.aboutPage').style.color = "white";

      document.querySelectorAll('.accordion-button').forEach(e=>{
        e.style.backgroundColor = props.theme.backgroundColor;
        e.style.color = "white";
      });

      document.querySelectorAll(".accordion-body").forEach(e=>{
        e.style.backgroundColor = props.theme.backgroundColor;
        e.style.color = "white";
      });

    }
    else{
      document.querySelector('.aboutPage').style.backgroundColor = "white";
      document.querySelector('.aboutPage').style.color = "black";

      document.querySelectorAll('.accordion-button').forEach(e=>{
        e.style.backgroundColor = "white";
        e.style.color = "black";
      });

      document.querySelectorAll(".accordion-body").forEach(e=>{
        e.style.backgroundColor = "white";
        e.style.color = "black";
      });
    }
  })

  return (
    <>
      <div className="aboutPage min-vh-100">

        <div className="container pt-4">
          <h1>
            About US
          </h1>

          <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi labore quos officiis dicta expedita ea asperiores dolorum nostrum quis eaque similique soluta, assumenda repellendus dolores numquam dolore sed beatae nemo accusamus! Laboriosam ut cum tenetur, itaque fugit error similique commodi numquam? Amet facilis eos aspernatur, omnis excepturi possimus dolores incidunt. Odit, accusantium eligendi.</p>

          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

