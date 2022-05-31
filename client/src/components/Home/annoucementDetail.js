/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTracking } from "react-tracking";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AnnouncementDetail() {
    const { trackEvent } = useTracking();

    function refreshPage() {
        window.location.reload(false);
    } 

    const [user, setUser] = useState({
        id: "",
        title: "",
        description: "",

    });

    //  Object Destructuring
    const [newannouncment, setnewannouncment] = useState({});
    const onInputChange = (e) => {
        let a = newannouncment;
        a[e.target.name] = e.target.value;
        setnewannouncment(a);
    };
    // Insert announcement Records
    const submitAnnouncementRecord = async (e) => {
        const user = localStorage.getItem('user')
        let current_user = JSON.parse(user)
        let ldep = current_user.dep;
        try {
            e.preventDefault();
            await axios.post("http://localhost:5000/api/v1/announcement", { newannouncment, ldep })
                .then(() => {
                    toast.success("announcement submited successfuly ! ")
                })
            e.target.reset()
        } catch (err) {
            console.log(err)
        }
    }
    const createHistory = () => {
        trackEvent({
            operation: "Add announcement",
            user: localStorage.getItem('role'),
            time: new Date().toLocaleString(),
        })
    }


    return (
        <div>
            <h3 className="card-title" >Add announcement </h3>

            {/* <form onSubmit={() => { }}> */}
            <input type="text" id="post-title"
                placeholder="Enter title here"
                name="title"
                onChange={(e) => onInputChange(e)}
            />
            <br />
            <textarea placeholder="Write here your announcement"
                name="description" className="post-body"
                onChange={(e) => onInputChange(e)}
            /><br />
            <button className="IDbtn" onClick={(e) => { createHistory(); submitAnnouncementRecord(e) }} style={{ marginLeft: "15px", marginRight: "40px" }}>Publish</button>
            <button type="button" className="IDbtn" onClick={() => { refreshPage(); submitAnnouncementRecord(); }} style={{ marginLeft: "15px", marginRight: "15px" }}>Refrech</button>
            {/* </form> */}
        </div>
    );
}
export default AnnouncementDetail;