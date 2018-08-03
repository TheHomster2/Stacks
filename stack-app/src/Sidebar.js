import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
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
            </div>
          </nav>
        </div>           
      </div>

        // <HashRouter>
        //   <div>
        //     <h1>Simple SPA</h1>
        //     <ul className="header">
        //       <li><NavLink exact to="/">Home</NavLink></li>
        //       <li><NavLink to="/stuff">Stuff</NavLink></li>
        //       <li><NavLink to="/contact">Contact</NavLink></li>
        //     </ul>
        //     <div className="content">
        //       <Route exact path="/" component={Home}/>
        //       <Route path="/stuff" component={Stuff}/>
        //       <Route path="/contact" component={Contact}/>
        //     </div>
        //   </div>
        // </HashRouter> 
      );
    }
  } 
export default Sidebar;