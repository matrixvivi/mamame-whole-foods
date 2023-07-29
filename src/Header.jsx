
import React from 'react'
import mamameLogo from './assets/logo.svg'
import instagram from './assets/icons8-instagram-100.png'
import email from './assets/icons8-email-100.png'
import Button from './Button';  
import { slide as Menu } from 'react-burger-menu'
import './header.css'

class Header extends React.Component {
    showSettings(event) {
      event.preventDefault();
      // Your settings logic goes here
    }
  
    render() {
        return (
            <header className="header">
                <Menu isOpen={ true } pageWrapId={ "page-wrap" } customBurgerIcon={ <Button type="green">Menu</Button>}>
                    <a id="home" className="menu-item border" href="/">Home</a>
                    <a id="about" className="menu-item border" href="/about">About</a>
                    <a id="contact" className="menu-item border" href="/contact">Contact</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </Menu>
                <img className="logo" src={mamameLogo}></img>
                <div className="social-container">
                    <a href=""><img src={instagram} className='socials'/></a>
                    <a href=""><img src={email} className='socials'/></a>
                </div>
            </header>

      );
    }
}

export default Header