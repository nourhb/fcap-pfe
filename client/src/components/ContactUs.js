import emailjs from "emailjs-com";
import React, { useState, setStatus } from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function ContactUs(props) {
    const [user, setUser] = useState({ email: "" });
    const { email } = user;

    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });

    };

    function sendEmail(e) {
        e.preventDefault();
        try {
            e.preventDefault();
            axios.get("http://localhost:5000/api/v1/auth/mail", user).then(result => {
                let { response } = result.data
                console.log("this is the result", response)
                setStatus(response);
                if (response.length >0) {


                    emailjs.sendForm('service_h7i5nzc', 'template_vm17mnd', e.target, 'tDAUmMb6yE1Qsirw7')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                    e.target.reset()
                }else{
                    alert(" this email adress is faked or wrong ! check it again ")
                    window.location.reload();
                }
            })
        }
		catch (err) {

        console.log(err)

    }
}

return (
    <div><Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
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
                        <input type="email" className="form-control" placeholder="Email Address" name="email" value={email}
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