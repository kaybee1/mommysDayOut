import React from 'react';
import styled from "styled-components";
import API from "../../../utils/API";
import { Card, CardTitle, CardText, Col } from 'reactstrap';

  const Div = styled.div`
    height: 80px;
    padding: 30px;
    background-color: white;
    border-radius:5px;
    margin: 20px 50px;
    &:hover {
       background-color: blue;
     }
    `;

  const Button = styled.button`
    background-color: white;
    color: blue;
    border-radius: 5px;
    font-size: 2em;
    font-family: "Abril Fatface";
    margin-left: 50px;
    width: 150px;

    &:hover {
       background-color: blue;
       color: white;
     }
    `;


export default class Example extends React.Component {

 handleMassageBtn(e){
   e.preventDefault();
   API.getPlace()
 }

 handleShoppingBtn(e){
   e.preventDefault();
   API.getPlace()
 }

 handleHairSalonBtn(e){
   e.preventDefault();
   API.getPlace()
 }

  render() {
    return (
    <div>
      <Div>
        <Button onClick={(e) =>this.handleMassageBtn(e)}>Massage</Button>
        <Button onClick={(e) =>this.handleShoppingBtn(e)}>Shopping</Button>
        <Button onClick={(e) =>this.handleHairSalonBtn(e)}>Hair Salon</Button>
      </Div>
      <div>
        <Col sm="4">
          <Card body>
            <CardTitle id="formatted-address"></CardTitle>
            <CardText id="address-component"></CardText>
            <CardText></CardText>
          </Card>
      </Col>
      </div>
    </div>
       );
     }
  }
