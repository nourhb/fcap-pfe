import React from 'react';
import AnnouncementDetail from './annoucementDetail';
import Receivedannouncement from './Receivedannouncement';
import IdeaDetail from './idea'
import './home.css';
import Typed from "react-typed";
import { BsBookmarkCheck } from "react-icons/bs";

function Home() {
    const user = localStorage.getItem('user')
console.log(user.first_name)
    return (
        <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
            <div id="flamelab-convo-widget1" style={{float:"right"}}>
                <div className="flamelab-cw-msg-box1">
                    <span>Hello  </span>
                </div><br/>
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
                           "You are an awesome kid.",
                           "I believe in you.",
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
                        <h2 style={{ color: "#fff" }}>Received announcments </h2>
                    </div>
                    <Receivedannouncement />
                </div>

                    <div id="tags" className="IDcontainer">
                        <div className="bar title-bar">
                        <h2>Break Point (5 min)</h2>
                    </div>

                        <input type="button" value="Click Here!" className="IDbtn"></input>

                </div>

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
                            <button type="button" className="list-group-item list-group-item-action" aria-current="true">To Do </button>
                            <button type="button" className="list-group-item list-group-item-action">Dashboard</button>
                            <button type="button" className="list-group-item list-group-item-action" aria-current="true">Notes</button>
                            <button type="button" className="list-group-item list-group-item-action" > History</button>
                            <button type="button" className="list-group-item list-group-item-action" aria-current="true">Notes</button>

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
                            <li className="categories-opt">
                            <p >hight periorityy task </p>

                        </li>
                        <li>
                            <p >expired task </p>

                        </li>
                        <li>
                            <p>xxxxxxxxxxxxxx</p>

                        </li>
                        <li>
                            <p>xxxxxxxxxxxxxx</p>

                        </li>
                        <li>
                            <p>xxxxxxxxxxxxxx</p>

                        </li>
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
