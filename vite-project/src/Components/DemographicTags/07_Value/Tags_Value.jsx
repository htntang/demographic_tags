import React from 'react';

const ValueTags = () =>{
    return(
        <>
                {/* Value */}
                <h4>Value</h4>
                <span className="tag tag-value">$100-$499</span>
                <span className="tag tag-value">$500-$999</span>
                <span className="tag tag-value">$1000-$4999</span>
                <span className="tag tag-value">$5000-$10K</span>
                <span className="tag tag-value">$10K+</span>
        </>
    )
}

export default ValueTags;