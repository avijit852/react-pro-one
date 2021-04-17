import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div className="tm-black-bg">
                <div className="container">
                    <div className="row margin-bottom-60">
                        <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
                            <h3 className="tm-footer-div-title">Main Menu</h3>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/'>Directory</Link></li>
                                <li><Link to='/'>Blog</Link></li>
                                <li><Link to='/'>Our Services</Link></li>
                            </ul>
                        </nav>
                        <div className="col-lg-5 col-md-5 tm-footer-div">
                            <h3 className="tm-footer-div-title">About Us</h3>
                            <p className="margin-top-15">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
                            <p className="margin-top-15">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 tm-footer-div">
                            <h3 className="tm-footer-div-title">Get Social</h3>
                            <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante.</p>
                            <div className="tm-social-icons-container">
                                <a href="#" className="tm-social-icon"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-linkedin"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-youtube"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}