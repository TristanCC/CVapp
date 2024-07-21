import React, { useState, useEffect } from 'react';

function ExperienceInput({ details, onSave, onCancel, onChange }) {
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
            <h3>Workplace</h3>
            <input 
                type="text" 
                name="workplace"
                value={inputDetails.workplace || ""}
                onChange={handleInputChange}
            />
            <h3>Title</h3>
            <input 
                type="text" 
                name="title"
                value={inputDetails.title || ""}
                onChange={handleInputChange}
            />
            <h3>Description</h3>
            <input 
                type="text" 
                name="description"
                value={inputDetails.description || ""}
                onChange={handleInputChange}
            />
            <h3>Date Started</h3>
            <input 
                type="text" 
                name="dateStarted"
                value={inputDetails.dateStarted || ""}
                onChange={handleInputChange}
            />
            <h3>Date Ended</h3>
            <input 
                type="text" 
                name="dateEnded"
                value={inputDetails.dateEnded || ""}
                onChange={handleInputChange}
            />
            <div className="flex">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onSave}>Save</button>
            </div>
        </div>
    );
}

export default ExperienceInput;
