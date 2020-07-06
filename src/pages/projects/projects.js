import React from 'react';
import Project from '../../Components/project';
import Study from '../../Components/Study';
import bookIcon from './../../images/bookIcon.png';
import dumbellIcon from './../../images/dumbellIcon.png';
import javaIcon from './../../images/javaIcon.png';


function Projects() {
    return (
        <div className="container-fluid">
            <Project className="row row-studies d-flex align-items-center">
                <Study  
                    title="PHP Library"
                    text="I develop a simple Library webpage with PHP and AJAX"  
                    className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"} 
                    link={"projects"}
                    icon={bookIcon}
                />
                <Study  
                    title="MasterMind"
                    text="In high school we develop an old game called MasterMind with Java 8."  
                    className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"} 
                    link={"projects"}
                    icon={javaIcon}
                />
                <Study  
                    title="Nutrivive Web"
                    text="My final project in High School was a webpage called Nutrivive."  
                    className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"} 
                    link={"projects"}
                    icon={dumbellIcon}
                />
            </Project>            
        </div>
    );
}

const styles = {
    decorationBar:{
        height:"20vh",
    },
}


export default Projects;