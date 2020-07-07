import React from 'react';
import android from "./../images/android.png";
import code from "./../images/code.png";
import computer from "./../images/computer.png";
import database from "./../images/database.png";
import Study from './Study';

function Studies (){    
    return(
        <div className="row row-studies d-flex align-items-center">
            <Study  
                title="Mobile Development"
                text="I learned android development. I learned views, layouts, file structure etc. I used Java and XML." 
                icon={android} 
                className={"col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-6"} 
                link={"projects"}
            />
            <Study  
                title="Web Development"
                text="I know lenguages JavaScript, PHP, HTML, CSS3, BootStrap, JQuery and React. " 
                icon={code} 
                className={"col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-6 "} 
                link={"projects"}
            />
            <Study  
                title="Desktop Apps"
                text="I created desktop apps with Java. I created an old game named MasterMind." 
                icon={computer} 
                className={"col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-6 "} 
                link={"projects"}
            />
            <Study  
                title="Database Management"
                text="I learned sql in highschool. I know queries and simple management. " 
                icon={database} 
                className={"col-xl-2 col-lg-3 col-md-3 col-sm-6 col-xs-6 "} 
                link={"projects"}
            />
        </div>
    );
}

export default Studies;