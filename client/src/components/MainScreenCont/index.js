import React from 'react';
import "./style.css";

function MainScreenCont (props){
    
    return(
        <button className='btn btn-primary m-2 tablebtn'>{`Mesa ${props.table}`}</button>
    )
}

export default MainScreenCont;