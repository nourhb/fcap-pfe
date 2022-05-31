import React, { useState, useEffect } from 'react';
import AnnouncementDetail from './annoucementDetail';
import Receivedannouncement from './Receivedannouncement';
import IdeaDetail from './idea'
import './home.css';
import axios from "axios";  
import Typed from "react-typed";
import { BsBookmarkCheck } from "react-icons/bs";
import admin from '../../assets/images/mkt.png'
function Home() {

    // get the user from the local strogae 
    const user = localStorage.getItem('user')
    // convert vers object again 
    let current_user = JSON.parse(user)

    const role = localStorage.getItem('role')
    console.log(role)

    const [record, setRecord] = useState([]);


    const loadreminder = async () => {
        axios.get(`http://localhost:5000/api/v1/task/reminder`).then((response) => {
            setRecord(response.data);
        });
    };
 
    useEffect(() => {
        loadreminder();
    }, []);
    // Search Records here

    return (
        <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
            <div id="flamelab-convo-widget1" style={{ float: "right" }}>
                <div className="flamelab-cw-msg-box1">
                    <span>Hello  {current_user.first_name}  </span>
                </div><br />
                <img src="https://clepstep.com/wp-content/uploads/avataaars.png" style={{ width: "173px" }} alt="Avatar Image" />

            </div>
            <div id="main-container" >

                <div id="left-container">
                    <div id="newPost" className="IDcontainer">

                        <div className="side IDbar">
                            <ul>
                                <a href="#5" id="document"><span className="fontawesome-comments"></span></a>
                            </ul>
                        </div>

                        <div className="newPostContent" >
                            <AnnouncementDetail />
                        </div>
                    </div>

                    <div id="messages" className="IDbar">
                        <ul>

                            <a href="#17"><i ><BsBookmarkCheck /></i></a>
                            <h2 style={{ color: "#fff" }}>
                                <Typed
                                    strings={[
                                        "Have a nice day!",
                                        "Enjoy your new day.",
                                        "Have fun and learn lots.",
                                        "Be yourself!"
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop

                                />
                            </h2>
                        </ul>
                        <div className="lupa"></div>
                    </div>

                    <div id="suscribe" className="IDcontainer">
                        <IdeaDetail /> </div>


                    <div id="messages" className="IDbar">
                        <ul>

                            <a href="#17">
                                <i><BsBookmarkCheck /></i>
                            </a>
                            <h2 style={{ color: "#fff" }}>
                                <Typed
                                    strings={[
                                        "Never stop improvment!",
                                        "today is a new day ! you can make it better !",
                                        "We believe in you.",
                                        "You’ve got this.",
                                    ]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop
                                />
                            </h2>
                        </ul>
                        <div className="lupa"></div>
                    </div>


                </div>

                <div id="middle-container"><div className='hello' />
                    <div id="relatedPosts" className="IDcontainer">
                        <div className="IDbar title-IDbar">
                            <h2 style={{ color: "#fff" }}>Received announcements </h2>
                        </div>
                        <Receivedannouncement />
                    </div>

                    <div id="tags" className="IDcontainer">
                        <div className="bar title-bar">
                        
                        {
                            (role == 'ADMIN') ? <img src={admin} height="160px" width="430"/> : null
                        }
                        {
                            (role == 'INFORMATION_TECHNOLOGIES') ? <div>hi2</div> : null
                        }{
                            (role == 'ACCOUNTING') ? <div>hi3</div> : null
                        }{
                            (role == 'CUSTOMER_SERVISES') ? <div>hi</div> : null
                        }{
                            (role == 'MARKETING') ? <div>hi</div> : null
                        }{
                            (role == 'TECHNICHAL_SERVICES') ? <div>hi</div> : null
                        }
                    </div></div>

                    <div id="IDmap" className="IDcontainer">
                        <div className="IDmap">

                        </div>
                        <i></i>
                        <div className="lupa"></div>
                    </div>
                </div>

                <div id="right-container">
                    <div id="calendar" className="IDcontainer">
                        <div className="IDbar title-IDbar">

                            <h2 style={{ color: "#fff" }}>Shortcut</h2>
                            <div className="list-group">
                                <a href="/todotoday"><button type="button" className="list-group-item list-group-item-action" aria-current="true">To Do </button></a>
                                <a href="/home"><button type="button" className="list-group-item list-group-item-action" aria-current="true">Home</button></a>
                                <a href="/todo"><button type="button" className="list-group-item list-group-item-action" > Todo List</button></a>
                                <a href="/notes"><button type="button" className="list-group-item list-group-item-action" aria-current="true">Notes</button></a>

                            </div>
                        </div>

                    </div>

                    <br /><br />
                    <div id="IDcategories" className="IDcontainer">
                        <div className="title-IDbar more-bar">
                            <ul>
                                <li><h2>Reminder</h2></li>
                            </ul>
                        </div>


                        <ul>    
                            <li className="categories-opt" >
                                <p >hight periorityy task </p>

                            </li>{record.length > 0 &&  record.map((name , key) => (  <>
                            <li key={name.id}>
                                <p >{name.taskid}</p>

                            </li>
                            <li>
                                <p>{name.title}</p>

                                </li></>))}
                        </ul>

                    </div>

                    <div id="moreOptions" className="IDcontainer">
                        <div className="title-IDbar more-bar moreOptions-bar">
                            <ul>
                                <li><a href="#34" className="popular">Rating</a></li>
                            </ul>
                        </div>
                        <div className="popular">
                            <p><a href="#37">xxxxxxxxxxxxxxx</a> <br />
                                <a href="#38">xxxxxxxxxxxxx</a></p>
                        </div>
                    </div>
                </div>
            </div></div>

    )
}

export default Home;
