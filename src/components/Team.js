import React from 'react'
import { Card } from 'semantic-ui-react'
import PokemonCard from './PokemonCard'





export default class Team extends React.Component{




render(){
    console.log(this.props.selected_pokemon)
    return( 
        <Card.Group itemsPerRow={6}>
            {this.props.selected_pokemon.map(pokemon => {
              return <PokemonCard pokemon={pokemon} key={pokemon.id} addPokemon={this.props.addPokemon} />
            })}
          </Card.Group>
    )
}




}