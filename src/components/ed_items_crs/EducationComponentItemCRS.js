import React, {Component} from "react";
import {connect} from 'react-redux';
import {deleteTrainingPlace,updateTrainingPlace} from '../../actions/'
import {/*Col, Container, Row,*/ Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from "reactstrap";
import "../../App.css";

class EducationComponentItemCRS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null
        };

        this.handelonCOnllectionUpdate = this.handelonCOnllectionUpdate.bind(this);
        this.onCollectionUpdate = this.onCollectionUpdate.bind(this);
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
    render() {
        let {data,editable} = this.props,
            [yearStr,monthStr,dayStr] =   data.time["start_date"].split("-"),
            [yearFnsh,monthFnsh,dayFnsh] =  data.time["finish_date"].split("-");  /*
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
                    <CardImg top width="100%" alt={`${data.name} - Malyi M.G. `} src={`../../images/${data.img[0].url}`} />
                    <CardBody className={`bg-${data.status!==0 ?"success":"warning"} text-white`}>
                        <CardTitle>{data.company}</CardTitle>
                        <CardSubtitle>{data.nameCrs}</CardSubtitle>
                        <CardText>
                            {this.makeDateObject(Number(yearStr), Number(dayStr), Number(monthStr))}
                            <br/>
                            {this.makeDateObject(Number(yearFnsh), Number(dayFnsh), Number(monthFnsh))}
                            <br/>

                            <Button>
                                status :
                            </Button>
                        </CardText>
                        <Button className={`m-1`} >
                            Button { typeof( data.status)}
                        </Button>
                        {editable?""
                            :<Button className={`btn-warning m-1 animated bounceIn`}>
                                change info
                            </Button>}
                        {editable?""
                            :<Button
                                onClick={(e)=>{
                                    e.preventDefault();
                                    this.props.deleteTrainingPlace(data.dbKeys)
                                }}
                                className={`btn-danger m-1 animated bounceIn`}>
                                Delete
                            </Button>}
                        {
                            editable?""
                                :<Button
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        this.props.updateTrainingPlace(data.dbKeys)
                                    }}
                                    className={`btn-info m-1 animated bounceIn`}>
                                    Update
                                </Button>
                            /*TODO:
                            first set  current data  to  the Form fields  =>
                            add some flag  to form status =>
                            dont forget to  add  validation to Form and make it possibly
                             to add link for images(special for GitHub pages)
                            * */
                        }
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
export default connect(mapStateToProps, mapDispatchToProps)(EducationComponentItemCRS)
//export default connect(mapStateToProps, mapDispatchToProps)(CvComponentMain)
