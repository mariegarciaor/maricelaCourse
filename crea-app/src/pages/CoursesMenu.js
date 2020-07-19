import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import CourseContent from './Courses/Course';

const CoursesMenu = () => {

    return (
        <>
            <h1>This is courses</h1>
            <Router>
                <Link to='/Courses/CourseContent'><button>videoserie 1</button></Link>
                <Route exact path={'/Courses'} component={CoursesMenu} /> 
                <Route path={'/Courses/CourseContent'} component ={CourseContent}/> 
            </Router>
        </>
    )
}

export default CoursesMenu;