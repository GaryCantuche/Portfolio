import React from 'react';


function DecorationBar(props) {
  return (
    <div className="row border d-flex justify-content-center align-items-center bg-green" style={props.styles}>
        <div className="col ">
            <h1 className="display-4 text-center text-white">{props.texto}</h1>
        </div>
    </div>
  );
}

export default DecorationBar;