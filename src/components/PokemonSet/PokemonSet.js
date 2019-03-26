import React from 'react'
import propTypes from 'prop-types'

import './index.scss'


//
// export class PokemonSet extends React.Component {
//
//     render() {
//         const {card} = this.props
//
//         return (
//             <div className='set'>
//                 <img src={`${card.imageUrl}`} alt={`${card.name}`}/>
//             </div>
//         )
//     }
// }

export function PokemonSet(props) {
    const card = props.card
    return (
        <div className='set'>
            <img src={`${card.imageUrl}`} alt={`${card.name}`}/>
        </div>
    )
}

PokemonSet.propTypes = {
    card : propTypes.object.isRequired
}
