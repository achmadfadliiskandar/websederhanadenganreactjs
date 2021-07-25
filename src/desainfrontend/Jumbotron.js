import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';


export default class Jumbo extends Component {
    render() {
        const mystyle = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.295), rgba(0, 0, 0, 0.5)),url("https://code.visualstudio.com/assets/docs/nodejs/reactjs/peek-definition.png")',
            backgroundSize : 'cover',
            backgroundRepeat  : 'no-repeat',
            height: 400,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }
        return (
            <div>
                <Jumbotron fluid style={mystyle}>
                <div className="container">
                <h1 className="text-white text-center mt-5 pt-4" style={{fontSize: 60}}>PROGRAMMER BUTUN</h1>
                <p className="text-white text-center">perusaan yang bergerak di bidang web development dan desain</p>
                </div>
                </Jumbotron>
            </div>
        )
    }
}
