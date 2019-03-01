import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.min.css';
import './css/fontawesome-free/css/all.min.css';
import './css/resume.min.css';
import Nav from './components/nav';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import resumeData from './resume-data';

class App extends Component {
  render() {
    return (
      <div>
        <Nav resumeData={resumeData} />
        
  <div class="container-fluid p-0">

<About resumeData={resumeData} />
<hr className="m-0" />
              

<Experience  resumeData={resumeData} />
              <hr className="m-0" />
              
<Skills resumeData={resumeData} />
        

<Education  resumeData={resumeData} />
              <hr className="m-0" />
              


        </div>
        
      </div>
    );
  }
}

export default App;
