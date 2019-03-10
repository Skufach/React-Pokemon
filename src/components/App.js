import React, {Component} from 'react'
import SetsContainer from '../containers/SetsContainer/SetsContainer' // изменили импорт
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import SetContainer from '../containers/SetContainer/SetContainer'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={SetsContainer}/>
                        <Route exact path='/:setCode' component={SetContainer}/>
                        <Redirect to='/'/>
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default App