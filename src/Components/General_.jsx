import React from 'react';
import user from '../assets/user-circle.png';

function General_({ generalDetails, setGeneralDetails }) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setGeneralDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    return (
        <div className="edit-card">
            <div className="">
                <div className="edit-header">
                    <img src={user} width="75" height="75" alt="User" />
                    <h2>General Info</h2>
                </div>
                <div className="dropdown">
                    <h3>Name</h3>
                    <input
                        type="text"
                        name="name"
                        value={generalDetails.name}
                        onChange={handleChange}
                    />
                    <h3>Email</h3>
                    <input
                        type="text"
                        name="email"
                        value={generalDetails.email}
                        onChange={handleChange}
                    />
                    <h3>Phone Number</h3>
                    <input
                        type="text"
                        name="phone"
                        value={generalDetails.phone}
                        onChange={handleChange}
                    />
                    <h3>Address</h3>
                    <input
                        type="text"
                        name="address"
                        value={generalDetails.address}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default General_;
