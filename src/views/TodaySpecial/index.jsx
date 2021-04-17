import React from 'react';
import { NavBar } from '../NavBar';
import { PopularItems } from '../../components/PopularItems';
import { DailyMenu } from '../../components/DailyMenu';

export const TodaySpecial = () => {
    const data = {
        "name":"Today's Special",
        "buttonData":"Read More",
        "isActive": 'todays_special'
    }
    return (
        <div>
            <NavBar nav={data}/>
            <div className="tm-main-section light-gray-bg">
                <div className="container" id="main">
                    <PopularItems/>
                    <DailyMenu />
                </div>
            </div>
        </div>
    )
}