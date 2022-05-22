import React from 'react';
import "./styles/landingpage.css"
import Typed from "react-typed";

function LandingPage() {

  return (<>
    <div className="wallpaper" style={{width:"100%" , height:"550px"}}>
   
      <div class="landing">
        <a href="/login" class="btnlanding">
          <svg width="554" height="248">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stop-color="#333758ee" />
                <stop offset="100%" stop-color="#ff8282ff  " />
              </linearGradient>
            </defs>
            <rect x="10" y="10" rx="50" fill="none" stroke="url(#grad1)" width="532" height="100"></rect>
          </svg>
          <span>Welcome to fcap</span>
        </a>
      </div>
    </div>      <div style={{ color: "#424679ee" , marginTop:"-500px" , marginLeft:"550px" , position: "absolute" , fontWeight:"bold" , fontSize:"21px"}}><Typed
        strings={[
          "Have a nice day!",
 
        ]}
        typeSpeed={100}
        backSpeed={100}
        loop
      /></div>
   </>

  )
}

export default LandingPage;
