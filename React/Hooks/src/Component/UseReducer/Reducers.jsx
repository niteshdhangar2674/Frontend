import { useReducer } from "react";

export function Reducers() {
    const initialState = 0;

    const reducer = (state, action) => {
        switch (action) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default: return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch("INCREMENT")}>Increment</button>
            <button onClick={() => dispatch("DECREMENT")}>Decrement</button>

        </>
    )
}