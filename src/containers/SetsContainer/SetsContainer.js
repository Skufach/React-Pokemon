import React, {Component} from 'react';
import {connect} from 'react-redux'
import {itemsFetchData} from "../../actions/SetsActions";
import {PokemonSets} from "../../components/PokemonSets/PokemonSets";

import './index.scss'

class SetsContainer extends Component {

    componentDidMount() {
        this.props.fetchData('https://api.pokemontcg.io/v1/sets')
    }

    render() {
        const sets = this.props.sets

        const set = Object.keys(sets).map(item=>
            <PokemonSets pokemon_set={sets[item]}/>
        )
        return (
            <ul className='sets-container'>
                {set}
            </ul>

        );
    }
}

const mapStateToProps = store => {
    return {
        sets: store.sets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetsContainer);

