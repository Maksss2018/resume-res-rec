//import {getCookie} from '../utility/cookie'
export default (state = 'Token', action) => {
  switch (action.type) {
    case 'LOGIN':
      return (action.payload);
    case 'LOGOUT':
      return '';
    default:
      return state
  }
}
