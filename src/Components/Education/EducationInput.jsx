import React, { useState, useEffect } from 'react';

function EducationInput({ details, onChange, onSave, onCancel }) {
    const [inputDetails, setInputDetails] = useState(details);

    useEffect(() => {
        setInputDetails(details);
    }, [details]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedDetails = { ...inputDetails, [name]: value };
        setInputDetails(updatedDetails);
        onChange(updatedDetails);
    };

    return (
        <div>
            <h3>Institution Name</h3>
            <input 
                type="text" 
                name="institution" 
                value={inputDetails.institution || ''} 
                onChange={handleInputChange} 
            />
            <h3>Area of Study</h3>
            <input 
                type="text" 
                name="studyArea" 
                value={inputDetails.studyArea || ''} 
                onChange={handleInputChange} 
            />
            <h3>Date Started</h3>
            <input 
                type="number" 
                name="dateStarted" 
                value={inputDetails.dateStarted || ''} 
                onChange={handleInputChange} 
            />
            <h3>Date Ended</h3>
            <input 
                type="number" 
                name="dateEnded" 
                value={inputDetails.dateEnded || ''} 
                onChange={handleInputChange} 
            />
            <div className="flex">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onSave}>Save</button>
            </div>
        </div>
    );
}

export default EducationInput;
