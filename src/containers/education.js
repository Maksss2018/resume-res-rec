import React, {Component} from "react";
import {Col, Row} from "reactstrap";
import Items from "../components/list-items";
import Ionicon from "react-ionicons";

class Education extends Component {


    render() {
        return (
            <Row>
        <Col xs={12} > 
        
        <h4 className="d-flex align-items-center" > 
        <div className=" align-content-center mr-3 " style={{
                      borderRadius:"100px",
                      border:"2px solid #4c5eab", 
                      width:"35px",
                      height:"35px",
                      paddingLeft:"3px",
                      display: "-webkit-inline-box"
                      }}> 
        <Ionicon icon="md-school" className="mr-2" fontSize="25px"  color="#4c5eab"/> 
        </div>  Education</h4>
            <Row className="p-3">
                    <Items listType={"education"}/>
                </Row>
          </Col>
        </Row>
        );
    }
}

export default Education;
