import React from 'react'
import { Link } from 'react-router-dom'

////////////////////////////////////////////////////
//  HOME VIEW
////////////////////////////////////////////////////

const HomeView = () => {
  return (<div className='bg-makati'>
    <div className='container'>
      <div className='text-white text-center' >
            {/* <img className='main-pic' src='https://i.ibb.co/51DFzGb/val-self-2022-02.jpg' alt='virgilio profile picture' /> */}
        {/* <div className=''> */}
          <br /><br /><br /><br /><br />
          <h1 className='text-yellow mt-3'><strong>Virgilio D. Cabading Jr.</strong></h1>
          <h2>Software Developer</h2>
          <br /><br />
          {/* <p>Hello, I am a highly motivated Software Developertransitioning from the healthcare industry<br/>with a B.S. in Informatics.My interests are many, but I am currently interested in<br/>expanding my knowledge on Javascript (React), Java (Spring) and Python (Flask).</p> */}
          <Link to="/aboutme" className='home-btn col btn m-3' >
            <h3><strong>About Me</strong></h3>
          </Link>
        {/* </div> */}
        {/* <div className='btn-row row'> */}
          {/* <Link to="/projects" className='home-btn col btn m-3' ><h3><strong>Projects 🍎</strong></h3></Link>
          <Link to="/contactinfo" className='home-btn col btn m-3' ><h3><strong>Contact info 📞</strong></h3></Link>
        </div> */}
      </div>
    </div>
  </div>)
}

export default HomeView