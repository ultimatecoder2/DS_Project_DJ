import React,{Component} from 'react';
import styles from '../styles/css/styles.css';
import LionsImg from '../styles/img/Lions.svg';
import PecImg from '../styles/img/PecNew1.png';
import {Container, Row, Col, Image, Navbar,Nav, NavDropdown} from 'react-bootstrap';
class header extends Component{
    render(){
        return(
        <div>

            <header>
                <div className = "OrganizationDesigning">
                    <Row className="HeaderRow">
                        <Col md={3}><h5>Government of India</h5></Col>
                        <Col md="auto"><h5>Ministiry of Science &amp; Technology</h5></Col>
                        
                    </Row>
    
                    <Row className="HeaderRow">
                        <Col md={5}>
                            <Col md={3} className="OrganizationImage">
                                <Image src={LionsImg} fluid className="ProjectPic"/>
                            </Col>

                            <Col md={9} className="OrganizationTitle">Department of Science &amp; Technology</Col>
                        </Col>
                        
                        <Col md={2}> </Col>
                        
                        <Col md={5}>
                            <Col md={3} className="OrganizationImagePec">
                                <Image src={PecImg} fluid className="ProjectPic"/>
                            </Col>

                            <Col md={9} className="OrganizationTitle">Punjab Engineering College <br/>(Deemed to be University), Chandigarh </Col>
                        </Col>                    
                    </Row>
                    <br/>
                </div>

                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                    <Navbar.Brand href="#" className="NavLinks">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" sticky="top"> 
                        <Nav className="mr-auto">                
                            <Nav.Link href="#" className="NavLinks">Academicians</Nav.Link>
                            <Nav.Link href="#" className="NavLinks">Universities</Nav.Link>
                            <Nav.Link href="#" className="NavLinks">Forum</Nav.Link>
                            <Nav.Link href="#" className="NavLinks">Opportunities</Nav.Link>
                            <NavDropdown title="More" className="DropdownNavLink" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#" className="DropdownNavLink">Sample 1</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="DropdownNavLink">Sample 2 </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" className="DropdownNavLink">Contact Us</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="DropdownNavLink">About us</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#" className="NavLinks">Login</Nav.Link>
                            <Nav.Link href="#" className="NavLinks">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </header>
        </div>
        );
    }
}
export default header;