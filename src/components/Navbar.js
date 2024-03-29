import { useState } from 'react';
import { Navbar, Container, Nav,  } from 'react-bootstrap';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState ('home');
    const [scoled, ]
return (
    <Navbar expand="lg" >
    <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
        </Nav>
            <span className='navbar-text'>
                <div className='social'>
                    <a href='#'><img src={} alt=''/></a>
                    <a href='#'><img src={} alt=''/></a>
                    <a href='#'><img src={} alt=''/></a>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
};
