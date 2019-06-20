import React from 'react';
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'




export default class Pokedex extends React.Component{

  



    render() {
        return (
          <Card.Group itemsPerRow={6}>
            {this.props.pokemons.map(pokemon => {
              return <PokemonCard pokemon={pokemon} key={pokemon.id} addPokemon={this.props.addPokemon} />
            })}
          </Card.Group>
        )
      }
    }