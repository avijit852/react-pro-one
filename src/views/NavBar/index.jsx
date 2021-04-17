import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
    const [dateTime, setDateTime] = useState();

    setInterval( ()=>{
        let time = new Date().toLocaleTimeString();
        setDateTime(time)}, 
        1000);

    return (
        <div>
            <div className="tm-top-header">
                <div className="container">
                    <div className="row">
                        <div className="tm-top-header-inner">
                            <div className="tm-logo-container">
                                <img src="assets/img/logo.png" alt="Logo" className="tm-site-logo" />
                                <h1 className="tm-site-name tm-handwriting-font">Cafe House</h1>
                            </div>
                            <div className="mobile-menu-icon">
                                <i className="fa fa-bars"></i>
                            </div>
                            <nav className="tm-nav">
                                <ul>
                                    <li><Link to="/" className={props.nav.isActive === 'home' ? 'active' : 'null'}>Home</Link></li>
                                    <li><Link to="/today-special" className={props.nav.isActive === 'todays_special' ? 'active' : 'null'} >Today Special</Link></li>
                                    <li><Link to="/menu" className={props.nav.isActive === 'our_manu' ? 'active' : 'null'}>Menu</Link></li>
                                    <li><Link to="/contact" className={props.nav.isActive === 'contact' ? 'active' : 'null'}>Contact</Link></li>
                        
                                    <li><Link to="/">Time :  { dateTime } </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <section className="tm-welcome-section">
                <div className="container tm-position-relative">
                    <div className="tm-lights-container">
                        <img src="assets/img/light.png" alt="Light" className="light light-1" />
                        <img src="assets/img/light.png" alt="Light" className="light light-2" />
                        <img src="assets/img/light.png" alt="Light" className="light light-3" />
                    </div>
                    <div className="row tm-welcome-content">
                        <h2 className="white-text tm-handwriting-font tm-welcome-header">
                            <img src="assets/img/header-line.png" alt="Line" className="tm-header-line" />
                            &nbsp;{props.nav.name}&nbsp;&nbsp;
                            <img src="assets/img/header-line.png" alt="Line" className="tm-header-line" />
                        </h2>
                        <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>
                        <p className="gray-text tm-welcome-description">Cafe House template is a mobile-friendly responsive <span className="gold-text">Bootstrap v3.3.5</span> layout by <span className="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <a href="#main" className="tm-more-button tm-more-button-welcome">{props.nav.buttonData}</a>
                    </div>
                    <img src="assets/img/table-set.png" alt="Table Set" className="tm-table-set img-responsive" />
                </div>
            </section>


        </div>




    )
}
