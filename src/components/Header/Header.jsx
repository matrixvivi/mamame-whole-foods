
import React from 'react'
import mamameLogo from '../../assets/logo.svg'
import instagram from '../../assets/icons8-instagram-100.png'
import email from '../../assets/icons8-email-100.png'
import Button from '../Button/Button';  
import { slide as Menu } from 'react-burger-menu'
import './header.css'
import NormalIcon from '../normalIcon/NormalIcon'

class Header extends React.Component {
    // from react-burger-menu custom icons
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false,
          isMobile: window.innerWidth <= 880, // if the screen width is less than or equal to 880px
        }
      
        window.addEventListener('resize', this.handleResize);
    }
  
    handleResize = () => {
      this.setState({
        isMobile: window.innerWidth <= 880,
      });
    };
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
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
    const { isMobile } = this.state;
        return (
            <header className="header">
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} noOverlay pageWrapId={ "page-wrap" } customBurgerIcon={false}>
                    <a id="home" className="menu-item" href="#hero">Home</a>
                    <a id="ourflavors" className="menu-item" href="#our-flavors">Our Flavors</a>
                    <a id="about" className="menu-item" href="#our-story">About Us</a>
                    <a id="process" className="menu-item" href="#whyhowwhere">Our Process</a>
                    <a id="contact" className="menu-item" href="#for-interested">Contact</a>
                </Menu>
            {isMobile ? (
              <NormalIcon onClick={() => this.toggleMenu()}></NormalIcon>
            ) : (
              <Button onClick={() => this.toggleMenu()} type="green" position="absolute" size="1.05em">Menu</Button>
            )}
                <img className="logo" src={mamameLogo}></img>
                <div className="social-container">
                    <a href="https://www.instagram.com/mamametempehchips" target="_blank"><img src={instagram} className='socials'/></a>
                    <a href="mailto: info@mamame.co" target="_blank"><img src={email} className='socials'/></a>
                </div>
            </header>

      );
    }
}

export default Header