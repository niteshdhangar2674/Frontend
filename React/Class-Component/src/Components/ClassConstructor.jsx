import { Component } from "react";

export class ClassConstructor extends Component {
    constructor() {
        super();
        console.log("constructor form ClassConstructor");
    }
    render() {
        return (
            <>
                <h1>this is class Constructor</h1>
            </>
        )
    }
}