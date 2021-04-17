import React from 'react'

export const DailyMenu = () => {
    return (
        <div>
            <section className="tm-section">
                <div className="row">
                    <div className="col-lg-12 tm-section-header-container">
                        <h2 className="tm-section-header gold-text tm-handwriting-font">
                            <img src="assets/img/logo.png" alt="Logo" className="tm-site-logo" /> Daily Menu</h2>
                        <div className="tm-hr-container"><hr className="tm-hr" /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="tm-daily-menu-container margin-top-60">
                        <div className="col-lg-4 col-md-4">
                            <img src="assets/img/menu-board.png" alt="Menu board" className="tm-daily-menu-img" />
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                            <ol className="margin-top-30">
                                <li>Tellus eget condimentum rhoncus.</li>
                                <li>Sem quam semper libero.</li>
                                <li>Sit amet adipiscing sem neque sed ipsum.</li>
                                <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
                                <li>Maecenas nec odio et ante tincidunt tempus.</li>
                                <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
                            </ol>
                            <a href="#" className="tm-more-button margin-top-30">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}