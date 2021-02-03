import React from 'react';
import Card from './card.component';
import './card.styles.css';
export default function CardList() {
    return (
        <div className=" d-flex justify-content-center background">
            <div className="row">
            <div className="col-md-4">
                    <Card imgUrl={'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'} title={"Gaming"}/>
                </div> 
                <div className="col-md-4">
                    <Card imgUrl={'https://images.unsplash.com/photo-1588811752802-af42bad9f378?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} title={"Coding"}/>
                </div> 
                <div className="col-md-4">
                    <Card imgUrl={'https://i.pinimg.com/originals/de/f4/33/def433c494fd66317df414bb0b905f26.jpg'} title={"movies and anime"}/>
                </div> 
            </div>
        </div>
    )
}
