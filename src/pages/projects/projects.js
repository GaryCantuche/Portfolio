import React from 'react';
import Project from '../../Components/project';
import Study from '../../Components/Study';
import bookIcon from './../../images/bookIcon.png';
import dumbellIcon from './../../images/dumbellIcon.png';
import javaIcon from './../../images/javaIcon.png';
import androide from './../../images/androide.png';


function Projects() {
    return (
        <div className="container-fluid">
            <Project className="row row-studies d-flex align-items-center">
                <Study  
                    title="PHP Library"
                    text="I develop a simple Library webpage with PHP and AJAX"  
                    className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"} 
                    link={"projects/phplibrary"}
                    icon={bookIcon}
                />
                <Study  
                    title="MasterMind"
                    text="In high school we develop an old game called MasterMind with Java 8."  
                    className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"} 
                    link={"projects/mastermind"}
                    icon={javaIcon}
                />
                <Study  
                    title="Nutrivive Web"
                    text="My final project in High School was a webpage called Nutrivive."  
                    className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"} 
                    link={"projects/nutriviveweb"}
                    icon={dumbellIcon}
                />
                <Study  
                    title="Nutrivive App"
                    text="This app is a part of Nutrivive App. Was develop with Android and Firebase."  
                    className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"} 
                    link={"projects/nutriviveapp"}
                    icon={androide}
                />
            </Project>            
        </div>
    );
}
export default Projects;