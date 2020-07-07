import React from 'react';
import "./../../styles/home_css/home.css";
import DecorationBar from '../../Components/DecorationBar';
import AboutMe from './../../Components/AboutMe';
import Studies from '../../Components/Studies';

function Home() {

    return (
        <div className="container-fluid">
            <AboutMe />
            <DecorationBar 
                texto="What I learned?" 
                styles={styles.decorationBar} 
            />
            <Studies />
        </div>
    );
}

const styles = {
    decorationBar:{
        height:"20vh",
    },
}


export default Home;