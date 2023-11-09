import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Technicalskills from './Components/Technicalskills';
import Clubs from './Components/Clubs';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='assemble'>
      <About /> 
        <table>
          <tr>
            <td>
            <Education />            
            </td>
            <td>
            <Technicalskills />             
            </td>
          </tr>
          <tr>
            <td>
            <Clubs />            
            </td>
            <td>
            <Projects />
            </td>
          </tr>
        </table>
      
      
      
      
      
      </div>
      <Contact />

    </div>
  );
}

export default App;
