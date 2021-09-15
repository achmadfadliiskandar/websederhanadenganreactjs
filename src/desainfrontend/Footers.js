import React, { Component } from 'react'

export default class Footers extends Component {
    render() {
        var style = {
            textAlign: "center",
            padding: "20px",
            position: "relative",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
            color : "white"
        }
        const btop = {
        // CSS
        position: 'sticky'
        }
        return (
            <div>
                <footer className="bg-dark mt-3">
                <div className="container">
                <div style={style}>
                <p className="pl-5">Copyright &copy; BUTUN PROGRAMMING 2021
                <a href="/" className="fa fa-angle-up btn btn-dark float-right" style={{btop}}></a>
                </p>
                {/* <a href="/" className="fa fa-angle-up btn btn-primary float-right mr-4" style={{btop}}></a> */}
                </div>
                </div>
                </footer>
            </div>
        )
    }
}
