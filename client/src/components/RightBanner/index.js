import React, { Component } from "react";

function RightButtons(props){
  return(
       <div className="container">
    <ul className="list-group list-group-flush">
  <li className={`list-group-item list-group-item-action ${props.active}`} onClick={props.onClick}>{props.title}</li>
</ul>
</div>
  )
}

export default RightButtons;
