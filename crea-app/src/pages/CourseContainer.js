import React from 'react';
import CourseModule from '../components/Course-Components.js/module'
import '../styles/coursecontainer.css';


const CourseContainer = () => (
        <div className="course-container">
            <h1>Este es el primer curso</h1>
            <CourseModule />
            <CourseModule />
        </div>

)

export default CourseContainer;