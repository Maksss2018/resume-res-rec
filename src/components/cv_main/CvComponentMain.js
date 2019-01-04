import React, {Component} from "react";

//import {connect} from 'react-redux'
//import {} from './actions/'

import {Col, Row} from "reactstrap";
import Contacts from "../../containers/contacts.js";
import YouPhoto from "../../content/img/user-photo.jpg";
import "../../App.css";
import UserInfo from "../../content/user-info.json";
import MyInfo from "../../containers/my-info.js";
import Interests from "../../containers/interests.js";
import References from "../../containers/references.js";
import Experience from "../../containers/experience.js";
import Education from "../../containers/education.js";
import Pie from "../../containers/pie.js";
class CvComponentMain extends Component {
    constructor() {
        super();
        this.state = {
            width: null
        };
        this.animatingWRapper = this.animatingWRapper.bind(null);
        this.WindowResize = this.WindowResize.bind(this);
    }
    componentDidMount() {
        let ArrayOfListItemsExp = document.getElementsByClassName("experience-item-wrapper"),
            ArrayOfListItemsEdu = document.getElementsByClassName("education-item-wrapper"),
            animatedItem = 0,
            // посмотреть вариант с использованием вариант cimoinentWillUnmount для прерывания интервала
            // animatedItem положить  state  и обнулить  при условии прохождения по всем  существующим елементам компонента
            firstInterval = setInterval(() => {
                animatedItem++;
                animatedItem !== ArrayOfListItemsExp.length + 1 ? this.animatingWRapper("experience", animatedItem, ArrayOfListItemsExp.length) : clearInterval(firstInterval);
            }, 700); //, 1200);
        setTimeout(() => {
            let animatedItem = 0,
                secondInterval = setInterval(() => {
                    animatedItem++;
                    animatedItem !== ArrayOfListItemsEdu.length + 1 ? this.animatingWRapper("education", animatedItem, ArrayOfListItemsEdu.length) : clearInterval(secondInterval)
                }, 700);
        }, ArrayOfListItemsExp.length * 1050);
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

        this.setState({ width });
    }

    animatingWRapper(nameOfcontainer, index, length) {
        let circle = document.getElementById(nameOfcontainer + "-circle" + (index - 1)),
            stick = document.getElementById(nameOfcontainer + "-stick" + (index - 1)),
            links = document.getElementById("links-" + nameOfcontainer + "-" + (index - 1)),
            text = document.getElementById("text-" + nameOfcontainer + "-" + (index - 1));
        stick.style.height = index !== 1 ? length !== index ? "100%" : "50%" : "50%";
        circle.style.height = "20px";
        circle.style.width = "20px";
        circle.style.left = "34px";
        text.style.opacity = "1";
        links.style.opacity = "1";
    }
    render() {
        let excerptAbout = UserInfo.about.slice(0, 200);
        return (
            <div>
                <Row>


                    <Col>



                    </Col>





                </Row>
                <Row className="header justify-content-center row ">

                    <div className={this.state.width<=1202?"container-fluid":"container"} >
                        <Row >

                            <Col   sm={12} md={12} lg={8}>
                                <Row className=" d-flex align-items-center" >
                                    <Col sm={12} md={6} lg={5} >
                                        <div className="my-3 my-md-2 d-flex align-items-center mx-auto circel-wrapper-for-img">
                                            <img src={YouPhoto}  className="mx-auto img-fluid" alt="JavaScript developer"/>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={7} >
                                        <h1   className={this.state.width<=756?" text-center  header-name ":"  header-name "} >
                                            {UserInfo.name}<br/><span className="profesion-name">{UserInfo.profetion}</span>
                                        </h1>
                                    </Col>
                                </Row>

                            </Col>
                            <Col  xs={12} md={6} lg={4}>

                                <Contacts width={ this.state.width }/>


                            </Col>

                        </Row>

                    </div>
                </Row>

                <div className={this.state.width<=1202?"container-fluid":"container"} >
                    <Row className="content">
                        <Col md={4}>
                            <Row className="px-3 pl-md-5 pb-5 pt-5 pr-2 d-flex justify-content-center">

                                <MyInfo
                                    excerpt={excerptAbout}
                                    text={UserInfo.about}
                                />

                                <Interests  />

                                <References />

                            </Row>
                        </Col>
                        <Col md={8}>
                            <Row className="p-xs-2 my-xs-2  my-md-4  p-md-3 p-lg-4 d-flex justify-content-center">
                                <Col sm={12}>

                                    <Experience/>

                                    <Education/>

                                    <Pie/>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default CvComponentMain;
/*
 const mapStateToProps = (state) => {
 return {
 auth: state.auth
 }
 }
 const mapDispatchToProps = (dispatch) => ({
 listViewData: () => dispatch(listViewData())
 })
 export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

*/