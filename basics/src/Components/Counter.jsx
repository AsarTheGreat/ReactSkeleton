import { useState } from "react";

export default function Counter()
{
    const [inc, setInc] = useState(0);
    const [counter, setCounter] = useState(1);

    function handleIncrement()
    {
        setInc(inc + counter);
    }

    function handleDecrement()
    {
        setInc(inc - counter);
    }

    function handleIncrementBy()
    {
        setCounter(counter + 1);
    }

    function handleDecrementBy()
    {
        setCounter(counter - 1);
    }

    return(
        <div>My Counter
            <div>
            <input type="text" value={inc}></input>
            <input type="button" value="Increment" onClick={handleIncrement}></input>
            <input type="button" value="Decrement" onClick={handleDecrement}></input>
            </div>
            
            <div>
            <input type="text" value={counter}></input>
            <input type="button" value="IncrementBy" onClick={handleIncrementBy}></input>
            <input type="button" value="DecrementBy" onClick={handleDecrementBy}></input>
            </div>
        </div>
    );
}