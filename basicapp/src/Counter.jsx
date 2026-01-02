import { useState } from "react"
export default function Counter() {
    let [count=0, setCount] = useState(0);
    let setCounts = () => {
        setCount(count++);
    };
    return (

        <div>
            <button onClick={setCounts}>click-count</button>
            <h2>count is {count}</h2>
        </div>
    );
}
