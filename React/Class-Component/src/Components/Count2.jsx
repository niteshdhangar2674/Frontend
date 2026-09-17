import { Component } from "react";

export class Count2 extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }

    }
    inc() {
        this.setState({
            count: this.state.count + 1
        })
    }
    dec() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <>
                <button onClick={() => this.inc()}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.dec()}>-</button>
            </>
        )
    }
}