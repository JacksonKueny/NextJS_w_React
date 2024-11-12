// app/components/Counter.js
"use client"; // Add this directive at the top

import { useState } from 'react';

function Counter({ increment, backgroundColor }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => (prevCount + increment > 10 ? 0 : prevCount + increment));
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={handleIncrement}
                style={{ backgroundColor }}
            >
                Increment by {increment}
            </button>
        </div>
    );
}

export default Counter;
