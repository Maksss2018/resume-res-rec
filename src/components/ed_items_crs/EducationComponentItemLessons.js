import React, {Component} from "react";
import {connect} from 'react-redux';
import {deleteTrainingPlace,updateTrainingPlace} from '../../actions/'
import {/*Col, Container, Row,*/ Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input
} from "reactstrap";
import "../../App.css";

class EducationComponentItemLessons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            flagUpdate:false,
            updatesToSend:{}
        };

        this.handelonCOnllectionUpdate = this.handelonCOnllectionUpdate.bind(this);
        this.onCollectionUpdate = this.onCollectionUpdate.bind(this);
        this.HandelOnChanges = this.HandelOnChanges.bind(this);
        this.makeDateObject = this.makeDateObject.bind(null);
    }

    handelonCOnllectionUpdate =  (e)=>{
        e.preventDefault();

    };
    onCollectionUpdate = (querySnapshot) => {
        let crsList = [];
        querySnapshot.forEach((doc) => {
            const res = doc.data();
            crsList.push(res.data);
        });
        this.setState({crsList})
    };
    makeDateObject = (year,month,day) => {
        let date = new Date(year,day,month),
            trg =  `${date}`.split(" "),
            [ a,b,c, d,  ...other] =  trg;
        return(` ${d} ${b} ${c} ${a} `);
    };
    componentDidMount() {
    };
    componentDidUpdate(prevProps,prevState){
    };
    HandelOnChanges = (e)=>{
        e.preventDefault();
        let trg = e.target,
            value = trg.value,
            name = trg.name;
        this.setState({updatesToSend:{[name]:value}})
    };
    render() {
        let  {flagUpdate} = this.state,
            {data,editable} = this.props/*,
            [yearStr,monthStr,dayStr] =   data.time["start_date"].split("-"),
            [yearFnsh,monthFnsh,dayFnsh] =  data.time["finish_date"].split("-")*/;
        /*
        let listMain = crsList!==null?crsList.map((crs,ind)=>{
            return(ind);
        }):"loading...";*/
        /*
        "company":"Beetroot Academy",
        "nameCrs":"Advanced JavaScript",
        "status":0,
        "time":{"finish_date":"","real_hours":"","start_date":"","sup_hours":""}
        */
        return (
            <div>
                <Card>
                    <CardBody className={`bg-success text-white`}>
                        {data}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //   UserInfo: state.auth
    }
};
const mapDispatchToProps = (dispatch) => ({
    deleteTrainingPlace: (key) => dispatch(deleteTrainingPlace(key)),
    updateTrainingPlace: (key,newData,img) => dispatch(updateTrainingPlace(key,newData,img))
});
//export default withRouter (connect(mapStateToProps, false))(EducationComponentItemCRS)
export default connect(mapStateToProps, mapDispatchToProps)(EducationComponentItemLessons)
//export default connect(mapStateToProps, mapDispatchToProps)(CvComponentMain)
