import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {useRoutes} from './routess'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
    render() {
        const routes = useRoutes(false)
        return (
            <>
                <Router>
                    {routes}
                </Router>
            </>
        );
    }
}

export default App;

