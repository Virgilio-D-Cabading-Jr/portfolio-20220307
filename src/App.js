import './App.css';
import { Switch, Route } from 'react-router-dom';
import React, { forwardRef, useRef } from 'react';


import HomeView from './components/HomeView';
import Navbar from './components/Navbar';
import AboutMeView from './components/AboutMeView';
import ProjectsView from './components/ProjectsView';
import ContactInfoView from './components/ContactInfoView';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

const App = forwardRef(({ onBackClick }, ref) => {
  return (
    <Switch>
      <Route exact path="/">
        <h1 ref={ref}>An interesting article for Latin readers</h1>

        <HomeView />
        <Navbar />
        <div id='aboutme'>
          <AboutMeView />
        </div>
        <div className='bg-world-01' />
        <ProjectsView />
        <div className='bg-makati-skyline' />
        <ContactInfoView />
        <a href="#title"> Back to the top </a>
      </Route>
      <div className='bg-white'>
        <Route exact path="/aboutme">
          {/* <NavBarComp /> */}
          <AboutMeView />
        </Route>
        <Route exact path="/projects">
          {/* <NavBarComp /> */}
          <ProjectsView />
        </Route>
        <Route exact path="/contactinfo">
          {/* <NavBarComp /> */}
          <ContactInfoView />
        </Route>

      </div>
    </Switch>
  );
})

export default App;
