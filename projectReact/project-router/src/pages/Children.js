import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Button } from "react-bootstrap";
import img6 from './img/aaaaa5.jpg';
import img7 from './img/aaaaa4.jpg';
import img8 from './img/imges6.jpg';
// import img66 from './img/aaaaa5.jpg';
// import img77 from './img/aaaaa4.jpg';
// import img88 from './img/imges6.jpg';
import { Link } from "react-router-dom";
class Children extends React.Component {
    render() {
        return (
            <div>


                <h1>Children Furniture:</h1>

                <Container>
                    <Row>
                        <Col xs><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img6} />
                            <Card.Title>Baby rocking chair 332$</Card.Title>

                            <Button variant="light">Add</Button>


                        </Card></Col>
                        <Col xs={{ order: 12 }}><Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={img7} />

                            <Link to="/Kids Games" variant="light"><Button variant="light">Kids Games</Button></Link>

                        </Card></Col>
                        <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img8} />


                            <Button variant="light">Children's Furniture</Button>


                        </Card></Col>
                    </Row>
                </Container>



            </div>
        )
    }
}

export default Children;