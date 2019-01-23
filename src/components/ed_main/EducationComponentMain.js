import React, {Component} from "react";
import {connect} from 'react-redux'
//import {} from './actions/'
import {Col, Container, Row} from "reactstrap";
import EducationComponentItemCRS from "../../components/ed_items_crs/EducationComponentItemCRS.js";


import firebase from "../../database/dbscript.js";
/*
https://console.firebase.google.com/project/maksss2018/database/firestore/data~2Fbeetroot~2FfI2jdCMi0Egoy6q5dKal
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
            listMain = crsList!==null?crsList.map((crs,ind)=>{
                 let {} = crs;
            return(<EducationComponentItemCRS key={`key-of-eductionItem-${ind}`} data={crs}/>);
        }):"loading...";
        return (

            <Container>
                 <Row>
                     <Col>
                         {listMain}
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
export default connect(mapStateToProps, false)(EducationComponentMain)
//export default connect(mapStateToProps, mapDispatchToProps)(CvComponentMain)

