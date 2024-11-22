import React from 'react';

const BlogCard = ({ title, description, image }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', margin: '10px' }}>
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default BlogCard;
