import React from 'react';

export const PopularItems = () => {
    return (
        <div>
            <section className="tm-section tm-section-margin-bottom-0 row">
                <div className="col-lg-12 tm-section-header-container">
                    <h2 className="tm-section-header gold-text tm-handwriting-font">
                        <img src="assets/img/logo.png" alt="Logo" className="tm-site-logo" /> Popular Items</h2>
                    <div className="tm-hr-container"><hr className="tm-hr" /></div>
                </div>
                <div className="col-lg-12 tm-popular-items-container">
                    <div className="tm-popular-item">
                        <img src="assets/img/popular-1.jpg" alt="Popular" className="tm-popular-item-img" />
                        <div className="tm-popular-item-description">
                            <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">a</span>mericano</h3><hr className="tm-popular-item-hr" />
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                            <div className="order-now-container">
                                <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="tm-popular-item">
                        <img src="assets/img/popular-2.jpg" alt="Popular" className="tm-popular-item-img" />
                        <div className="tm-popular-item-description">
                            <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">c</span>appuccino</h3><hr className="tm-popular-item-hr" />
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                            <div className="order-now-container">
                                <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="tm-popular-item">
                        <img src="assets/img/popular-3.jpg" alt="Popular" className="tm-popular-item-img" />
                        <div className="tm-popular-item-description">
                            <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">m</span>ocha</h3><hr className="tm-popular-item-hr" />
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                            <div className="order-now-container">
                                <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}