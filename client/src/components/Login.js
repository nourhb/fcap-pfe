/* eslint-disable */
import React, {useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import '../login.css'
import Typed from "react-typed";
import ErrorBox from '../ErrorBox';

function Login() {
	
	const [user, setUser] = useState({cin: null,password: null});

	let navigate = useNavigate()

	const { cin,password} = user;

const onInputChange = (e) => { 
        setUser({ ...user, [e.target.name]: e.target.value });
    };

	const submitLogin = async (e) => {
		try {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/v1/auth/login", user).then(result=>{
		 /* alert(result.data.user.roles)*/
		  localStorage.setItem('role', result.data.user.roles);


		  localStorage.setItem('user',JSON.stringify(result.data.user));
		//console.log(role);
		const user = localStorage.getItem('user')
		const role = localStorage.getItem('role')
		  console.log(user)
		  console.log(role)
		})
		.then(()=>{
			 navigate('/../Home', { replace: true })
             navigate(0)
		})
		}
		catch (err) {
        console.log(err)
		}
		if(!password.length || ! cin.length){
     alert()
    }
    };
	

	return (
		
    <div class="imgLogin " >
    <section class="ftco-sectionLogin">
      <div class="containerLogin">
        <div class="rowLogin justify-content-center-login">
          <div class="col-md-6 text-center mb-5">
          </div>
        </div>
        <div class="rowLogin justify-content-center-login">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap ">
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
            <br/>
              <form action="#" >
                <div className="form-groupLogin">
                  <input  type="number"  class="form-controlInput " placeholder="Cin" required name="cin"
           value={cin}
            onChange={(e) => onInputChange(e)}/>
                {
                      (cin && cin.length > 8 || cin && cin.length < 8) ? <ErrorBox text={" your password musn't be less than 8 numbers"}/>: null
                }
          
                </div>
                <div className="form-groupLogin *">
                  
                  <input id="password-field" type="password" class="form-controlInput" placeholder="Password" required="required"
                   name="password"
                   
                   value={password}
                                  onChange={(e) => onInputChange(e)}/>
                  <span ></span>
                </div>
                <div class="form-groupLogin" >
                  <button type="submit" className="submitLogin" style={{justifyContent:'center'}}
                  onClick={(e) =>  submitLogin (e)}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  
    </section>
      <div id="flamelab-convo-widget">
        <img src="https://clepstep.com/wp-content/uploads/avataaars.png" style={{ width: "173px" }} alt="Avatar Image" />
        <div class="flamelab-cw-msg-box">
          <span>Hey! in case you forget your password please contact the admin </span>
          <div class="flamelab-cw-buttons">
            <a href="/" target="_blank" class="flamelab-cw-button flamelab-cw-button-yes">contact admin</a>
          </div>
        </div>

      </div>
  
  </div>
  
     
	);
}

export default Login;
