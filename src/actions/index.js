//import request from 'superagent'
//import {setCookie, getCookie} from '../utility/cookie'
import firebase from "../database/dbscript";

export const AddNewTrainingPlace = (trnPlace,img=null) =>{
    return (dispatch) => {

        let {
                company,
                trainings,
                link,
                status,
                finishDate, startDate, supHours,realHours
            } = trnPlace,
            image = img!==null?img:[{"url":"sketchpad.jpg","name":"real shit"}];


        firebase.firestore().collection("education")
            .add({
                "company":company,
                "link":link,
                "nameCrs":trainings,
                "status":status,
                "time":{"finish_date":finishDate,"real_hours":realHours,"start_date":  startDate,"sup_hours":supHours},
                "img":[...image],
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
              dispatch({
                        type: 'NEW_ITEM_ED_LIST'
                    })

    }

};
export const deleteTrainingPlace = (key) =>{
    return (dispatch) => {
        let  k = key;
        firebase.firestore().collection("education")
            .doc(k)
            .delete()
            .then((docRef)=>{
                console.log("DELETED ", key);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        dispatch({
            type: 'DELETED_ITEM_ED_LIST'
        })

    }

};
export const updateTrainingPlace = (key,newData,img=null) =>{
    return (dispatch) => {
        let  k = key,{
                company,
                trainings,
                link,
                status,
                finishDate, startDate, supHours,realHours
            } = newData ,
            image = img!==null?img:[{"url":"sketchpad.jpg","name":"real shit"}],
            rezult = {
                "company":company,
                "link":link,
                "nameCrs":trainings,
                "status":status,
                "time":{
                    "finish_date":finishDate,
                    "real_hours":realHours,
                    "start_date":  startDate,
                    "sup_hours":supHours},
                "img":[...image],
            };
        firebase.firestore().collection("education")
            .doc(k)
            .set({...rezult})
            .then((docRef)=>{
                console.log("DELETED ", key);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        dispatch({
            type: 'UPDATE_ITEM_ED_LIST'
        })
    }

};


/*
export const login = (username, password) => {
  return (dispatch) => {
    request
      // .get('token.json')
      .post(`${API}auth/login/`)
      .send({'username': username, 'password': password}) // sends a JSON post body
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          console.log(err)
          dispatch({
            type: 'LOGINERROR',
            payload: 'login error'
          })
          // localStorage.setItem('Token', res.body.key)
        } else {
          console.log(res.body.key)
          setCookie('Token', res.body.key, true)
          dispatch({
            type: 'LOGIN',
            payload: res.body.key
          })
          dispatch({
            type: 'LOGINERRORCLEAR'
          })
          // localStorage.setItem('Token', res.body.key)
        }
      })
  }
}
*/
