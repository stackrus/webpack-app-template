import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import NaviBar from './components/NaviBar'
import Dialog from './Dialog'
import Profile from './Profile'
import Dating from './Dating'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <NaviBar/>
                    <Switch>
                        {/*<Route path={"/"} component={Home}></Route>*/}
                        <Route path={"/dialog"} component={Dialog}></Route>
                        <Route path={"/profile"} component={Profile}></Route>
                        <Route path={"/dating"} component={Dating}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;

