import React from 'react';
import Pokedex from './Pokedex'




export default class PokemonIndex extends React.Component {



      render(){
        return (
            <Pokedex pokemons={this.props.pokemons} addPokemon={this.props.addPokemon}/> 
        )

      }
}