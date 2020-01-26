import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import MainScreenCont from '../components/MainScreenCont';
import WaiterButtons from "../components/WaiterButtons";
import RightBanner from "../components/RightBanner";

//Nombre de botones
const RightTools=["Seleccionar Mesa","Juntar","Cobrar"];
const menu=["Orden Nueva","Orden Existente","Cerrar Orden","Mapa","Otros"];


class Mesero extends Component {
  state = {
    active:Array(menu.length).fill(null),
    active2:Array(RightTools.length).fill(null),
    selected:null,
    ordenNueva:false,
  };

//----Cambiar color al banner de la izq--//
renderButton(i){
  return(
    <WaiterButtons 
    menu={menu[i]}
    active={this.state.active[i]}
    onClick={()=>this.handleClick(i)}/>
  );
}
handleClick(i){
  const active = this.state.active.slice();
  if (active[i] == null){
    active.fill(null);
    active[i] ="active"
  }

  this.setState({
    active: active,
    selected:i
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



  render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-2">
        {this.renderButton(0)}
        {this.renderButton(1)}
        {this.renderButton(2)}
        {this.renderButton(3)}
        {this.renderButton(4)}
        </Col>
        <Col size="md-8">
          {this.state.selected ==0 ? (<MainScreenCont/>):(<h1>Bienvenido!</h1>)}
        </Col>
        <Col size="md-2">
        {this.state.selected ==0 ? (
          this.renderRigthButton(0)):(<h4>Productos recomendados</h4>)}
          {this.state.selected ==0 ? (
          this.renderRigthButton(1)):(<h1/>)}
          {this.state.selected ==0 ? (
          this.renderRigthButton(2)):(<h1/>)}
  
        </Col>
      </Row>
    </Container>
  );
}
}

export default Mesero;