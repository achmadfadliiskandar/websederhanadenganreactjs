import React, { Component } from 'react'
import { Container , ProgressBar} from 'react-bootstrap'

export default class Progress extends Component {
    render() {
        return (
            <div className="bg-light" id="progress" style={{paddingTop: '60px',paddingBottom: '60px'}}>
            <h1 className="text-center">Skill</h1>
            <Container>
                {/* html dan js */}
            <p>HTML</p>
            <ProgressBar striped  variant="secondary" animated now={95} label={'95 %'} />
            <p>JAVASCRIPT</p>
            <ProgressBar striped  variant="warning" animated now={90} label={'90 %'} />
            {/* php dan kotlin */}
            <p>PHP</p>
            <ProgressBar striped  variant="primary" animated now={85} label={'85 %'} />
            <p>KOTLIN</p>
            <ProgressBar striped  variant="info" animated now={80} label={'80 %'} />
            {/* <p style={{display:"none;"}} className="text-light"></p> */}
            </Container>
            </div>
        )
    }
}
