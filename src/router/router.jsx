import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from '../views/Home';
import { About } from '../views/About';
// import { NavBar } from '../views/NavBar';
import { PageNotFount } from '../views/PageNotFound';
import Todo from '../views/Todo';
import { Footer } from '../views/Footer';
import { TodaySpecial } from '../views/TodaySpecial';
import { Menu } from '../views/Menu';
import { Contact } from '../views/Contact';
 
export const Routers = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/today-special" component={TodaySpecial} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path='/todo' component={Todo} />
                <Route exact component={PageNotFount}/>
            </Switch>
            <Footer/>
        </div>
    )
}
