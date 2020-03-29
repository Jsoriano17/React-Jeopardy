import React from 'react';
import { Menu, } from 'semantic-ui-react';

const Navbar = (props) => {
state = {}

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

render() {
  const { activeItem } = this.state

  return (
    <Menu>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        active={location.pathname === '/'}
        onClick={this.handleItemClick}
      >
        Editorials
      </Menu.Item>

      <Menu.Item
        name='reviews'
        active={activeItem === 'reviews'}
        onClick={this.handleItemClick}
      >
        Reviews
      </Menu.Item>

      <Menu.Item
        name='upcomingEvents'
        active={activeItem === 'upcomingEvents'}
        onClick={this.handleItemClick}
      >
        Upcoming Events
      </Menu.Item>
    </Menu>
}