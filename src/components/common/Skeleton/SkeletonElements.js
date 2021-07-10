import React from 'react';
import './Skeleton.css'

function SkeletonElements({type}) {

    const classes =`skeleton ${type}`;
    return (
        <div>
            <div className={classes}>

            </div>
        </div>
    )
}

export default SkeletonElements
