import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonIndex from './components/PokemonIndex';
import { Container } from 'semantic-ui-react';
import Menu from './components/Menu';
import { Search } from 'semantic-ui-react'
import Team from './components/Team'
// import { EventEmitter } from 'events';
// import {BrowserRouter as} from'react-router-dom'



export default class App extends React.Component{
  state = {
    pokemon : [],
    search : '',
    selected_pokemon : [],
    loading : true
  }

  LoadingMessage = () => {
    return (
      <div className="splash-screen">
        Wait a moment while we load your app.
        <div className="loading-dot">.</div>
      </div>
    );
  }

  getAllPokemon = () => {
    fetch('http://localhost:3000/pokemons')
    .then(response => response.json())
    .then(allPokemon => {
      this.setState({
        pokemon : allPokemon
      })
    })
  }
  
  componentDidMount(){
    this.getAllPokemon()
  }

  searchPokemon = (event) => {
    this.setState({
      search : event.target.value
    })
  }
  
  addPokemon = (pokemon) =>{
    if (this.state.selected_pokemon.length === 6)
    {window.confirm('Your Party is Full')}
    else if (this.state.selected_pokemon.length < 6) {
      this.setState({
        selected_pokemon : [pokemon, ...this.state.selected_pokemon]
      })    
    }
  }


  render(){
   return(  
   <Fragment>
    <Menu />
    <Search onSearchChange={this.searchPokemon} showNoResults={false} />
    <Team selected_pokemon={this.state.selected_pokemon}/>
    <Container>
      <span>
    <PokemonIndex pokemons={this.state.pokemon.filter(pokemons => pokemons.name.includes(this.state.search))} 
    addPokemon={this.addPokemon}/>
    </span>
    </Container>
  </Fragment>
   )

  };
}


