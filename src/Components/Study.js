import React from 'react';
import Card from './Card';
import {useState} from "react";
function Study (props){
    const styles = {
        card:{
            height:"50vh",
            transition:"all 0.5s",
        }
    }

    const [cardHover,setCardHover] = useState();

    const onMouseEnter = () => {
        setCardHover("scale(1.1)");
    }

    const onMouseLeave = () => {
        setCardHover("scale(1)");
    }
   
    return(
        <div className={props.className}>
            <Card 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave} 
                title={props.title} 
                styles={{...styles.card,transform:cardHover}} 
                icon={props.icon}
                link={props.link} 
                text={props.text}/>
        </div>
    );
}

export default Study;