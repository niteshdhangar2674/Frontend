import { Component } from "react";

export class Count extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    incre() {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        return (
            <>
                <button onClick={() => this.incre()}>+</button>
                <h1>{this.state.count}</h1>
            </>
        )
    }
}