import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import CourseContainer from './Courses/CourseContainer';

const CoursesMenu = () => {

    return (
        <>
            <h1>This is courses</h1>
            <Router>
                <Link to='/Courses/CourseContainer'><button>videoserie 1</button></Link>
                <Route exact path={'/Courses'} component={CoursesMenu} /> 
                <Route path={'/Courses/CourseContainer'} component ={CourseContainer}/> 
            </Router>
        </>
    )
}

export default CoursesMenu;