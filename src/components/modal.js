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
        let  {modalText,type, animate,buttonLabel,modalTitle,name} = this.props,
            button = type !== "skills" && type !== null ? <a href="#" className={animate} onClick={this.toggle}>{buttonLabel}</a> :
            <a href="#"  onMouseOver={this.handelIconchange.bind(this)}
               onMouseOut={this.handelIconchange.bind(this)}
               className={`${this.props.class} mx-3 my-3 py-1 skills-modal-buttons `}
               onClick={this.toggle}>
                {buttonLabel!=="PHP"?<Ionicon
                    shake={this.state.animate}
                    color={this.state.color}
                    icon={buttonLabel}
                    className="mr-2"
                    fontSize="55px" />
                    : <span className=" php">{name}</span>} </a>;
        return (
            <span>
         {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
          <ModalBody>
          {modalText}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </span>
        );
    }
}

export default UserModal;
