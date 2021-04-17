import React, { useState } from 'react';
import { NavBar } from '../NavBar';
import axios from 'axios';
const apiUrl = 'http://161.35.122.165/teamassist.websteptech.co.uk/api/post-contact-details';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [msg , setMsg] = useState('');
    const data = {
        "name": "Contact Us",
        "buttonData": "Message US",
        "isActive": 'contact'
    }

    const submitButton = async (e) => {
        e.preventDefault();
        let formData = {
            'full_name': name,
            'email_id': email,
            'phone_number': phone,
            'message': message
        };
        console.log(formData);
        await axios({
            method: "post",
            url: `http://161.35.122.165/teamassist.websteptech.co.uk/api/post-contact-details`,           
            headers: {
                "content-type": "application/json",
            },
            'params':formData,
        }).then((result) => {
            setMsg(result.data.message);
            setInterval( ()=>{
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setMsg('');
            }, 2000)
            console.log(result);
        });
    }

    return (
        <div>
            <NavBar nav={data} />
            <div className="tm-main-section light-gray-bg">
                <div className="container" id="main">
                    <div className="tm-main-section light-gray-bg">
                        <div className="container" id="main">
                            <section className="tm-section row">
                                <h2 className="col-lg-12 margin-bottom-30">Send us a message</h2>
                                <p className="col-lg-12" style={{ color: 'rgb(6 144 17)' }}>{msg}</p>
                                <form action="POST" className="tm-contact-form">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="contact_name"
                                                name="name"
                                                className="form-control"
                                                placeholder="NAME"
                                                onChange={e => setName(e.target.value)}
                                                value={name} />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="contact_email"
                                                name="email"
                                                className="form-control"
                                                placeholder="EMAIL"
                                                onChange={e => setEmail(e.target.value)}
                                                value={email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="phone_number"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Phone number"
                                                onChange={e => setPhone(e.target.value)}
                                                value={phone} />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                id="contact_message"
                                                name="message"
                                                className="form-control"
                                                rows="6"
                                                placeholder="MESSAGE"
                                                onChange={e => setMessage(e.target.value)}
                                                value={message}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="tm-more-button"
                                                type="submit"
                                                name="submit"
                                                onClick={submitButton}
                                            >Send message</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div id="google-map"></div>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}