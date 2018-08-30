import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'reactstrap';
import Items from '../components/list-items';
import Ionicon from 'react-ionicons';

class References extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            heartColor: "#4c5eab"
        };
        this.HandelonMouseOut = this.HandelonMouseOut.bind(this);
        this.HandelonMouseOver = this.HandelonMouseOver.bind(this);
        this.HandelLink = this.HandelLink.bind(this);
    }
   componentWillUnmount(){
        this.HandelonMouseOut;
        this.HandelonMouseOver;
        this.HandelLink;
   }
    /* put them in /action*/
    HandelonMouseOut(e) {
        e.preventDefault();
        this.setState({ animated: false, heartColor: "#4c5eab" });
    }

    HandelonMouseOver(e) {
        e.preventDefault();
        this.setState({ animated: true, heartColor: "#FF0000" });
    }
    HandelLink(e) {
        e.preventDefault();
        let id = e.target.id,
            lenght = document.getElementsByClassName("reference-list-containe").length,
            nextId = Number(id) + 1,
            circle = document.getElementById("circle" + id),
            stick = document.getElementById("stick" + id),
            next = document.getElementById("stick" + nextId);

        circle != null ? circle.style.backgroundColor = "yellow" : false;
        if (Number(id) !== 0 && Number(id) !== lenght - 1) {
            stick != null ? stick.style.borderColor = "lime" : false;
            next != null ? next.style.borderColor = "lime" : false;
        };

    }

    render() {
        return (

            <Col xs={12} sm={6} md={12}> 
        <h4 className = "d-flex align-items-center">  <div className="pl-1 mr-3 " style={{
                      borderRadius:"100px",
                      border:"2px solid #4c5eab", 
                      width:"35px",
                      height:"35px",
                      paddingTop:"0px",
                      display: "-webkit-inline-box"
                      }}> 
        <Ionicon icon="ios-people" className="mr-2" fontSize="25px"  color="#4c5eab"/> 
        </div>     Reference</h4>
          <Row className="pl-4 pl-sm-3">
          <ListGroup className="mx-4" style={{border:"0px"}} >
          <Items HandelLightLinkFire={this.HandelLink} listType={"references"}/>
          </ListGroup>
          </Row>
          </Col>
        );
    }
}

export default References;
