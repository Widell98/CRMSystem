import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'





const OneNavBar = () => {
  return (
    <div className="topnavbar" >
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://assets.website-files.com/6217719b8567d8b43f6bce9e/6217755e8567d8c2036bdc4d_Logotype_dark.svg"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div >

  )
}
export default OneNavBar


