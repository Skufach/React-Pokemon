import React, {Component} from 'react';
import {connect} from 'react-redux'

class SetContainer extends Component {

    render() {
        const setCode = this.props.match.params.setCode
        return (
            <ul className='sets-container'>
                Привет {setCode}
            </ul>
        );
    }
}

export default connect(

)(SetContainer);

