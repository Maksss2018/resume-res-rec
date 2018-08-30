import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Ionicon from 'react-ionicons';
class UserModal extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            color: "#4c5eab",
            animate: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handelIconchange() {
        this.setState({
            animate: !this.state.animate
        });
    }
    render() {
        let button = this.props.type !== "skills" && this.props.type !== null ? <a href="#" className={this.props.animate} onClick={this.toggle}>{this.props.buttonLabel}</a> : <a href="#"  onMouseOver={this.handelIconchange.bind(this)} onMouseOut={this.handelIconchange.bind(this)} className={this.props.class} onClick={this.toggle}>{this.props.buttonLabel!=="PHP"?<Ionicon shake={this.state.animate} color={this.state.color} icon={this.props.buttonLabel} className="mr-2" fontSize="55px" />: <span className=" php">{this.props.name}</span>} </a>;
        return (
            <span>
         {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.modalTitle}</ModalHeader>
          <ModalBody>
          {this.props.modalText}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </span>
        );
    }
}

export default UserModal;
