import React from "react";
import styles from './navbar.module.css';
import Logo_cookie from "./img/logo_cookie.svg";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        {/* Logo + lien Basile */}
        <Navbar className={styles.navbar} color="dark" dark expand="md">
          <NavbarBrand >
            <img 
              src={Logo_cookie}
              className={`${styles.logo} d-inline`} 
              alt="cookie"
            />
            {/* Titre */}
          </NavbarBrand>
          <Nav>
            <h1 className={`${styles.h1} d-inline my-auto text-white font-weight-bold font-italic`}>
              Wilder Clicker
            </h1>
          </Nav>
          {/* Logos + liens réseaux sociaux */}
          <Nav className="ml-auto">
            <NavItem className="d-none d-sm-block d-md-block d-lg-block" id="nav_link">
              <NavLink href="https://www.facebook.com">
                <img
                  src="https://img.icons8.com/color/36/000000/facebook.png"
                  alt="facebook"
                />
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block d-md-block d-lg-block" id="nav_link">
              <NavLink href="https://twitter.com/login?lang=fr">
                <img
                  src="https://img.icons8.com/color/36/000000/twitter.png"
                  alt="twitter"
                />
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block d-md-block d-lg-block" id="nav_link">
              <NavLink href="https://www.instagram.com/?hl=fr">
                <img
                  src="https://img.icons8.com/color/36/000000/instagram-new.png"
                  alt="instagram"
                />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
