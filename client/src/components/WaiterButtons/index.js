import React, { Component } from "react";

function WaiterButtons(props){
  return(
       <div className="container">
    <ul className="list-group list-group-flush">
  <li className={`list-group-item list-group-item-action ${props.active}`} onClick={props.onClick}>{props.menu}</li>
</ul>
</div>
  )
}

export default WaiterButtons;
