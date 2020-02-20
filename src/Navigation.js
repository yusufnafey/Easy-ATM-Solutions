import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Logo  from './Images/Logo.png'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" style={{background: "green"}} light expand="md" >
        <NavbarBrand href="/">Easy ATM Solutions</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">ATMs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">FAQ</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Contact
                </DropdownItem>
                <DropdownItem>
                  Our Mission
                </DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><img style={{ width: "100px" }} src={Logo}/></NavbarText>
        </Collapse>
      </Navbar>
  );
}

export default Navigation;