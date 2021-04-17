import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar';
import { OurMenus } from '../../components/OurMenus';
const fetchURL = "http://161.35.122.165/teamassist.websteptech.co.uk/api/get-primary-issue";

export const Menu = () => {
    const [result, setResult] = useState({});

    const getData = () =>
        fetch(`${fetchURL}`)
            .then((res) => res.json());

    useEffect(() => {
        getData().then((data) => {
            console.log(data)
            setResult(data)
        })
    }, []);

    const data = {
        "name": "Our Menus",
        "buttonData": "Read More",
        "isActive": 'our_manu'
    }

    return (
        <div>
            <NavBar nav={data} />
            <div>
                {result.primary_issue_list ?.map((item, index) =>
                    <ul key={item.issue_id}>
                        <li>{item.issue}</li>
                    </ul>
                )}
            </div>
            <div className="tm-main-section light-gray-bg">
                <div className="container" id="main">
                    <section className="tm-section row">
                        <div className="col-lg-9 col-md-9 col-sm-8">
                            <h2 className="tm-section-header gold-text tm-handwriting-font">Variety of Menus</h2>
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
                    <OurMenus />
                </div>
            </div>
        </div>
    )
}