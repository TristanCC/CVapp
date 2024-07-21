import file from '../../assets/file-description.png';
import { useState } from 'react';
import ExperienceInput from './ExperienceInput';
import CurrentExperience from './CurrentExperience';

function Experience({experiences, setExperiences}) {
    
    const [currInput, setCurrInput] = useState({});

    function handleAddExperience() {
        setCurrInput({ id: experiences.length, details: {} });
    }

    function handleSaveExperience() {

        if (currInput.details) {
            setExperiences([...experiences, currInput]);
            setCurrInput({});
        }
    }

    function handleCancel() {
        setCurrInput({});
    }

    function handleRemove(index) {
        const newExperienceList = experiences.filter((_, i) => i !== index);
        setExperiences(newExperienceList);
    }

    function handleInputChange(details) {
        setCurrInput({ ...currInput, details });
    }

    return (
        <div className="edit-card">
            <div className="">
                <div className="edit-header">
                    <img src={file} width="75" alt="file" />
                    <h2>Experience</h2>
                </div>
                <div className="dropdown" id="experienceInput">
                    {experiences.map((experience, index) => (
                        <CurrentExperience
                            key={index}
                            index={index}
                            details={experience.details}
                            onRemove={handleRemove}
                        />
                    ))}
                    {Object.keys(currInput).length > 0 && (
                        <ExperienceInput
                            key={currInput.id}
                            details={currInput.details}
                            onSave={handleSaveExperience}
                            onCancel={handleCancel}
                            onChange={handleInputChange}
                        />
                    )}
                    <button onClick={handleAddExperience}>+ Experience</button>
                </div>
            </div>
        </div>
    );
}

export default Experience;
