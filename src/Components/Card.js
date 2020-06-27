import React from 'react';


function Card (props){
    const {title,text,link,styles,icon,onMouseEnter,onMouseLeave} = props;
    return(
         <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={styles} className="card shadow-default">
            <span className="text-center d-flex align-items-center justify-content-center h-25"><img src={icon} alt="icon" /></span>
            <div className="card-body d-flex justify-content-around flex-column align-items-center">
                <h4 className="card-title text-center font-weight-bold">{title}</h4>
                <p className="car-text text-center font-size-card">{text}</p>
                <a href={link} className="btn btn-green text-white">¡Look!</a>
            </div>
         </div>
    );
}

export default Card;
