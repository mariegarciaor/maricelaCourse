import React from 'react';
import {Route, Link} from "react-router-dom";
import CoursesMenu from './CoursesMenu';

const Home = () => {

    return (
        <div>
            <h1>home</h1>
            Debugger
            <Route exact path="/Home" component ={Home}/> 
            <Route path={`/Home/courses`} component ={CoursesMenu}/> 
            <div>
                <Link to={CoursesMenu}><button>Ver cursos</button></Link>
            </div>
        </div>
    )
}

export default Home;