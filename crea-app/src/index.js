import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from './pages/Home'
import CoursesMenu from './pages/CoursesMenu';

const container = document.getElementById('root');

const Routing = (
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/Home' component={Home} />
            <Route path='/Courses' component={CoursesMenu} />
        </div>
    </Router>
)

export default Routing

ReactDOM.render(Routing, container);



