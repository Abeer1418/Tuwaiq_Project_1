import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { Card, Button, Carousel, } from "react-bootstrap";
import img1 from './img/clothes.jpg';
import img2 from './img/nav1.jpg';
import img3 from './img/play.jpg';
import img4 from './img/furniture.jpg'
// import pic3 from '../pages/img/2d9b911053d103e8087723bf3b872517';
//import pic1 from '../pages/img/img11';
//import pic1 from '../pages/img/img11';
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (

      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">

            Happy Child
          </Nav.Item>

          <Nav.Item style={{ width: '10px' }} >
            <img src={img2} rounded />

          </Nav.Item>

        </Nav>


        <h1>Products and discounts:</h1>



        <Carousel>
          <Carousel.Item interval={1000}>

            <img
              className="d-block w-50 h-10 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9ybA8ljbU06KkcrcZdUgMFaEFDWqV3OxIA-5ScPdvvnDR3dxd9Rarqo8KvlPbbNsnWc&usqp=CAU"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-50 h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnslfK2Q9KBIp-bO79gAzIeQVRyV-3vxQV2WN-w09vzwu-24k3X9YZ1hkekctocX4ye3A&usqp=CAU"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 h-10"
              src="https://i2.wp.com/hotinformationonline.com/wp-content/uploads/2017/08/sale.png?ssl=1"
            />
          </Carousel.Item>
        </Carousel>


        <h1>Product Categories:</h1>

        <Container>
          <Row>
            <Col xs><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1} />
              <Link to="/Clothes" variant="light"><Button variant="light">clothes</Button></Link>


            </Card></Col>
            <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img3} />
              <Link to="/Kids Games" variant="light"><Button variant="light">Kids Games</Button></Link>

              

            </Card></Col>
            <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img4} />
              <Link to="/Children's Furniture" variant="light"><Button variant="light">Children's Furniture</Button></Link>

     

            </Card></Col>
          </Row>
        </Container>













      </div>
    )
  }
}
export default Home;