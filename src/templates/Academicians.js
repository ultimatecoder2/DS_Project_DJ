import React,{Component} from 'react';
import User2 from '../styles/img/User2.png';
import { ImLocation } from 'react-icons/im';
import { SiGooglescholar } from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsBriefcaseFill } from 'react-icons/bs';
/*FaUniversity*/ 
import {Container, Row, Col, Image,Button,Form} from 'react-bootstrap';
import styles from '../styles/css/styles.css';


class Academicians extends Component{
    render(){
        return(
        <div>
        <section className = "container NewSection">
        <div className="SectionHeading">
            <h2>Academicians</h2>
        </div>

        <div className="SectionContent">
            <div className="clearfix">
                <div className="ProjectCont">
                <Container>
                    <Row>
                        {/*---------------------------Left hand side------------------------------*/}
                        <Col lg={4}>
                            <div className="FilterForm">
                                <div className="FilterFormTitle">
                                    <h4>Filters</h4>
                                </div>
                                <hr className="horizontalHR"></hr>
                                <div className="">
                                    <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridIndName">
                                        <Form.Label>Indian University / College Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name"/>
                                        </Form.Group>
                                    </Form.Row>
                                    
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridType">
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control as="select" defaultValue="Any">
                                                <option>Any</option>
                                                <option>Option 1 </option>
                                                <option>Option 2 </option>
                                                <option>Option 3 </option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Department</Form.Label>
                                            <Form.Control as="select" defaultValue="Any">
                                                <option>Any</option>
                                                <option>CSE </option>
                                                <option>ECE </option>
                                                <option>Electronics </option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Foreign University Name</Form.Label>
                                            <Form.Control type="" placeholder="Enter" />
                                        </Form.Group>
                                    </Form.Row>
                                    
                                    <Form.Row>
                                        <Button variant="primary" type="search">Search</Button>
                                    </Form.Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        
                        
                        <Col lg={1}></Col>
                        
                        {/*---------------------------Right hand side------------------------------*/}
                        <Col lg={7}>
                            <div className="IndividualPerson">
                                <Row>
                                <Col sm ={3}><Image src={User2} fluid className="IndividualPersonPic"/></Col>
                                <Col sm = {6}>
                                    <div className="IndividualPersonTitle">
                                        <h4>Andy Murray</h4>
                                    </div>
                                    <br/>
                                    <div className="IndividualPersonBody">
                                        <div className="Location">Alberta, Canada <ImLocation/></div>
                                        <div className="Designation"><SiGooglescholar/> Faculty</div>
                                        <div className="University"><FaUniversity/> MIT,USA</div>
                                        <div className="Email"><AiOutlineMail/> abc@gmail.com</div>
                                        <div className="Department"><BsBriefcaseFill/> CSE</div>
                                    </div>
                                </Col>
                                <Col sm={3} className ="IndividualPersonButtonClass">
                                    <Button variant="primary" className ="IndividualPersonButton" >View</Button>
                                </Col>
                                </Row>
                            </div>

                            <div className="IndividualPerson">
                                <Row>
                                <Col sm ={3}><Image src={User2} fluid className="IndividualPersonPic"/></Col>
                                <Col sm = {6}>
                                    <div className="IndividualPersonTitle">
                                        <h4>Andy Murray</h4>
                                    </div>
                                    <br/>
                                    <div className="IndividualPersonBody">
                                        <div className="Location">Alberta, Canada <ImLocation/></div>
                                        <div className="Designation"><SiGooglescholar/> Faculty</div>
                                        <div className="University"><FaUniversity/> MIT,USA</div>
                                        <div className="Email"><AiOutlineMail/> abc@gmail.com</div>
                                        <div className="Department"><BsBriefcaseFill/> CSE</div>
                                    </div>
                                </Col>
                                <Col sm={3} className ="IndividualPersonButtonClass">
                                    <Button variant="primary" className ="IndividualPersonButton" >View</Button>
                                </Col>
                                </Row>
                            </div>

                            <div className="IndividualPerson">
                                <Row>
                                <Col sm ={3}><Image src={User2} fluid className="IndividualPersonPic"/></Col>
                                <Col sm = {6}>
                                    <div className="IndividualPersonTitle">
                                        <h4>Andy Murray</h4>
                                    </div>
                                    <br/>
                                    <div className="IndividualPersonBody">
                                        <div className="Location">Alberta, Canada <ImLocation/></div>
                                        <div className="Designation"><SiGooglescholar/> Faculty</div>
                                        <div className="University"><FaUniversity/> MIT,USA</div>
                                        <div className="Email"><AiOutlineMail/> abc@gmail.com</div>
                                        <div className="Department"><BsBriefcaseFill/> CSE</div>
                                    </div>
                                </Col>
                                <Col sm={3} className ="IndividualPersonButtonClass">
                                    <Button variant="primary" className ="IndividualPersonButton" >View</Button>
                                </Col>
                                </Row>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        </div>
    </section>
</div>
        );
    }
}
export default Academicians;