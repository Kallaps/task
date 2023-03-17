import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
  return (
    <div >
        <h1 className='skills-title'>My Skills</h1>
        <div className='skillbar'>
     <h3>JS</h3>
     <ProgressBar now={50} variant='dark'/>
     <br/>
     <h3>HTML</h3>
     <ProgressBar now={70} variant='dark'/>
     <br/>
     <h3>CSS</h3>
     <ProgressBar now={65} variant='dark'/>
     <br/>
     <h3>React</h3>

     <ProgressBar now={30} variant='dark'/>
     <br/>

     </div>



    </div>
  )
}

export default Skills