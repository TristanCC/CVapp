import React, { useState } from 'react';
import hat from '../../assets/school.png';
import EducationInput from './EducationInput';
import CurrentEducation from './CurrentEducation';

function Education({educationDetails, setEducationDetails}) {
    
    const [currentInput, setCurrentInput] = useState({});

    function handleAddEducation() {
        setCurrentInput({ id: educationDetails.length, details: {} });
    }

    function handleSaveEducation() {
        if (currentInput.details) {
            setEducationDetails([...educationDetails, currentInput]);
            setCurrentInput({});
        }
    }

    function handleCancel() {
        setCurrentInput({});
    }

    function handleChangeInput(details) {
        setCurrentInput({ ...currentInput, details });
    }

    function handleRemoveEducation(index) {
        const newEducationDetails = educationDetails.filter((_, i) => i !== index);
        setEducationDetails(newEducationDetails);
    }

    return (
        <div className="edit-card">
            <div className="">
                <div className="edit-header">
                    <img src={hat} width="75" alt="hat" />
                    <h2>Education</h2>
                </div>
                <div className="dropdown" id="educationInput">
                    {educationDetails.map((education, index) => (
                        <CurrentEducation
                            key={index}
                            index={index}
                            details={education.details}
                            onRemove={handleRemoveEducation}
                        />
                    ))}
                    {Object.keys(currentInput).length > 0 && (
                        <EducationInput
                            key={currentInput.id}
                            onChange={handleChangeInput}
                            details={currentInput.details}
                            onSave={handleSaveEducation}
                            onCancel={handleCancel}
                        />
                    )}
                    <button onClick={handleAddEducation}>+ Education</button>
                </div>
            </div>
        </div>
    );
}

export default Education;
