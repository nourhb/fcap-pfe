import emailjs from "emailjs-com";
import React, { useState, setStatus, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs(props) {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/employee')
            .then(result => {
                setData(result.data.map(function (a) { return a.email; }))

 
            })
    }, [])
    const [user, setUser] = useState({ email: "" });
    const { email } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    function sendEmail(e) {
        e.preventDefault();
        let pattren = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == "") {
            toast.error("ce champ est vide ")
        }
        else if (!pattren.test(email)) {
            toast.error('c est pas un email valide ')
        }
        else if (!data.includes(email)) {
            toast.error("cette address ne corr")
        } else {
            try {
                e.preventDefault();
                emailjs.sendForm('service_h7i5nzc', 'template_vm17mnd', e.target, 'tDAUmMb6yE1Qsirw7')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    })
                    .then(() => {
                        toast.success("email envoyé avec succes ! ")
                    })
                e.target.reset()
            }

            catch (err) {

                console.log(err)

            }
        }

    }

    return (
        <div>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ToastContainer />  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Contact admin - forget password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input className="form-control" placeholder="Email Address" name="email" value={email}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}