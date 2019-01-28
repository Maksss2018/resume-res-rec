import React from 'react'
import {connect} from 'react-redux'
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';




class EducationForm extends React.Component {
    constructor(props) {
        super(props);
       // this.handelReloadComments = this.handelReloadComments.bind(this);
        this.onSending =this.onSending.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
        this.state = {
            text: null,
            issueId: null
        };
    }

    onChangeData(e) {
        e.preventDefault();
        let name = e.target.name ,
            val = e.target.value;

        this.setState({ [name]:val });
       // console.log(" name of  target "+action);
        console.log(" name of  target "+name);
    }
    onSending(e) {
        e.preventDefault();
        let //{inputs} = this.props,
            { text } = this.state;

        console.log(" this.state "+JSON.stringify(this.state));
       // this.props.setComment({value: prevIssues!==null?[text,...prevIssues]:[text], ...data});
     //   this.handelReloadComments;
    }/*
    handelReloadComments(){
       // this.props.publishComment;
    }*/
    render() {
        let {inputs} = this.props,
            inpt =  inputs!==null?inputs.map((inp,ind)=>{
                let { classN, action,
                    type, name, id, placeHldr }  = inp;
                switch (type) {
                    case "select":
                        let { options}  = inp;
                    return( <Input
                        className={classN}
                        onChange={this.onChangeData}
                        type={type}
                        placeholder={placeHldr}
                        name={name}
                        key={`${name}-${ind}-${type}`}
                        id={`${name}-${ind}-${type}`} >
                        {options.map((opt,ind)=>{
                            return(<option key={`~${ind}`} value={ind} >{opt}</option>);
                        })}
                        </Input>
                        );
                    case "number":
                        return( <Input
                            className={classN}
                            onChange={this.onChangeData}
                            type={type}
                            placeholder={placeHldr}
                            name={name}
                            key={`${name}-${ind}-${type}`}
                            id={`${name}-${ind}-${type}`} />);

                    default:
                        return( <Input
                            className={classN}
                            onChange={this.onChangeData}
                            type={type}
                            placeholder={placeHldr}
                            name={name}
                            key={`${name}-${ind}-${type}`}
                            id={`${name}-${ind}-${type}`} />)
                }


            }): <Input
                className={" text-body "}
                onChange={this.onChangeData}
                type="textarea"
                name="text"
                id={`text-`} />;
        return (  <Form onSubmit={this.onSending} >
            <FormGroup>
                {inpt}
            </FormGroup>
            <Row>
                <Col className='d-flex align-items-center justify-content-center'>
                    <Button> Publish </Button>
                </Col>
            </Row>
        </Form>);
    }

}

const mapStateToProps = (state) => {
    return {
       /*
       auth: Object.assign({},state.auth),
        projects: Object.assign([],state.projects),
        projectsIssues:Object.assign([],state.projectsIssues)
        */
    }
};
const mapDispatchToProps = (dispatch) => ({
 //   setComment: (obj)=>dispatch(setComment(obj)), //obj.prjID / obj.issueID / obj.value
    //getListOfProjectIssues :(id,cookies)=>dispatch(getListOfProjectIssues(id,cookies))
    //getByID : (i,crnt)=>dispatch(getByID(i,crnt))
    //  listViewData: () => dispatch(listViewData())
});
export default connect(mapStateToProps, mapDispatchToProps)(EducationForm);
