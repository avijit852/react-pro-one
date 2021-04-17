import React from 'react';

import { NavBar } from '../NavBar';
import { PopularItems } from '../../components/PopularItems';
import { TodaySpecial } from '../../components/TodaySpecial';
import { DailyMenu } from '../../components/DailyMenu';

export const Home = () => {
    const data = {
        "name":"Welcome To",
        "buttonData":"Details",
        "isActive": 'home'
    }

    return (
        <div>
            <NavBar nav={data}/>
            <div className="tm-main-section light-gray-bg">
                <div className="container" id="main">
                    <section className="tm-section row">
                        <div className="col-lg-9 col-md-9 col-sm-8">
                            <h2 className="tm-section-header gold-text tm-handwriting-font">The Best Coffee for you</h2>
                            <h2>Cafe House</h2>
                            <p className="tm-welcome-description">This is free HTML5 website template from <span className="blue-text">template</span><span className="green-text">mo</span>. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.</p>
                            <a href="#" className="tm-more-button margin-top-30">Read More</a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
                            <div className="inline-block shadow-img">
                                <img src="assets/img/1.jpg" alt="Image" className="img-circle img-thumbnail" />
                            </div>
                        </div>
                    </section>
                    <PopularItems />
                    <TodaySpecial />
                    <DailyMenu />
                </div>
            </div>
        </div>
    )
}