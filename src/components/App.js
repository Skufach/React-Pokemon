import React, { Component } from 'react'
import SetsContainer from '../containers/SetsContainer/SetsContainer' // изменили импорт

class App extends Component {
    render() {
        return (
            <div className='app'>
                <SetsContainer />
            </div>
        )
    }
}

export default App