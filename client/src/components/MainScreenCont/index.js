import React from 'react';
import "./style.css";

function SelectTable ({children}){
    
    return(
    <div className="container cscreen">

        <h1>Seleccione una Mesa</h1>
        <button className='btn btn-primary m-2 tablebtn'>Mesa 1</button>
        <button className='btn btn-primary m-2 tablebtn'>Mesa 2</button>
        <button className='btn btn-primary m-2 tablebtn'>Mesa 3</button>
        <button className='btn btn-primary m-2 tablebtn'>Mesa 4</button>
    </div>
    )
}

export default SelectTable;