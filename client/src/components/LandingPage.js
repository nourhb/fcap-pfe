/* eslint-disable */
import React from 'react';
import "./styles/landingpage.css"
import Typed from "react-typed";

function LandingPage() {

  return (<>
    <div className="wallpaper" style={{ width: "100%", height: "550px" }}>
      <div className="landing"><div style={{ marginLeft: "131px", color: " rgba(66, 70, 121, 0.933)", position: "relative", fontweight: "bold", fontSize: "21px", marginTop: "354px", marginBottom: "50px" }}><Typed
        strings={[
          "Hey ! welcome back ! please login to start your day !",
        ]}
        typeSpeed={30}
        backSpeed={50}
        loop
      /></div>
        <a href="/login" className="btnlanding">
          <svg width="554" height="248">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stopColor="#333758ee" />
                <stop offset="100%" stopColor="#ff8282ff  " />
              </linearGradient>
            </defs>
            <rect x="10" y="10" rx="50" fill="none" stroke="url(#grad1)" width="532" height="100"></rect>
          </svg>
          <span>Welcome to fcap</span>
        </a>
      </div>
    </div>

  </>

  )
}

export default LandingPage;
