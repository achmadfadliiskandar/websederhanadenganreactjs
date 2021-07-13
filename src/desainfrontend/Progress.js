import React, { Component } from 'react'
import { Container , Col , Row, ProgressBar} from 'react-bootstrap'

export default class Progress extends Component {
    render() {
        return (
            <div className="bg-light" id="progress" style={{paddingTop: '50px',paddingBottom: '50px'}}>
            <h1 className="text-center">Skill</h1>
            <Container>
            <Row>
            <Col sm={6}>
            <p>HTML</p>
            <ProgressBar striped  variant="secondary" animated now={95} label={'95 %'} />
            <p>JAVASCRIPT</p>
            <ProgressBar striped  variant="warning" animated now={90} label={'90 %'} />
            </Col>
            <Col sm={6}>
            <p>PHP</p>
            <ProgressBar striped  variant="primary" animated now={85} label={'85 %'} />
            <p>KOTLIN</p>
            <ProgressBar striped  variant="info" animated now={80} label={'80 %'} />
            <p style={{display:"none;"}} className="text-light"></p>
            </Col>
            </Row>
            </Container>
            </div>
        )
    }
}
