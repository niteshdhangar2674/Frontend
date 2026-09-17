import { Component } from "react";


export class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "this state name is first state"
            name: this.props.name
        }
    }

    changeName() {
        this.setState({
            name: "Rohit"
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.changeName()}>click here</button>
            </>
        )
    }
}