import React,{Component} from 'react';
import styles from '../styles/css/styles.css';
import LionsImg from '../styles/img/Lions.svg';
import PecImg from '../styles/img/PecNew1.png';
import {Container, Row, Col, Image, Navbar,Nav, NavDropdown} from 'react-bootstrap';
class footer extends Component{
    render(){
        return(
        <div>

            <footer>
                <div className="footerSection">
                <Row>
                    <Col md={4} className="footerColumn">
                    <div className="footerHeading">Our Motto</div>
                    <div className  = "footerContent">Connect young Academicians and help them to succeed </div>
                    </Col>

                    <Col md={4} className="footerColumn">
                        <div className="footerHeading"> About Us</div>
                        <div className  = "footerContent">We are a group of developers working together for the better tomorrow</div>
                    </Col>
                    <Col md={4} className="footerColumn">
                        <div className="footerHeading"> Contact Us</div>
                        <div className  = "footerContent">
                            Email: abc@gmail.com<br/>
                            Contact Number: +91 1234567890<br/>
                        </div>
                    </Col>
                </Row>
                    <br/><br/>
                    <p>&#169;	2020. All rights Reserved.</p>

                </div>
                
                
            
            </footer>
        </div>
        );
    }
}
export default footer;