import React from 'react'
import './card.styles.css';
const Card = ({imgUrl,title,content}) =>{
    return (
        
        <div className="card text-center shadow background">
            <div className="overflow">
                <img src = {imgUrl} alt="computer" className="card-img-top image"/>
            </div>
            <div className="card-body ">
                <h4 className="card-title">
                  {title}
                </h4>
                {/* <p className="card-text text-secondary">
                   {content}
                </p>
                <a href="#" className="btn btn-outline-success">Go anywhere</a>
             */}
                 
            </div>
        </div>
    )
}
export default Card ;