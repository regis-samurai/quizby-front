import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Button} from 'react-materialize';
import Divider from 'react-materialize/lib/Divider';

class Sidebar extends Component {
  
  render() {
    return (
		<div className="sidebar-container">
            <div className="sidebar-item">
                <p>HEHE</p>
            </div>
            <div className="sidebar-item">
                <p>HEHE2</p>
            </div>
        </div>
    );
  }
}
export default Sidebar;