/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import '../login.css'
import Typed from "react-typed";
import ErrorBox from '../ErrorBox';
import ContactUs from '../components/common/ContactUs' 

function Login() {
  const [modalShowcontact, setModalShowcontact] = useState(false);

  const [user, setUser] = useState({ cin: "", password: "" });

  let navigate = useNavigate()

  const { cin, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:5000/api/v1/auth/login", user).then(result => {
        /* alert(result.data.user.roles)*/
        localStorage.setItem('role', result.data.user.roles);
        localStorage.setItem('user', JSON.stringify(result.data.user))

      })
        .then(() => {
          navigate('/../Home', { replace: true })
          navigate(0)
        })
    }
    catch (err) {
      console.log(err)
    }
    if (!password.length || !cin.length) {
      alert()
    }
  };
  const SessionStart = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/v1/auth/session`, user)
        .then(result => {
          console.log(result)
        })
    } catch (err) {
      console.log(err)
    }
  };


  return (

    <div className="imgLogin " >
      <section className="ftco-sectionLogin">
        <div className="containerLogin">
          <div className="rowLogin justify-content-center-login">
            <div className="col-md-6 text-center mb-5">
            </div>
          </div>
          <div className="rowLogin justify-content-center-login">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap ">
                <div>
                  <h1 className="heading-section"><Typed
                    strings={[
                      "Welcome to login page",
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                  /></h1>
                </div>
                <br />
                <form action="#" >
                  <div className="form-groupLogin">
                    <input type="number" className="form-controlInput " placeholder="Cin" required name="cin"
                      value={cin}
                      onChange={(e) => onInputChange(e)} />
                    {(cin && cin.length > 8 || cin && cin.length < 8) ? <ErrorBox text={" your password musn't be less than 8 numbers"} /> : null}

                  </div>
                  <div className="form-groupLogin *">

                    <input id="password-field" type="password" className="form-controlInput" placeholder="Password" required="required"
                      name="password"

                      value={password}
                      onChange={(e) => onInputChange(e)}
                    />
                    {/*
                      (password && password.length > 8 || password && password.length < 8) ? <ErrorBox text={" your password musn't be less than 8 numbers"} /> : null
                      */}
                  </div>
                  <div className="form-groupLogin" >
                    <button type="submit" className="submitLogin" style={{ justifyContent: 'center' }}
                      onClick={(e) => { submitLogin(e); SessionStart(e) }}>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
      <div id="flamelab-convo-widget">
        <img src="https://clepstep.com/wp-content/uploads/avataaars.png" style={{ width: "173px" }} alt="Avatar Image" />
        <div className="flamelab-cw-msg-box">
          <span>Hey! in case you forget your password please contact the admin </span>
          <div className="flamelab-cw-buttons">
            <button className=" btn btn-info btn-sm mr-2" onClick={() => setModalShowcontact(true)}>contact admin</button>



            <ContactUs
              show={modalShowcontact}
              onHide={() => setModalShowcontact(false)}
            />
          </div>
        </div>

      </div>

    </div>


  );
}

export default Login;
