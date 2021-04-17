import React from 'react';

export const TodaySpecial = () => {
    return (
        <div>
            <section className="tm-section row">
                <div className="col-lg-12 tm-section-header-container">
                    <h2 className="tm-section-header gold-text tm-handwriting-font"><img src="assets/img/logo.png" alt="Logo" className="tm-site-logo" /> Today's Special</h2>
                    <div className="tm-hr-container"><hr className="tm-hr" /></div>
                </div>
                <div className="col-lg-12 tm-special-container margin-top-60">
                    <div className="tm-special-container-left">
                        <div className="tm-special-item">
                            <div className="tm-special-img-container">
                                <img src="assets/img/special-1.jpg" alt="Special" className="tm-special-img img-responsive" />
                                <a href="#">
                                    <div className="tm-special-description">
                                        <h3 className="tm-special-title">Donec pede justo</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tm-special-container-right">
                        <div>
                            <div className="tm-special-item">
                                <div className="tm-special-img-container">
                                    <img src="assets/img/special-2.jpg" alt="Special" className="img-responsive" />
                                    <a href="#">
                                        <div className="tm-special-description">
                                            <h3 className="tm-special-title">Etiam sit amet</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="tm-special-container-lower">
                            <div className="tm-special-item">
                                <div className="tm-special-img-container">
                                    <img src="assets/img/special-3.jpg" alt="Special" className="img-responsive" />
                                    <a href="#">
                                        <div className="tm-special-description">
                                            <p>Vivamus elementum</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="tm-special-item">
                                <div className="tm-special-img-container">
                                    <img src="assets/img/special-4.jpg" alt="Special" className="img-responsive" />
                                    <a href="#">
                                        <div className="tm-special-description">
                                            <p>Quisque rutrum.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}