import React, { Component } from 'react'
import { Link } from 'gatsby'
import {FaCoffee} from 'react-icons/fa'



export default class Navbar extends Component {
  state = {
    navbarOpen:false,
    css:'strong collapse navbar-collapse',
    links:[
      {
        id:1,
        path:'/',
        text:'home'
      },
      {
        id:2,
        path:'/about',
        text:'about'
      },
    ]
  }
  navbarHandler = () =>{
   this.state.navbarOpen
   ? this.setState({ navbarOpen:false,css:
    "collapse navbar-collapse"})
     :this.setState({
       navbarOpen:true,
       css:"collapse navbar-collapse show"
     });   
  }
  render() {
    return <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <Link to="/" className="navbar-brand">
    <h1>Caffè<FaCoffee className="cart-icon" />Pietro</h1>
     {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
    </Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    onClick={this.navbarHandler}>
    <span className="navbar-toggler-icon" />
    </button>
    <div className={this.state.css}>
    <ul className="navbar-nav mx-auto">
    {
      this.state.links.map(link =>{
        return(
          <li key={link.id} className="nav-item">
          <Link to={link.path} className="nav-link text-capitalize">
          {link.text}
          </Link>
          </li>
        )
      })
    }
    <li className="li.nav-item ml-sm-5">
    </li>
    </ul>
    </div>
    </nav>

  }
}
