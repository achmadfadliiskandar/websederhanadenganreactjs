import React, { Component } from 'react'
import { Container ,CardGroup,Card,Col,Row} from 'react-bootstrap'

export default class Progress extends Component {
    render() {
        return (
            <div className="bg-light" id="progress" style={{paddingTop: '60px',paddingBottom: '60px'}}>
            <h1 className="text-center">Skill</h1>
            <Container>
            <CardGroup>
            <Row>
            <Col sm={4}>
            <Card>
            <Card.Img variant="top" src="https://cdn.educba.com/academy/wp-content/uploads/2020/01/web-programming-languages-1.jpg"/>
            <Card.Body>
            <Card.Title>PROGRAMMING WEB</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            </Col>
            <Col sm={4}>
            <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2S59p-f6OaMPWQX94q1oBkblS76QIaj4NnA&usqp=CAU" />
            <Card.Body>
            <Card.Title>PROGRAMMING ANDROID</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            </Col>
            <Col sm={4}>
            <Card>
            <Card.Img variant="top" src="https://garudacyber.co.id/an-component/media/upload-gambar-artikel/pemrograman_dekstop.png" />
            <Card.Body>
            <Card.Title>PROGRAMMING DESKTOP</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            </Col>
            </Row>
            </CardGroup>
            </Container>
            </div>
        )
    }
}
