import { Component } from "react";

class ClassProps extends Component {
    render() {
        return (
            <>
                <h1>hello this is 👉 {this.props.name}</h1>
                {this.props.children}
            </>
        )
    }
}
export default ClassProps;