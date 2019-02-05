import React, {Component} from "react";
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import CvComponentMain from './components/cv_main/CvComponentMain';
import EducationComponentMain from './components/ed_main/EducationComponentMain';
import EducationComponentLessons from './components/ed_lessons_container/EducationComponentLessons';

class App extends Component {
   render() {
       /*
       const history = createHistory({
           basename: process.env.PUBLIC_URL,
       });*/
       const store = configureStore;
        return (<Provider store={store}>
            <Router  >
                <div>
                    <Switch>
                        <Route exact path="/" component={CvComponentMain} />
                        <Route exact path="/education/:action"  component={EducationComponentMain} />
                        <Route  path="/education/lessons/:name/:action"  component={EducationComponentLessons} />
                    </Switch>
                </div>
                 </Router>
        </Provider>);
   }
}
export default App;
