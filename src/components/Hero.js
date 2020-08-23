import React from 'react';
import { Jumbotron,  Container, Row, Col } from 'react-bootstrap';

function Hero() {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h2>Eduardo Aguilar</h2>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;