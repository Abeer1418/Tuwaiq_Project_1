import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img9 from './img/pejama.jpg';
import img11 from './img/pejama1.jpg';
import img22 from './img/pejams3.jpg';
import img33 from './img/dres3.jpg';
import img44 from './img/drse4.jpg';
import img55 from './img/dres2.jpg';
class Clothes extends React.Component {
    render() {
        return (
            <div>

                <h1>clothes:</h1>

                <Container>
                    <Row>
                        <Col xs><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img9} />
                            <Link to="/Clothes" variant="light"> clothes </Link>


                        </Card></Col>
                        <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img11} />

                            <Button variant="light">Kids Games</Button>

                        </Card></Col>
                        <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img22} />


                            <Button variant="light">Children's Furniture</Button>


                        </Card></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img33} />
                            <Button variant="light">clothes</Button>


                        </Card></Col>
                        <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img44} />

                            <Button variant="light">Kids Games</Button>

                        </Card></Col>
                        <Col xs={{ order: 1 }}><Card style={{ width: '90%' }}>
                            <Card.Img variant="top" src={img55} />


                            <Button variant="light">Children's Furniture</Button>


                        </Card></Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Clothes;