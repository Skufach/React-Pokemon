import React from 'react'
import {Link} from "react-router-dom";
import propTypes from 'prop-types'

import './index.scss'


export class PokemonSets extends React.Component {

    render() {
        const {pokemon_set} = this.props


        const middle_section = pokemon_set.standardLegal || pokemon_set.expandedLegal

        return (
            <Link to={`/${pokemon_set.code}`} className="pokemon-set">

                <div className="pokemon-set_logo">
                    <img src={`${pokemon_set.logoUrl}`} alt={`${pokemon_set.name}`}/>
                </div>

                <div className="pokemon-set_title">
                    <img className='pokemon-set_symbol' src={`${pokemon_set.symbolUrl}`} alt={`${pokemon_set.name}`}/>

                    <div className="pokemon-set_title-text">
                        <h3>{pokemon_set.name}</h3>
                        <p>Released {pokemon_set.releaseDate}</p>
                    </div>

                </div>

                {middle_section ?
                    <ul className="pokemon-set_list">
                        {pokemon_set.standardLegal ? <li>Standard Legal</li> : null}
                        {pokemon_set.expandedLegal ? <li>Expanded Legal</li> : null}

                    </ul> : null
                }

            </Link>
        )
    }
}



PokemonSets.propTypes = {
    pokemon_set: propTypes.object.isRequired,
}