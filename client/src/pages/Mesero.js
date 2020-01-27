import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import MainScreenCont from '../components/MainScreenCont';
import WaiterButtons from "../components/WaiterButtons";
import RightBanner from "../components/RightBanner";

//Nombre de botones
const RightTools=["Seleccionar Mesa","Juntar","Cobrar"];
const menu=["Orden Nueva","Orden Existente","Cerrar Orden","Mapa","Otros"];
const tables=[1, 2, 3, 4]

class Mesero extends Component {
  state = {
    active:Array(menu.length).fill(null),
    active2:Array(RightTools.length).fill(null),
    buttonSelected:null,
    ordenNueva:false,
    availableTables:tables,
    unavailableTables:Array(tables.length).fill(null)
  };

//----Cambiar color al banner de la izq--//

handleClick(i){
  const active = this.state.active.slice();
  if (active[i] == null){
    active.fill(null);
    active[i] ="active"
  }

  this.setState({
    active: active,
    buttonSelected:i
  });
}
//------------------//-----------------//

//---Cambiar color al banner de la derecha--//
renderRigthButton(i){
  return(
  <RightBanner title={RightTools[i]}
  active={this.state.active2[i]}
  onClick={()=>this.handleClick2(i)}/>)
}

handleClick2(i){
  const active = this.state.active2.slice();
  if (active[i] == null){
    active.fill(null);
    active[i] ="active"
  }

  this.setState({
    active2: active
  });
}
//----------------//-------//-----------//
//renderTables(){}
//renderWaiterButtons()
renderSwitch(param){
  switch (param) {
    case 0:
      
      let tables =[]
      tables.push( <h1>Seleccione una Mesa</h1>)
      for (let index = 0; index < this.state.availableTables.length; index++) {
      tables.push(<MainScreenCont table={index+1}/>)
      }
      
      return(tables)     
    break;
    case 1:
      
    case 2:
      
    default:
      break;
  }
}

  render() {
  console.log()  
  return (
    <Container fluid>
      <Row>
        <Col size="md-2">
        {this.renderLoopButtons()}

        </Col>
        <Col size="md-8">
          {this.renderSwitch(this.state.buttonSelected)}
        </Col>
        <Col size="md-2">
        {this.state.buttonSelected ==0 ? (
          this.renderRigthButton(0)):(<h4>Productos recomendados</h4>)}
          {this.state.buttonSelected ==0 ? (
          this.renderRigthButton(1)):(<h1/>)}
          {this.state.buttonSelected ==0 ? (
          this.renderRigthButton(2)):(<h1/>)}
  
        </Col>
      </Row>
    </Container>
  );
}
}

export default Mesero;