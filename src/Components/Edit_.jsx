import General_ from "./General_"
import Education from "./Education/Education"
import Experience from "./Experience/Experience"


function Edit({generalDetails,setGeneralDetails, experiences, educationDetails, setExperiences, setEducationDetails}) {


    return (
        <>
        <div className="edit">
            <General_
            generalDetails={generalDetails}
            setGeneralDetails={setGeneralDetails}
            />
            <div className="edit-card">
            <Education
            educationDetails = {educationDetails}
            setEducationDetails = {setEducationDetails}
            />
            </div>
            <div className="edit-card">
            <Experience
            experiences = {experiences}
            setExperiences = {setExperiences}
            />
            </div>
        </div>
        
        </>
    )
}

export default Edit