import React from 'react';
import logo from "./../images/playingDrums.jpg";

function AboutMe() {
    const titleTextDeveloper = "{Developer}";
    const titleTextMusician = "<Musician>";
    return (
        <div className="row justify-content-center row-about-me bg-light">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  p-0 w-100 d-flex align-items-center flex-column">
                <div className="w-100 h-50 d-flex align-items-center justify-content-center">
                    <h1 className="text-green font-size-title">{titleTextDeveloper}</h1>
                </div>
                <div className="w-75 h-50 text-center font-size-default">
                    Welcome! I'm Gary Cantuche, web developer in training. I love the world of development and learn new things every day. 
                    I studied at the IES JOAN RAMIS I RAMIS high school. 
                    I have completed a senior grade in Web Application Development and a medium grade in Microinformatic Systems and networks.
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 no-gutters d-flex justify-content-center align-items-center ">
                <img className="img-fluid rounded-circle border-green" src={logo} alt="That I'm I" />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  p-0 w-100 d-flex align-items-center flex-column">
                <div className="w-100 h-50 d-flex align-items-center justify-content-center">
                    <h1 className="text-green font-size-title">{titleTextMusician}</h1>
                </div>

                <div className="w-75 h-50 text-center font-size-default">
                    Also, I'm musician. I play drums and tenor trombone. I love music, I'm doing some concerts every year in my country.
                    I'm from Menorca, an small island from Spain.
                    I play with 2 bands and 2 marching bands. In some of that I play trombone and on the other I play drums.
                </div>
            </div>
        </div>
    );
}

export default AboutMe;