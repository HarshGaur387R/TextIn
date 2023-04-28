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
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  How to filter text?
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

