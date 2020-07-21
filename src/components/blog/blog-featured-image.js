import React from 'react';

const BlogFeaturedImage = props => {
    if (!props.img) {
        return null;
    }

    return (
        <div className="featured-image-url">
            <img src={props.img} />
        </div>
    );

};

export default BlogFeaturedImage;