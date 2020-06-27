import React from 'react';


function DecorationBar(props) {
    const {styles,texto} = props;
  return (
    <div className="row border d-flex justify-content-center align-items-center bg-green" style={styles}>
        <div className="col ">
            <h1 className="display-4 text-center text-white">{texto}</h1>
        </div>
        
    </div>
  );
}

export default DecorationBar;