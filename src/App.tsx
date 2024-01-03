
import './App.css';
import React, {useState} from "react";

const Counter: React.FC=()=>{
    const [count , setCount] = useState<number>(0);
    return(
        <>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </>
    )
}



export default Counter
