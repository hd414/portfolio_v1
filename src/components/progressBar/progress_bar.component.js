import React from 'react';
import './progress_bar.styles.css'

const ProgressBar = ({ title, value }) => {
    return (
        <div className="progressBar">
            <h4 className="title">{title}</h4>
            <div className="progressBarContainer">
                <div className={`progressBarValue value-${value}`}></div>
            </div>
        </div>
    )
}

export default ProgressBar
