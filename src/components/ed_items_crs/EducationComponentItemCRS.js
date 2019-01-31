import React, {Component} from "react";
import {connect} from 'react-redux';
import {deleteTrainingPlace,updateTrainingPlace} from '../../actions/'
import {/*Col, Container, Row,*/ Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input
} from "reactstrap";
import "../../App.css";

class EducationComponentItemCRS extends Component {
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
            {data,editable} = this.props,
            [yearStr,monthStr,dayStr] =   data.time["start_date"].split("-"),
            [yearFnsh,monthFnsh,dayFnsh] =  data.time["finish_date"].split("-");
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
                    <CardImg top width="100%" alt={`${data.name} - Malyi M.G. `} src={`../../images/${data.img[0].url}`} />
                    <CardBody className={`bg-${data.status!==0 ?"success":"warning"} text-white`}>

                        {!flagUpdate?<CardTitle>{data.company}</CardTitle>
                            :<Input
                                onChange={this.HandelOnChanges}
                                type="text"
                                placeholder="company name"
                                defaultValue={data.company}
                                name="company">
                            </Input>}
                        {!flagUpdate?<CardSubtitle>{data.nameCrs}</CardSubtitle>
                            :<Input
                                onChange={this.HandelOnChanges}
                                type="text"
                                placeholder="trainings name"
                                defaultValue={data.nameCrs}
                                name="nameCrs">
                            </Input>}
                        <CardText>

                            {!flagUpdate?`${this.makeDateObject(Number(yearStr), Number(dayStr), Number(monthStr))}`
                                :<Input
                                    onChange={this.HandelOnChanges}
                                    type="date"
                                    placeholder="start date"
                                    defaultValue={data.time['start_date']}
                                    name="start_date">

                                </Input>}
                            <br/>
                            {!flagUpdate?`${this.makeDateObject(Number(yearFnsh), Number(dayFnsh), Number(monthFnsh))}`
                                :<Input
                                    onChange={this.HandelOnChanges}
                                    type="date"
                                    placeholder="finish date"
                                    defaultValue={data.time['finish_date']}
                                    name="finish_date">

                                </Input>}

                            <br/>
                            {!flagUpdate?""
                                :<Input
                                    onChange={this.HandelOnChanges}
                                    type="select"
                                    placeholder="status"
                                    defaultValue={Number(data.status)}
                                    name="status">
                                    {[" not started "," in progress "," finished ", " stopped "].map((opt,ind)=>{
                                        return(<option
                                            key={`Status~${ind}`}
                                            value={ind}
                                        >
                                            {opt}
                                        </option>);
                                    })}
                                </Input>}

                        </CardText>
                        <Button className={`m-1`} >
                            Button { typeof( data.status)} === {data.status}
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
                                        let  {flagUpdate, updatesToSend} = this.state ,
                                            rezult={},
                                            { ...other} = data;

                                        if(flagUpdate){
                                            for(let keyName in updatesToSend ){
                                                console.log(" keyName "+keyName);
                                                rezult = { ...other, [keyName]:updatesToSend[[keyName]]};
                                            }
                                            this
                                                .props
                                                .updateTrainingPlace(data.dbKeys,
                                                    {...rezult},
                                                    null)
                                        }

                                        this.setState({flagUpdate:!flagUpdate})

                                    }}
                                    className={`btn-info m-1 animated bounceIn`}>
                                    {flagUpdate?"Send updates":"Update"}
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
