import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import Items from '../components/list-items';

class contacts extends Component {
    render() {
        return (
            <ListGroup className="mt-3" >
      <Items width = { this.props.width } listType={"contacts"}/>
       </ListGroup>
        );
    }
}

export default contacts;
