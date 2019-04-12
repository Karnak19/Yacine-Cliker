import React from 'react';
import { Navbar, Nav, NavItem, NavLink} from 'reactstrap';

import "./footer.css";


export default class Footer extends React.Component {
  render() {
    return (
      <div className="">
        <Navbar className="footer_row mx-auto" color="dark">
          <Nav id="footer_title">
            <p className="d-inline my-auto text-white">
            © TEAM WILDER CLICKER : Stéphane Van Pé, Nathalie Balotte, Stéphane Jacot, Nicolas Gagnant et Guillaume Ribéroux
            </p>
          </Nav>
          <Nav className="mx-auto">
            <NavItem className="" id="footer_link">
              <NavLink href="https://www.facebook.com">
                <img
                  src="https://img.icons8.com/color/26/000000/facebook.png"
                  alt="facebook"
                />
              </NavLink>
            </NavItem>
            <NavItem className="" id="footer_link">
              <NavLink href="https://twitter.com/login?lang=fr">
                <img
                  src="https://img.icons8.com/color/26/000000/twitter.png"
                  alt="twitter"
                />
              </NavLink>
            </NavItem>
            <NavItem className="" id="footer_link">
              <NavLink href="https://www.instagram.com/?hl=fr">
                <img
                  src="https://img.icons8.com/color/26/000000/instagram-new.png"
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