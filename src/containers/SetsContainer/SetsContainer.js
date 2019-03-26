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
        const sets = this.props.main.sets
        const fetching = this.props.main.isFetching

        const set = Object.keys(sets).map(item =>
            <li key={sets[item].name}>
                <PokemonSets pokemon_set={sets[item]}/>
            </li>
        )
        return (
            <ul className='sets-container'>
                {fetching ? <p>ЗАГРУЗКА...</p> : set}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        main: state.main
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

