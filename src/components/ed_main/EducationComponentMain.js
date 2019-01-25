import React, {Component} from "react";
import {connect} from 'react-redux'
//import {} from './actions/'
import {Col, Container, Row} from "reactstrap";
import EducationComponentItemCRS from "../../components/ed_items_crs/EducationComponentItemCRS.js";
import EducationForm from "../../components/ed_form/EducationForm.js";

import firebase from "../../database/dbscript.js";
/*
https://console.firebase.google.com/project/maksss2018/database/firestore/data~2Feducation~2FFJVmZtgkFYRFQ24NYRmf
модуль 1
JavaScript

10 тем

1. Регулярные выражения в JavaScript

2. Функции в JavaScript

3. Области видимости переменных

4. Контекст выполнения и стек вызова функций

5. Замыкания

6. ООП в JavaScript

7. Конструкторы объектов и прототипов

8. Реализация наследования

9. ES6, ES7

10. Асинхронное програмирование
модуль 2
Создание приложений с помощью React

15 тем

1. Введение в React

2. Компоненты

3. DOM дерево, JSX

4. State компонента, stateless и stateful компоненты

5. Жизненный цикл компонента

6. Что такое Redux

7. Reducers, action creators

8. Подключение Redux к приложению

9. Проверка синтаксиса с использованием ESLint

10. React-router v4, особенности работы

11. Применение middleware

12. Асинхронные запросы, применение библиотеки redux-thunk

13. Оптимизация производительности React приложений, использование библиотеки Reselect

14. Тестирование React приложений с использованием фреймворка Jest

15. Тестирование Redux

*/
class EducationComponentMain extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.ref = firebase.firestore().collection('education');
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
        querySnapshot.forEach((doc) => {
            const res = doc.data();
            crsList = res["curses_list"];
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
        let {crsList} = this.state,
            { params } = this.props.match,
            listMain = crsList!==null?crsList.map((crs,ind)=>{
                 let {} = crs;
            return(<Col
                    key={`key-of-eductionItem-${ind}`}
                    xs={12} sm={6} md={4} lg={3}>
                    <EducationComponentItemCRS  data={crs}/>
                </Col>
                );
        }):"loading...";
        return (

            <Container>
                 <Row className={` py-3 `}>
                     {listMain}
                 </Row>
                {
                    params.action!=="addNewEductionItem"?`${params.action}`:<Row>
                        <Col>
                           < EducationForm inputs={[
                               {
                                   classN:" my-3 ",
                                   action:(e)=>console.log(`${e.target.value}`),
                                   type:"text",
                                   name:"company",
                                   id:"companyForEd",
                                   placeHldr:"enter name of Company"
                               },
                               {
                                   classN:" my-3 ",
                                   action:(e)=>console.log(`${e.target.value}`),
                                   type:"text",
                                   name:"trainings",
                                   id:"textForEd",
                                   placeHldr:"name of trainings"
                               },
                               {
                                   classN:" my-3 ",
                                   action:(e)=>console.log(`${e.target.value}`),
                                   type:"date",
                                   name:"finishDate",
                                   id:"finishDate",
                                   placeHldr:"enter last day of trainings",
                                 },
                               {
                                   classN:" my-3 ",
                                   action:(e)=>console.log(`${e.target.value}`),
                                   type:"date",
                                   name:"startDate",
                                   id:"startDate",
                                   placeHldr:"enter the day  when trainings will start "
                                 },
                               {
                                   classN:" my-3 ",
                                   action:(e)=>console.log(`${e.target.value}`),
                                   type:"number",
                                   name:"supHours",
                                   id:"supHours",
                                   placeHldr:""
                               },
                               {
                                   classN:" my-3 ",
                                   action:(e)=>console.log(`${e.target.value}`),
                                   type:"number",
                                   name:"realHours",
                                   id:"realHours",
                                   placeHldr:""
                                },
                               {
                                   classN:" my-3 ",
                                   action:(e)=>console.log(`${e.target.value}`),
                                   type:"select",
                                   options:[" not started "," in progress "," finished ", " stopped "],
                                   name:"realHours",
                                   id:"realHours",
                                   placeHldr:""
                               }
                           ]}/>
                        </Col>
                    </Row>
                }

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
export default connect(mapStateToProps, false)(EducationComponentMain)
//export default connect(mapStateToProps, mapDispatchToProps)(CvComponentMain)

