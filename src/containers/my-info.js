import React, { Component } from 'react';
import { ListGroup, Col, Row } from 'reactstrap';
import Items from '../components/list-items';
import UserModal from '../components/modal';
import Ionicon from 'react-ionicons';

class Myinfo extends Component {
    constructor() {
        super();
        this.state = {
            animated: false
        }
        this.HandelMouseOut = this.HandelMouseOut.bind(this);
        this.HandelonMouseOver = this.HandelonMouseOver.bind(this);
    }
    HandelMouseOut(e) {
        e.preventDefault();
        console.log(" mouse in out ");
        this.setState({ animated: false });
    }

    HandelonMouseOver(e) {
        e.preventDefault();
        console.log(" mouse in or over ");
        this.setState({ animated: true });
    }
    componentWillUnmount(){
        this.HandelMouseOut;
        this.HandelonMouseOver;
    }
    render() {
        return (
            <Col className="mb-2" sm={12}> 
        <h4 className="d-flex align-items-center" > <Ionicon icon="ios-information-circle" className="mr-2" fontSize="35px"  color="#4c5eab"/> My info links:</h4>
        
            <Row className="" onMouseOut={this.HandelMouseOut} onMouseOver={this.HandelonMouseOver} >
        <Col sm={12} className="h-25" style={{overFlow:"hidden"}}> 
        {this.props.excerpt}
         <UserModal 
         buttonLabel={" ... "}
         modalText={this.props.text}
         type={"info"}
         animate={this.state.animated !== false ? " tods tods-animated " : " tods "}
         /> 
        </Col>
        <Col sm={12} > 
            <ListGroup className="mt-3" >
      <Items listType={"my-info"}/>
       </ListGroup>
        </Col>
        </Row>

        
          </Col>


        );
    }
}

export default Myinfo;
