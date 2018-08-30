import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import Items from "../components/list-items";
import Ionicon from "react-ionicons";

class Experience extends Component {


    render() {
        return (
            <Row>
        <Col xs={12} > 
        <h4 className="d-flex align-items-center" ><div className="align-content-center mr-3 " style={{
                      borderRadius:"100px",
                      backgroundColor:"#4c5eab",
                      width:"35px",
                      height:"35px",
                      paddingTop:"0px",
                      paddingLeft:"1px",
                      display: "-webkit-inline-box"
                      }}> 
        <Ionicon icon="ios-briefcase" className="ml-1 mt-1" fontSize="25px"  color="white"/> 
        </div>
        Work Experience</h4>
            <Row className="p-3">
                    <Items listType={"experience"}/>
                </Row>
          </Col>
        </Row>
        );
    }
}

export default Experience;
