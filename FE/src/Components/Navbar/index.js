import {
    Container,
    Navbar ,
    Nav , 
    Offcanvas ,
   } from 'react-bootstrap'

const NavbarTop = () => {
  return (
    <Navbar style={{backgroundColor:'#247881',color:'white'}} expand={false}>
      <Container fluid>
        <Navbar.Brand style={{color:'white'}} href="#">Yudi Gunawan</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              My Web
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/kontak">Kontak</Nav.Link>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default NavbarTop;
