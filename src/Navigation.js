import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4 text-primary">Shop24</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
