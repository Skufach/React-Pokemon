import React from 'react'

import './index.scss'

export class PokemonSets extends React.Component {

    render() {
        const {pokemon_set} = this.props

        return (
            <li className='pokemon-set'>
                <img className='pokemon-set_logo' src={`${pokemon_set.logoUrl}`} alt=""/>

                <img className='pokemon-set_symbol' src={`${pokemon_set.symbolUrl}`} alt=""/>
                <h3>{pokemon_set.releaseDate}</h3>
                {/*{pokemon_set.symbolUrl}*/}
            </li>
        )
    }
}

