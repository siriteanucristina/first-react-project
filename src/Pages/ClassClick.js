import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        console.log("Butonul a fost accesat")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} className="btn btn-outline-success">Click me</button>
            </div>
        )
    }
}

export default ClassClick