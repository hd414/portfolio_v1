import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

const SlideAnimation = () => {

    const location = useLocation();


    const [classes, setClasses] = useState('left-layer');
    useEffect(() => {
        setClasses(classes => ("left-layer"));
        setTimeout(() => {
            setClasses(classes => ("left-layer" + " active"));
        }, 400);
    }, [])


    return (
        <>

            <div className="container">
                <div className={classes}></div>
                <div className={`${classes} left-layer--2`}></div>
                <div className={`${classes} left-layer--3`}></div>
                <div className={`${classes} left-layer--4`}></div>
            </div>
        </>
    )
}

export default SlideAnimation
