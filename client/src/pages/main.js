import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

function Main() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Bienvenido</h1>
            <Link role="button" class="btn btn-outline-primary m-1" to="/mesero">Meseros</Link>
            <Link role="button" class="btn btn-outline-primary m-1" to="/books">Caja</Link>
            <Link role="button" class="btn btn-outline-primary m-1" to="/books">Cocina</Link>
            <style>{"\
        .{\
          color:red;\
        }\
      "}</style>
          
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
