import React, {Component} from "react";
import { BrowserRouter, Route/*, Switch*/ } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'
import configureStore from './store/configure-store';
import CvComponentMain from './components/cv_main/CvComponentMain';

class App extends Component {
   render() {
       const history = createHistory({
           basename: process.env.PUBLIC_URL,
       });
       const store = configureStore;
        return (<Provider store={store}>
            <BrowserRouter  history={history} >
                <Route exact path="/" component={CvComponentMain} />
        </BrowserRouter>
        </Provider>);
   }
}
export default App;
