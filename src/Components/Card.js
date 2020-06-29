import React from 'react';
import {Link} from 'react-router-dom';

function Card (props){
    return(
         <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} style={props.styles} className="card shadow-default">
            <span className="text-center d-flex align-items-center justify-content-center h-25"><img src={props.icon} alt="icon" /></span>
            <div className="card-body d-flex justify-content-around flex-column align-items-center">
                <h4 className="card-title text-center font-weight-bold">{props.title}</h4>
                <p className="car-text text-center font-size-card">{props.text}</p>
                <Link to={props.link} className="btn btn-green text-white">¡Look!</Link>
            </div>
         </div>
    );
}

export default Card;
