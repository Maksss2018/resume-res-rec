import React, {Component} from "react";
import {connect} from 'react-redux';

//import {} from './actions/'
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

    componentDidMount() {
    }
    componentDidUpdate(prevProps,prevState){
    }
    render() {
        let {data} = this.props;/*
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
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody className={`bg-${data.status!==0 ?"success":"warning"} text-white`}>
                        <CardTitle>{data.company}</CardTitle>
                        <CardSubtitle>{data.nameCrs}</CardSubtitle>
                        <CardText>
                            {JSON.stringify(data.time)}
                        </CardText>

                        <Button>Button { typeof( data.status)} </Button>
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
}
/*
const mapDispatchToProps = (dispatch) => ({
    listViewData: () => dispatch(listViewData())
})
*/
//export default withRouter (connect(mapStateToProps, false))(EducationComponentItemCRS)
export default connect(mapStateToProps, false)(EducationComponentItemCRS)
//export default connect(mapStateToProps, mapDispatchToProps)(CvComponentMain)
