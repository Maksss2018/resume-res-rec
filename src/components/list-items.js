import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap';
import Ionicon from 'react-ionicons';
import listArray from '../content/list-groups.json';
import SkillsPieContainer from './pie.js';
import UserModal from '../components/modal';
//   import { Items } from '../content/main.json';

class contacts extends Component {
    constructor() {
        super();
        this.state = {
            width: null
        }
        this.WindowResize = this.WindowResize.bind(this);
    }
    componentDidMount() {
        this.WindowResize;
        window.addEventListener("resize", this.WindowResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.WindowResize);
    }
    WindowResize() {

        let width = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        console.log(" width " + width);
        this.setState({ width });
    }


    render() {
        let listItems = null,
            listType = this.props.listType ? this.props.listType : null,
            readyList = [],
            listFromJson = listArray.lists.map((item) => { if (item.listType === listType) { return readyList = item.list } }); //this.props.list;
        switch (listType) {
            case 'contacts':
                listItems = readyList.map((item, i) => {
                    let width = this.state.width <= 976 && this.state.width !== null ? " text-center " : " text-left ";
                    return <ListGroupItem className={width+"contacts contacts-item"}    key={"contacts"+i} tag="a" href={item.link}>
                     <Ionicon icon={item.icon} className="mr-2" fontSize="25px"  color="white"/>
                    {item.text}
                    </ListGroupItem>

                });
                break;
            case 'my-info':
                listItems = readyList.map((item, i) => {

                    return <ListGroupItem className="my-info d-flex align-items-center"  key={"info"+i} tag="a" href={item.link} >
                                        <Ionicon icon={item.icon} className="mr-2" fontSize="25px"  color="#4c5eab"/>
                          {item.text}
                </ListGroupItem>

                });
                break;
            case 'experience':
                listItems = readyList.map((item, i) => {
                    let firstStickStyle = { height: "0%", top: "50%" },
                        lastStickStyle = { height: "0%", top: "0%" },
                        midelStick = { height: "0%", top: "0%" };


                    return <ListGroupItem id={i} key={"experience"+i} className="py-0  experience-item-wrapper experience-stick-list-containe" >
                    <Row>
                    
                    <Col className="d-flex align-items-center" xs={1}>
                    <div id={"experience-stick"+i} style={i !== 0 ? readyList.length - 1 !== i ? midelStick:lastStickStyle:firstStickStyle} className="stick-for-experience-list"></div>
                    <div  id={"experience-circle"+i} className="circel-for-experience-list">
                    </div>
                    </Col>
                    
                    <Col md={5} className="py-3 " style={{opacity:"0",transition:"1s"}} id={"links-experience-"+i}>
                    <ListGroup>
                    <ListGroupItem className="reference"   >{item.timeOnPosition}</ListGroupItem>
                    <ListGroupItem className="reference"  tag="a" href={item.link} >{item.linkText}</ListGroupItem>
                    <ListGroupItem className="reference"  >{item.PositionText}</ListGroupItem>
                    </ListGroup>
                    </Col>
                    
                    <Col md={6}  id={"text-experience-"+i} style={{opacity:"0",transition:"1s"}} className=" py-3 text-left ">
                    {item.shortAboutPosition}
                    </Col>
                    
                     </Row>
                      </ListGroupItem>

                });
                break;
            case 'awwards':
                listItems = readyList.map((item, i) => {

                    return <ListGroupItem className="awwards"  key={"awwards"+i} tag="a" href="#" > 
                    </ListGroupItem>

                });
                break;
            case 'references':
                listItems = readyList.map((item, i) => {

                    return <ListGroupItem id={i}  onMouseOver={this.props.HandelLightLinkFire} key={"references"+i} className="reference-list-containe" >
                    <div id={"stick"+i} className={ i!==0?"stick-for-list":i!==readyList.length-1?"stick-for-list-first":"stick-for-list-last"}></div>
                    <div  id={"circle"+i} className="circel-for-list">
                    </div>
                    <ListGroup  >
                    <ListGroupItem className="reference"   >{item.timeOnPosition}</ListGroupItem>
                    <ListGroupItem className="reference"  tag="a" href={item.link} >{item.linkText}</ListGroupItem>
                    <ListGroupItem className="reference"  >{item.PositionText}</ListGroupItem>
                    </ListGroup>
                      </ListGroupItem>
                });
                break;
            case 'interests':
                listItems = readyList.map((item, i) => {

                    return <Col style={{ minHeight:"80px"}} className="my-2"  key={"interests"+i} xs={3}>
                     <Row >
                     <Col sm={12} className="d-flex justify-content-center">
                     <div className=" justify-content-center" style={{
                      borderRadius:"100px",
                      backgroundColor:"#4c5eab",
                      width:"35px",
                      height:"35px",
                      paddingLeft:"1px",
                      display: "flex"
                      }}> 
               <Ionicon icon={item.icon} className="my-1 mx-1" fontSize="25px"  color="white"/> 
        </div>
                     </Col>
                    <Col sm={12}  className=" px-0 my-2 text-center" >
                    <span  >{item.text}</span>
                    </Col>
                     </Row>
                    </Col>
                });
                break;
            case 'skills':
                listItems = readyList.map((item, i) => {
                        return <UserModal 
                        key={"skills"+i}
         buttonLabel={item.icon}
         modalTitle={item.name}
         name={item.name}
         type={"skills"}
         class={"mx-3 my-3 py-1 skills-modal-buttons"}
         modalText={<SkillsPieContainer  item={item.barsValue} index={i}/>
                    }
                    /> 


                });
        break;
        case 'education':
            listItems = readyList.map((item, i) => {
                let firstStickStyle = { height: "0%", top: "50%" },
                    lastStickStyle = { height: "0%", top: "0%" },
                    midelStick = { height: "0%", top: "0%" };


                return <ListGroupItem  key={"education"+i} className="py-0 education-item-wrapper  experience-stick-list-containe" >
                    <Row>
                    
                    <Col className="d-flex align-items-center" xs={1}>
                    <div id={"education-stick"+i} style={i !== 0 ? readyList.length - 1 !== i ? midelStick:lastStickStyle:firstStickStyle} className="stick-for-experience-list"></div>
                    <div  id={"education-circle"+i} className="circel-for-experience-list">
                    </div>
                    </Col>
                    
                    <Col md={5} className="py-3 " style={{opacity:"0",transition:"1s"}} id={"links-education-"+i}>
                    <ListGroup>
                    <ListGroupItem className="reference"   >{item.timeOnPosition}</ListGroupItem>
                    <ListGroupItem className="reference"  tag="a" href={item.link} >{item.linkText}</ListGroupItem>
                    <ListGroupItem className="reference"  >{item.PositionText}</ListGroupItem>
                    </ListGroup>
                    </Col>
                    
                    <Col md={6}  id={"text-education-"+i} style={{opacity:"0",transition:"1s"}} className=" py-3 text-left ">
                    {item.shortAboutPosition}
                    </Col>
                    
                     </Row>
                      </ListGroupItem>
            });
            break;
        default:
            return <ListGroupItem className="contacts-item" >Put  you data </ListGroupItem>
    }

    return listItems
}
}

export default contacts;
