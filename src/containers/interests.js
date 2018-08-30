import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Items from '../components/list-items';
import Ionicon from 'react-ionicons';

class Interests extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            heartColor: "#4c5eab"
        };
        this.HandelonMouseOut = this.HandelonMouseOut.bind(this);
        this.HandelonMouseOver = this.HandelonMouseOver.bind(this);
    }
    /* put them in /action*/
    HandelonMouseOut(e) {
        e.preventDefault();
        console.log(" mouse  out ");
        this.setState({ animated: false, heartColor: "#4c5eab" });
    }

    HandelonMouseOver(e) {
        e.preventDefault();
        console.log(" mouse  over ");
        this.setState({ animated: true, heartColor: "#FF0000" });
    }
    componentWillUnmount(){
        this.HandelonMouseOut;
        this.HandelonMouseOver;
    }
    render() {
        return (
            <Col onMouseOver={this.HandelonMouseOver} onMouseOut={this.HandelonMouseOut}  xs={12} sm={6} md={12}> 
        <h4 className="d-flex align-items-center"> 
        <div className=" mr-3 " style={{
                      borderRadius:"100px",
                      border:"2px solid #4c5eab", 
                      width:"35px",
                      height:"35px",
                      paddingTop:"1px",
                      paddingLeft:"4.5px",
                      display: "-webkit-inline-box",
                      transition:"1.5s"
                      }}> 
        <Ionicon style={{transition:"1.5s"}}  icon="md-heart" beat={this.state.animated}
        className="mr-2" fontSize="22px"  color={this.state.heartColor}/> 
        </div> 
        Interests</h4>
          <Row>
          <Items listType={"interests"}/>
          </Row>
          </Col>
        );
    }
}

export default Interests;
