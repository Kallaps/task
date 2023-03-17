import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const linkStyle = {color:'gray', textDecoration:'none', marginTop:'8px'}

function Headers
() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          <Link to="/" style={linkStyle}>
            <Navbar.Brand style={{fontSize:'16px', color:'lightgray'}}>Home</Navbar.Brand>
          </Link>

          <Link to="/about" style={linkStyle}>
            <Navbar.Brand style={{fontSize:'16px', color:'lightgray'}}>About Me</Navbar.Brand>
          </Link>

          <Link to="/skills" style={linkStyle}>
            <Navbar.Brand style={{fontSize:'16px', color:'lightgray'}}>Skills</Navbar.Brand>
          </Link>
         
          
            <NavDropdown title="Contacts" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">0703443234</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                bekmirovan@gamil.com
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers
;