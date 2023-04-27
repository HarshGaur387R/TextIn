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
            About us
          </h1>

          <p className="mt-3">TextIn is an open source text filterer tool in form of web application. It will helps you to filter your text. Like removing extra spaces, Special characters, Converting to uppercase/lowercase and many more other facilities.  If you don't like the default dark theme color then you can change it from settings or create your own.</p>

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

