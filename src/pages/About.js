import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';


function About(){
    return (
        <Jumbotron id='About'>
            <Container>
                <Row>
                    <Col>
                    <img id='portrait' src="../images/Me.jpg" alt='Picture of Me'/>
                    </Col>
                    <Col>
                    <h1>About Me</h1>
  <p>
  Long Island based artist, business professional, and burdgeoning web developer. Combining an extensive background in various professional fields with my artistic endeavors in order to scale e-commerce business. Currently enrolled in Columbia University's School of Engineering Coding Bootcamp. Interested in building out e-commerce websites for other Small Business Owners. Long Island, New York
  </p>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
       
    )
};

export default About;