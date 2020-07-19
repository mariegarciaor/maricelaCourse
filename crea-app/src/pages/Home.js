import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CoursesMenu from './CoursesMenu';

const Home = () => {

    return (
        <div>
            <h1>home</h1>
            <Router>
                <Link to='/videoseries'><button>Ver cursos</button></Link>
                <Route exact path='/videoseries' component={CoursesMenu} />
            </Router>
        </div>
    )
}

export default Home;