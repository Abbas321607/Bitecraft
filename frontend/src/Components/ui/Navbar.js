import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function CollapsibleExample() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">BITE CRAFT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link as={NavLink} to="/create-recipe">Create Recipe</Nav.Link>
                <Nav.Link as={NavLink} to="/favorites">Favorites</Nav.Link>
              </>
            ) : null}
          </Nav>
          <Nav>
            {!isLoggedIn ? (
              <>
                <Nav.Link as={NavLink} to="/pages/login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/pages/register">Register</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
