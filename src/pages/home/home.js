import React from 'react';
import "./../../styles/home_css/home.css";
import DecorationBar from '../../Components/DecorationBar';
import AboutMe from './../../Components/AboutMe';
import Card from '../../Components/Card';
import android from "./../../images/android.png";
import code from "./../../images/code.png";
import {useState} from "react";

function Home() {
    const [cardHover1,setCardHover1] = useState();
    const [cardHover2,setCardHover2] = useState();
    const [cardHover3,setCardHover3] = useState();

    const onMouseEnter = (card) => {
        if(card === 1){
            setCardHover1("scale(1.1)");
        }else if(card === 2){
            setCardHover2("scale(1.1)");
        }else if(card===3){
            setCardHover3("scale(1.1)");
        }
        
    }

    const onMouseLeave = (card) => {
        if(card === 1){
            setCardHover1("scale(1)");
        }else if(card === 2){
            setCardHover2("scale(1)");
        }else if(card===3){
            setCardHover3("scale(1)");
        }
    }

    return (
        <div className="container-fluid">
            <AboutMe />
            <DecorationBar texto="What I learned?" styles={styles.decorationBar} />
            <div className="row row-studies d-flex align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-6 offset-xl-2 offset-lg-0 offset-md-0">
                    <Card onMouseEnter={() => onMouseEnter(1)} onMouseLeave={() => onMouseLeave(1)} title="Mobile Development" styles={{...styles.card,transform:cardHover1}} icon={android} text="I learned basic Android development, I use Java and XML for do an Aplications."/>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-6 offset-xl-1 offset-lg-0 offset-md-0">
                    <Card onMouseEnter={() => onMouseEnter(2)} onMouseLeave={() => onMouseLeave(2)} title="Web Development" styles={{...styles.card,transform:cardHover2}} icon={code} text="I learned basic Android development, I use Java and XML for do an Aplications."/>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-6 offset-xl-1 offset-lg-0 offset-md-0">
                    <Card onMouseEnter={() => onMouseEnter(3)} onMouseLeave={() => onMouseLeave(3)} title="Web Development" styles={{...styles.card,transform:cardHover3}} icon={code} text="I learned basic Android development, I use Java and XML for do an Aplications."/>
                </div>
            </div>
        </div>
    );
}

const styles = {
    decorationBar:{
        height:"20vh",
    },
    card:{
        height:"50vh",
        transition:"all 0.5s",
    }
}


export default Home;