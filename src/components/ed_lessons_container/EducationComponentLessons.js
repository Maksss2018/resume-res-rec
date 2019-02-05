import React, {Component} from "react";
import {connect} from 'react-redux'
//import {} from './actions/'
import {Col, Container, Row} from "reactstrap";
import EducationComponentItemLessons from "../../components/ed_items_crs/EducationComponentItemLessons.js";
import EducationForm from "../../components/ed_form/EducationForm.js";
import firebase from "../../database/dbscript.js";
/*TODO:
* get company name from router props
* put them 17 row  get full list of lessons
* */

//   /education/lessons/FJVmZtgkFYRFQ24NYRmf/msmsm
class EducationComponentLessons extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.ref = firebase.firestore()
            .collection(`education/${this.props.match.params.name}/lessons/`);
        this.state = {
            width: null,
            UserInfo:null||this.props.UserInfo,
            crsList:null
        };
        this.handelonCOnllectionUpdate = this.handelonCOnllectionUpdate.bind(this);
        this.onCollectionUpdate = this.onCollectionUpdate.bind(this);
    }

    handelonCOnllectionUpdate =  (e)=>{
        e.preventDefault();
        this.unsubscribe =  this.ref.onSnapshot(this.onCollectionUpdate);

    };
    onCollectionUpdate = (querySnapshot) => {
        let crsList = [];
        querySnapshot.forEach(function(doc){
            const res = doc.data(),
                dbKeys =doc.id;
            console.log("+++"+JSON.stringify(res));
            crsList =[...crsList,{dbKeys,...res}];
        });

        this.setState({crsList})
    };

    componentDidMount() {
        this.unsubscribe =  this.ref.onSnapshot(this.onCollectionUpdate);

    }
    componentDidUpdate(prevProps,prevState){
        // let  {UserInfo} = this.props;
    }
        render() {
        let { crsList } = this.state,
            { params } = this.props.match,
             total=crsList!==null?crsList.filter(db => db.dbKeys=="total" )  :"...loading";
        return (

            <Container>
                <Row className={` py-3 `}>
                    <Col>
                        <h3>
                            Lessons page
                        </h3>
                        {JSON.stringify(crsList)}
                  <h5>
                      {JSON.stringify(total)}
                  </h5>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        UserInfo: state.auth
    }
};
/*
const mapDispatchToProps = (dispatch) => ({
    listViewData: () => dispatch(listViewData())
})
*/
export default connect(mapStateToProps, false)(EducationComponentLessons)
//export default connect(mapStateToProps, mapDispatchToProps)(CvComponentMain)
