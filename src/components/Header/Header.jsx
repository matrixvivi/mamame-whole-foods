
import React from 'react'
import mamameLogo from '../../assets/logo.svg'
import instagram from '../../assets/icons8-instagram-100.png'
import email from '../../assets/icons8-email-100.png'
import Button from '../Button/Button';  
import { slide as Menu } from 'react-burger-menu'
import './header.css'

class Header extends React.Component {
    // from react-burger-menu custom icons
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
    
      // This keeps your state in sync with the opening/closing of the menu
      // via the default means, e.g. clicking the X, pressing the ESC key etc.
      handleStateChange (state) {
          this.setState({ menuOpen: state.isOpen })
      }
      
      // used to close the menu, e.g. when a user clicks a menu item
      closeMenu () {
        this.setState({menuOpen: false})
      }
    
      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }    
  
    render() {
        return (
            <header className="header">
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} noOverlay pageWrapId={ "page-wrap" } customBurgerIcon={false}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="ourflavors" className="menu-item" href="/about">Our Flavors</a>
                    <a id="about" className="menu-item" href="/about">About Us</a>
                    <a id="about" className="menu-item" href="/about">About Tempeh Chips</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
                <Button onClick={() => this.toggleMenu()} type="green" position="absolute">Menu</Button>
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