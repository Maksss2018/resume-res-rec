//import request from 'superagent'
//import {setCookie, getCookie} from '../utility/cookie'
import firebase from "../database/dbscript";

export const AddNewTrainingPLace = (trnPlace) =>{

    let {company,
        trainings,
        link,
        finishDate, startDate, supHours,realHours} = trnPlace;
    firebase.firestore().collection("education")
        .add({
            "company":company,
            "link":link,
            "nameCrs":trainings,
            "status":0,
            "time":{"finish_date":finishDate,"real_hours":realHours,"start_date":  startDate,"sup_hours":supHours},
            "img":[{"name":"Beetroot","url":"ClAEUbkZ.jpg"},{"name":"beetroot","url":"79539630.jpg"}],
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });/* */

}

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
