import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import NaviBar from './components/NaviBar'
import HomePage from './HomePage'
import DialogPage from './DialogPage'
import ProfilePage from './ProfilePage'
import DatingPage from './DatingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <NaviBar/>
                    <Switch>
                        <Route exact path={"/"} component={HomePage}></Route>
                        <Route path={"/dating"} component={DatingPage}></Route>
                        <Route path={"/dialogs"} component={DialogPage}></Route>
                        <Route path={"/profile"} component={ProfilePage}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;

