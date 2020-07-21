import React from 'react';
import { useParams } from 'react-router-dom';
import CourseModule from '../components/Course-Components.js/module';
import '../styles/coursecontainer.css';

const CourseContainer = () => {
  let { id } = useParams();

  return (
    <div className="course-container">
      <h1>Este es el primer curso id :{id}</h1>
      <CourseModule />
      <CourseModule />
    </div>
  );
};

export default CourseContainer;
