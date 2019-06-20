import React from 'react'
import '../App.css';
import { Container, Image, Menu } from 'semantic-ui-react';




export default class Navbar extends React.Component{


    render(){
return(
<Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image size="small" width={50} src="http://pixelslogodesign.com/blog/wp-content/uploads/2016/07/post-pic-1.gif"/>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          Login
        </Menu.Item>

        <Menu.Item as="a" name="register">
          Register
        </Menu.Item>
      </Menu.Menu>
    </Container>
</Menu>
        )
    }    
}