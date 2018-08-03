import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Stuff from "./Stuff";
import Contact from "./Contact";
import { Home } from 'react-feather';
import { Nav, NavItem} from 'reactstrap';
import './Dashboard.css';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <HashRouter>
          <div>
          <Nav vertical>
            <NavItem>
              <NavLink exact to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/stuff">Stuff</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
            <div className="content">
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
            </Nav>
          </div>
        </HashRouter> 
          </div>
        </nav>
      </div>          
    </div>
      );
    }
  } 
export default Sidebar;