import React, { Component } from 'react'
import {Container,Row , Col} from 'react-bootstrap'
export default class About extends Component {
    render() {
        return (
            <div id="abouts" style={{paddingTop: '50px',paddingBottom: '50px'}}>
            <Container>
            <h1 className="text-center">About</h1>
            <Row className="text-center">
            <Col sm={6} className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Col>
            <Col sm={6} className="text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Col>
            </Row>
            </Container>
            </div>
        )
    }
}
