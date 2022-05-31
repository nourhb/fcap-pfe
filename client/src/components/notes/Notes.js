/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Addnotesmodal from "./notesmodel";
import './notes.css';
import FetchNote from "./fetchnote";
import note from '../../assets/images/todo2.gif';
import { BsPencilSquare } from "react-icons/bs";


function NoteDetail() {
    const [record, setRecord] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    // On Page load display all records
    const loadNoteDetail = async () => {
        await axios.get(`http://localhost:5000/api/v1/note`).then((response) => {
            setRecord(response.data);
        });
    };

    useEffect(() => {
        loadNoteDetail();
    }, []);
 

    return (
        <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
            <section>
            <h1 className="mb-3 text-center mt-4" id="h1">
                My Notes
            </h1>
        
            <img src={note} style={{marginTop:' -5%' , height:'200px' , float:'right'}}/>
            <div className="col-sm-8">
                    <button className='btn btn-light' style={{width:'200px' , height:'80px'}} onClick={() => setModalShowedit(note.id)}>
                        <BsPencilSquare /> Add Notes
                    </button>
                <Addnotesmodal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <FetchNote />
</section>
        </div>

    );
}

export default NoteDetail;

