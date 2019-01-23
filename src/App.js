import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import CvComponentMain from './components/cv_main/CvComponentMain';
import EducationComponentMain from './components/ed_main/EducationComponentMain';

class App extends Component {
   render() {
       const history = createHistory({
           basename: process.env.PUBLIC_URL,
       });
       const store = configureStore;
        return (<Provider store={store}>
            <BrowserRouter  history={history} >
                <Switch>
                    <Route exact path="/" component={CvComponentMain} />
                    <Route  path="/education" component={EducationComponentMain} />
                </Switch>
                </BrowserRouter>
        </Provider>);
   }
}
export default App;
