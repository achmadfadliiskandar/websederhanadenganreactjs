import React, { Component } from 'react'
import { Container , Form , Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <div id="contacts" style={{paddingTop: '100px',paddingBottom: '100px'}}>
                <Container>
                <h1 className="text-center">Contact</h1>
                <Form>
                <Form.Group controlId="nama">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Enter Nama" />
                </Form.Group>
                <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="komentar">
                <Form.Label>Komentar</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
                </Form>
                </Container>
                {/* khusus untuk fitur back to top */}
                <a href="/" className="btn btn-primary float-right mr-4">
                <i class='fas fa-angle-up'>Top</i>
                </a>
            </div>
        )
    }
}
