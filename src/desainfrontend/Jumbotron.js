import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';

export default class Jumbo extends Component {
    render() {
        const mystyle = {
            backgroundImage: 'url("https://code.visualstudio.com/assets/docs/nodejs/reactjs/peek-definition.png")',
            backgroundSize : 'cover',
            backgroundRepeat  : 'no-repeat',
            height: 320,
        }
        return (
            <div>
                <Jumbotron fluid style={mystyle}>
                <div className="container">
                <h1 className="text-light text-center mt-5 pt-4" style={{fontSize: 60}}>PROGRAMMER BUTUN</h1>
                </div>
                </Jumbotron>
            </div>
        )
    }
}
