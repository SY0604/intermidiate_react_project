import React from 'react';
import ProfileCard from '../components/ProfileCard';
import moon from '../assets/moon.png';
import lightbulb from '../assets/lightbulb.png';

const ReusableProfiles = () => {
    const profiles = [
        { name: 'Alice Johnson', description: 'Web Developer and Designer.', image: moon },
        { name: 'John Smith', description: 'Product Manager with 10 years of experience.', image: lightbulb },
    ];

    return (
        <div className="container">
            <h1>Reusable Profile Cards</h1>
            {profiles.map((profile, index) => (
                <div key={index} className="card">
                    <ProfileCard {...profile} />
                </div>
            ))}
            <a href="/" className="back-link">Back to Home</a>
        </div>
    );
};

export default ReusableProfiles;
