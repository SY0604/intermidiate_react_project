import React from 'react';

const ProfileCard = ({ name, image, description }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', margin: '10px' }}>
            <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProfileCard;
