import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Navbar, NavItem, Icon} from 'react-materialize';

class Header extends Component {
  
  render() {
    return (
			<Navbar brand='logo' right className={'gradient'}>
				<NavItem href='get-started.html'><Icon>face</Icon></NavItem>
			</Navbar>
    );
  }
}
export default Header;