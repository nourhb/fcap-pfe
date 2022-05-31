/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTracking } from "react-tracking";
import { ToastContainer, toast } from 'react-toastify';
import { ImCalendar } from "react-icons/im";
import { ImClock } from "react-icons/im";
function IdeaDetail() {
    const { trackEvent } = useTracking();
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    function refreshPage() {
        window.location.reload(false);
    }

    const [user, setUser] = useState({
        idea: "",
    });

    //  Object Destructuring
    const [newidea, setidea] = useState({});
    const onInputChange = (e) => {
        let a = newidea;
        a[e.target.name] = e.target.value;
        setidea(a);
    };
    const current = new Date();
    // By default US English uses 12hr time with AM/PM
    const time = current.toLocaleTimeString("en-US");


    // Insert Idea Records
    const submitIdeaRecord = async (e) => {
        const user = localStorage.getItem('user')
        let current_user = JSON.parse(user)
        let userid = current_user.initialid;
            try {
                e.preventDefault();            
                await axios.post("http://localhost:5000/api/v1/idea", { newidea, userid })
                    .then(() => {
                        toast.success("idea sent seccessfuly ! ")
                    })
                e.target.reset()
            }
            catch (err) {
                console.log(err)
            }
        }
        const createHistory = () => {
        trackEvent({
            operation: "Add Idea",
            user: localStorage.getItem('role'),
            time: new Date().toLocaleString(),
        })}
    const role = localStorage.getItem('role')
    console.log(role)

    return (
        <div>{
            (role != 'ADMIN') ? <>
            <div className="IDbar title-IDbar">
                <h2 style={{ color: "#fff" }}>Ideas</h2>
            </div>
            <p>Send us your ideas.</p>
            <form onSubmit={submitIdeaRecord}>
                <div className="input-group mb-3">
                    <textarea className="form-control" placeholder="write here!" aria-label="Recipient's username" aria-describedby="button-addon2"
                        name="idea"
                        onChange={(e) => onInputChange(e)} />
                    <button className="IDbtn" type="submit" onClick={() => { createHistory(); submitIdeaRecord() }}>Send</button>
                </div><br />
            </form></> : 
            <>
                    <div className="IDbar title-IDbar">
                        <h2 style={{ color: "#fff"}}>Hello admin</h2>
                    </div>
                    <div className="clock">
                    <ImCalendar id="clock" />
                    <p id="time">
                        {' '}
                        {dateState.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    <ImClock id="clock" />
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                        </p></div>
                    </>
        }

        </div>




    );
}

export default IdeaDetail;