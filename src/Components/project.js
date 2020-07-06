import React from 'react';

function Project(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default Project;