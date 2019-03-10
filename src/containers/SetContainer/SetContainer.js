import React, {Component} from 'react';
import {connect} from 'react-redux'
import {itemsFetchData} from "../../actions/SetActions";
import {PokemonSet} from "../../components/PokemonSet/PokemonSet";
import {Link} from "react-router-dom";

import './index.scss'

class SetContainer extends Component {


    componentDidMount() {
        this.props.fetchData(`https://api.pokemontcg.io/v1/cards?setCode=${this.props.match.params.setCode}`)
    }

    render() {
        const cards = this.props.pokemon_set
        const card = Object.keys(cards).map(item =>
            <li key={cards[item].id}>
                <PokemonSet card={cards[item]}/>
            </li>
        )
        return (
            <div className='set-container'>
                <h3><Link to='/'>Главная</Link></h3>
                <ul>
                    {card}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = store => {
    console.log(store)
    return {
        pokemon_set: store.pokemon_set

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
)(SetContainer);

