import React from 'react';

import AboutMe from '../components/Home-Components/AboutMe.js';
import Brochure from '../components/Home-Components/Brochure.js';
import Gallery from '../components/Home-Components/Gallery.js';
import Hero from '../components/Home-Components/Hero.js';
import Reviews from '../components/Home-Components/Reviews.js';
import Services from '../components/Home-Components/Services.js';

const Home = () => {

    return (
        <>
            <Hero />
            <Brochure />
            <Gallery />
            <Services/>
            <Reviews/>
            <AboutMe />
                {/* <Router>
                    <Link to='/videoseries'><button>Ver cursos</button></Link>
                    <Route exact path='/videoseries' component={CoursesMenu} />
                </Router>
             */}
        </>    
    );
}

export default Home;