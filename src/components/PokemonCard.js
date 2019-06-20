import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class PokemonCard extends React.Component{
  

likePokemon = () => {
  fetch(`http://localhost:3000/pokemons/${this.props.pokemon.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      likes:`${this.props.pokemon.likes + 1}`
    })
  })
}

componentDidUpdate(){
  this.likePokemon
}
    
      render() {
        return (
            <Card value={this.props.pokemon} >
            <Image src={this.props.pokemon.sprite} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.pokemon.name}</Card.Header>
              <Card.Meta>
                <span className='id'>{this.props.pokemon.id}</span>
              </Card.Meta>
              <Card.Description>
                Type:{this.props.pokemon.type}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='thumbs up icon' onClick={this.likePokemon} />
                Likes:{this.props.pokemon.likes}
              </a>
              <div class="ui bottom attached button" onClick={() => this.props.addPokemon(this.props.pokemon)} >
                <i class="add icon"></i>
                        Add Pokemon
                            </div>
            </Card.Content>
          </Card>
        )
      }
    }







