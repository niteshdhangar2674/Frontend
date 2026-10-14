import { useMemo } from "react";
import { useState } from "react"

export function UseMemoCounter() {
    const [count, setCount] = useState(0);

    const expensiveCalculation = () => {
        console.log("Expensive calculation is running....")
        let result = 0;
        for (let i = 0; i < count; i++) {
            result += i;
        }
        return result;
    }
    const result = useMemo(() => expensiveCalculation(), [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((curr) => curr + 1)}>inc</button>
            <h1>{result}</h1>
        </div>
    )
}