import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomeView from './components/HomeView';
import Navbar from './components/Navbar';
import NavBarComp from './components/NavBarComp';
import AboutMeView from './components/AboutMeView';
import ProjectsView from './components/ProjectsView';
import ContactInfoView from './components/ContactInfoView';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

function App() {



  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
        <Navbar />
        <AboutMeView />
        <ProjectsView />
        <ContactInfoView />
      </Route>
      <div className='bg-white'>
        <Route exact path="/aboutme">
          <NavBarComp />
          <AboutMeView />
        </Route>
        <Route exact path="/projects">
          <NavBarComp />
          <ProjectsView />
        </Route>
        <Route exact path="/contactinfo">
          <NavBarComp />
          <ContactInfoView />
        </Route>

      </div>
    </Switch>
  );
}

export default App;
