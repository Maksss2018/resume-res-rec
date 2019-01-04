import React, {Component} from "react";
import { BrowserRouter, Route/*, Switch*/ } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CvComponentMain from './components/cv_main/CvComponentMain';

class App extends Component {
   render() {
    //let excerptAbout = UserInfo.about.slice(0, 200);
    return (<BrowserRouter  history={history} >
                <Route exact path="/" component={CvComponentMain} />
        </BrowserRouter> );
   }
}
export default App;
