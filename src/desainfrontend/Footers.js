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
        return (
            <div>
                <footer className="bg-dark mt-3">
                <div className="container">
                <div style={style}>
                <p className>copyright BUTUN PROGRAMMING 2021</p>
                </div>
                </div>
                </footer>
            </div>
        )
    }
}
