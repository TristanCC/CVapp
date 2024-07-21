function Resume({generalDetails, experiences, educationDetails}) {


    return (

        <div className="resume">
            <div className="experiences">
                <h2>{generalDetails.name}</h2>
                <h2>{generalDetails.email}</h2>
                <h2>{generalDetails.phone}</h2>
                <h2>{generalDetails.address}</h2>
            </div>
            <div className="experiences">
                {educationDetails.map((education) => (
                    <div className="experience">
                        <h2>{education.details.institution}</h2>
                        <h2>{education.details.studyArea}</h2>
                        <h2>{education.details.dateStarted} - {education.details.dateEnded}</h2>
                    </div>
                ))}
            </div>
            <div className="experiences">
                {experiences.map((experience) => (
                    <div className="experience">
                        <h2>{experience.details.workplace}</h2>
                        <h2>{experience.details.title}</h2>
                        <h2>{experience.details.description}</h2>
                        <h2>{experience.details.dateStarted} - {experience.details.dateEnded}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume