import React from 'react';
import BlogCard from '../components/BlogCard';
import moon from '../assets/moon.png';
import lightbulb from '../assets/lightbulb.png';

const PropsPractice = () => {
    const blogs = [
        {
            title: 'Understanding React Props',
            description: 'Props are used to pass data from parent to child components.',
            image: moon,
        },
        {
            title: 'Benefits of Reusable Components',
            description: 'Reusable components reduce code duplication and enhance consistency.',
            image: lightbulb,
        },
    ];

    return (
        <div className="container">
            <h1>Props Practice</h1>
            {blogs.map((blog, index) => (
                <div key={index} className="card">
                    <BlogCard {...blog} />
                </div>
            ))}
            <a href="/" className="back-link">Back to Home</a>
        </div>
    );
};

export default PropsPractice;
