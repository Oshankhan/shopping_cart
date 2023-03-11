import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { Navbar, Container, FormControl, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <FormControl
          style={{ width: 500 }}
          placeholder="Search my item"
          className="m-auto"
        />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <AiFillShopping fontSize={20} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;
