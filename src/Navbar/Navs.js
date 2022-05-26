import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import React, { useState } from "react";
import "./Navs.css";
const Navs = () => {
  const [Show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Navbar bg="success" variant="dark">
        <div>
          <Button variant="success" onClick={handleShow}>
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </Button>
        </div>
        <Offcanvas show={Show} onHide={handleClose}>
          <Offcanvas.Header closeButton className="header">
            <Offcanvas.Title>BLACK PAIYAN</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="slideBody">
            <hr />
            <div>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Container>
          <Navbar.Brand href="">Black_Paiyan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Signup</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Menu</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="info">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
export default Navs;
