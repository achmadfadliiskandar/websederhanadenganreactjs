import React, { Component } from 'react'
import {Container,Row , Col} from 'react-bootstrap'
export default class About extends Component {
    render() {
        const btop = {
            // for css
            position: 'sticky'
        }
        return (
            <div id="abouts" style={{paddingTop: '60px',paddingBottom: '60px'}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Container>
            <h1 className="text-center">About</h1>
            <Row className="text-center text-secondary">
            <Col sm={6} className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>
            <Col sm={6} className="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,</Col>
            </Row>
            </Container>
            <a href="/" className="fa fa-angle-up btn btn-primary float-right mr-4" style={{btop}}>
            </a>
            </div>
        )
    }
}
