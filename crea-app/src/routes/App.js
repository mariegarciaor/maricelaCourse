import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../pages/Layout/NavBar';
import Footer from '../pages/Layout/Footer';

import Home from '../pages/Home';
import CoursesList from '../pages/CoursesList';
import CourseContainer from '../pages/CourseContainer';
import Store from '../pages/Store';

import '../styles/app.css';

const App = () => (
  <div className="app-container">
    <NavBar />
    <content>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/courses" component={CoursesList} />
        <Route path="/courses/:id" component={CourseContainer} />

        <Route exact path="/store" component={Store} />
      </BrowserRouter>
    </content>
    <Footer />
  </div>
);

export default App;
