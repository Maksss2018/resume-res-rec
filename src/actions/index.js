//import request from 'superagent'
//import {setCookie, getCookie} from '../utility/cookie'
import conf from './config.json'
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
