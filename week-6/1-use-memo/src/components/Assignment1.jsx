import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(undefined);

    const expensiveValue = useMemo(() => {
        let temp = 1;
        if (!input) return 0
        for (let i = 2; i <= input; i++) {
            temp = temp * i;
        }
        return temp;
    }, [input])


    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput((e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}
