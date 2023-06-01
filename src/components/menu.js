import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuCategories from './menu-categories';
import BasketIcon from './basket-icon';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';

function Menu(props) {
    const { cartItems, onAdd } = props
    return (
        <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand href="/">React Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <MenuCategories />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Link 
                    to={'/cart'} 
                    state={{ cartItems: cartItems, onAdd: onAdd }} cartItems={cartItems}><BasketIcon cartItems={cartItems} /></Link>
            </Container>
        </Navbar>
    )
}

export default Menu