import React from 'react'

import './index.scss'


export class PokemonSet extends React.Component {

    render() {
        const {card} = this.props

        return (
            <div className='set'>
                <img src={`${card.imageUrl}`} alt={`${card.name}`}/>
            </div>
        )
    }
}

