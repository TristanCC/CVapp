import { useState } from 'react'
import './App.css'
import Edit from './Edit_'
import Resume from './Resume'

function App() {

  const [generalDetails, setGeneralDetails] = useState({})
  const [educationDetails, setEducationDetails] = useState([]);
  const [experiences, setExperiences] = useState([]);

  return (
    <>
      <div className='wrapper'>
        <Edit
        generalDetails={generalDetails}
        setGeneralDetails = {setGeneralDetails}
        experiences = {experiences}
        educationDetails = {educationDetails}
        setExperiences = {setExperiences}
        setEducationDetails = {setEducationDetails}
        />
        <Resume
        generalDetails = {generalDetails}
        experiences = {experiences}
        educationDetails = {educationDetails}
        />
      </div>
    </>
  )
}

export default App
