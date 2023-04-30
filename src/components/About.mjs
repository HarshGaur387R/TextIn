import React, { useEffect } from 'react'


export default function About(props) {

  useEffect(() => {
    if (props.isDarkModeEnable) {
      document.querySelector('.aboutPage').style.backgroundColor = props.theme.backgroundColor;
      document.querySelector('.aboutPage').style.color = "white";

      document.querySelectorAll('.accordion-button').forEach(e => {
        e.style.backgroundColor = props.theme.backgroundColor;
        e.style.color = "white";
      });

      document.querySelectorAll(".accordion-body").forEach(e => {
        e.style.backgroundColor = props.theme.backgroundColor;
        e.style.color = "white";
      });

    }
    else {
      document.querySelector('.aboutPage').style.backgroundColor = "white";
      document.querySelector('.aboutPage').style.color = "black";

      document.querySelectorAll('.accordion-button').forEach(e => {
        e.style.backgroundColor = "white";
        e.style.color = "black";
      });

      document.querySelectorAll(".accordion-body").forEach(e => {
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

          <p className="mt-3">Welcome to TEXTIN, a powerful and user-friendly text filterer web application that helps you manipulate and refine your text quickly and easily. With TEXTIN, you can convert your text to uppercase or lowercase, remove extra spaces, search and replace words, and even change the application's theme to your liking.
          <br/>
          <br/>

          Our app's main feature is the ability to search for specific words or patterns using regular expressions. This powerful feature allows you to customize your search and replace options in a way that suits your needs. You can also replace multiple instances of the same word or pattern in a single click.
          <br/>
          <br/>

          TEXTIN is designed to make text manipulation easy and intuitive, with a clean and modern interface that is easy to navigate. You can use our app for a wide range of text editing tasks, from basic formatting to more advanced search and replace operations. Whether you're a student, writer, or professional, TEXTIN is the perfect tool for anyone who needs to work with text on a daily basis.
          We are constantly working to improve and update TEXTIN, so if you have any feedback or suggestions, please don't hesitate to get in touch with us. We hope you enjoy using TEXTIN as much as we enjoyed creating it!.</p>

          <div className="accordion" id="accordionPanelsStayOpenExample">
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  How to change theme?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body align-item-center justify-content-center text-center">
                  <strong>Follow The instruction Step by Step to find out how to turn on dark mode.</strong>
                  <br />
                  <br />
                  <p>{'Step 1) : Click On Dropdown it is already visible if you are in desktop. For smaller device you need to click on menu first.'}</p>
                  <img src="\images\s1.png" alt="img 1" width={"70%"} style={{border:"2px solid red"}} />
                  <br />
                  <br />
                  <br />
                  <p>{'Step 2) : Click On Switch button to Turn On dark mode. You can turn off light mode by clicking on it again.'}</p>
                  <img src="\images\s2.png" alt="img 2" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 3) : Dark Mode is now enable.'}</p>
                  <img src="\images\s3.png" alt="img 3" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <strong>How to select different dark mode ? Follow the instruction to find it out:</strong>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 1) : Click on settings button in dropdown'}</p>
                  <img src="\images\s4.png" alt="img 4" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 2) : Now you can see their are already many predefined themes.'}</p>
                  <img src="\images\s5.png" alt="img 5" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 3) : You can select any theme you want. but make sure dark mode is enabled.'}</p>
                  <img src="\images\s6.png" alt="img 6" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <strong>How do i create my own theme? Follow the instruction to find it out :</strong>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 1) : Click on plus looking add button to create your own theme.'}</p>
                  <img src="\images\s7.png" alt="img 7" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 2) : Then click on color box to open color palette.'}</p>
                  <img src="\images\s8.png" alt="img 8" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 3) : Now Your select your favorite color. But make sure that color should be dark'}</p>
                  <img src="\images\s9.png" alt="img 9" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 4) : Now select your favorite theme. make sure dark mode is on.'}</p>
                  <img src="\images\s10.png" alt="img 10" width={"70%"} style={{border:"2px solid red"}}/>
                  <br />
                  <br />
                  <br />
                  <p>{'Step 5) : You can create as many as themes you want . But make theme little darker for better experience.'}</p>
                  <img src="\images\s11.png" alt="img 11" width={"70%"} style={{border:"2px solid red"}}/>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                How to search and replace?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body text-center">
                  <strong>Follow The given instruction step by step :</strong>
                  <br />
                  <br />
                  <p>{'Step 1) : Write your text here to search.'}</p>
                  <img src="\images\s12.png" alt="img 12" width={"70%"} style={{border:"2px solid red"}} />
                  <br />
                  <br />
                  <br />
                  <p>{'Step 2) : You will see a pop up window like this. Write the text you want to replace with.'}</p>
                  <img src="\images\s13.png" alt="img 13" width={"70%"} style={{border:"2px solid red"}} />
                  <br />
                  <br />
                  <br />
                  <p>{'Step 3) : Then click on replace button.'}</p>
                  <img src="\images\s14.png" alt="img 14" width={"70%"} style={{border:"2px solid red"}} />
                  <br />
                  <br />
                  <br />
                  <p>{'Step 4) : Your word is replaced. You can edit search and replace regex from settings'}</p>
                  <img src="\images\s15.png" alt="img 15" width={"70%"} style={{border:"2px solid red"}} />
                </div>
              </div>
            </div>

            <div className="accordion-item text-center">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  How to filter text?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                <strong>Follow The given instruction step by step :</strong>
                  <br />
                  <br />
                  <p>{'Step 1) : Click on options to choose a filter.'}</p>
                  <img src="\images\s16.png" alt="img 16" width={"70%"} style={{border:"2px solid red"}} />
                  <br />
                  <br />
                  <br />
                  <p>{'Step 2) : Then Click on apply button.'}</p>
                  <img src="\images\s17.png" alt="img 17" width={"70%"} style={{border:"2px solid red"}} />
                  <br />
                  <br />
                  <br />
                  <p>{'Step 3) : Wallah! Your text is changed.'}</p>
                  <img src="\images\s18.png" alt="img 18" width={"70%"} style={{border:"2px solid red"}} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

